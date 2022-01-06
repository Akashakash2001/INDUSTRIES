import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';
import { ToastService } from 'src/app/ui/toast.service';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ScheduleComponent } from '../../schedule/schedule.component';
import { dispatch } from 'rxjs/internal/observable/pairs';

@Component({
  selector: 'app-loading-edit',
  templateUrl: './loading-edit.component.html',
  styleUrls: ['./loading-edit.component.scss']
})
export class LoadingEditComponent implements OnInit {

  requiredForm: FormGroup;
  customer: any;
  selectedCustomer = '';
  parts: Observable<any>;
  validity = false;
  private selectedId: string;
  selectedObject: any;
  autoValue: string;
  firestore: any;


  get partNo() {
    return this.loadingForm.get('partNo');
  }
  get partName() {
    return this.loadingForm.get('partName');
  }
  get date() {
    return this.loadingForm.get('date');
  }
  get quantity() {
    return this.loadingForm.get('quantity');
  }
  get invoiceNo() {
    return this.loadingForm.get('invoiceNo');
  }
  get invoiceDate() {
    return this.loadingForm.get('invoiceDate');
  }
  get invoiceValue() {
    return this.loadingForm.get('invoiceValue');
  }
  get driver() {
    return this.loadingForm.get('driver');
  }
  get company() {
    return this.loadingForm.get('company');
  }
  get trip() {
    return this.loadingForm.get('trip');
  }
  get grnNo() {
    return this.loadingForm.get('grnNo');
  }
  sampleDate = new Date();
  partOptions: string[] = [];
  partsFiltered$: Observable<any[]>;
  
  @ViewChild('autoInput') input;
  constructor(
    private toast: ToastService,
    private route: ActivatedRoute,
    private location: Location,
    private db: DatabaseService,
    private fb: FormBuilder,
    
  ) { }
  private loadPartsList() {
    this.db.getParts()
      .subscribe((list: any) => {
        this.partOptions = list;
        this.partsFiltered$ = of(list);
      })
  }
  //Delete
  onDeleteClicked(clickedButton){
    this.loadingForm.get("typeOfDocument").setValue("loading");
    if (clickedButton === "delete"){
      this.db.click(this.selectedId)
      this.toast.success('Deleted Successfully');
      this.location.back()
    }
  }
  
  onItemChange() {
    this.partsFiltered$ = this.getFilteredOptions(this.input.nativeElement.value);
  }
  onSelectChange($event) {
    this.partsFiltered$ = this.getFilteredOptions($event);
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }
  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.partOptions.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }


  loadingForm: FormGroup;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
      this.fetchObject()
      this.myForm();
    });

    this.loadingForm = this.fb.group({
      date: [new Date()],
      partNo: ['', [Validators.required, Validators.minLength(3)]],
      partName: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      invoiceNo: ['', [Validators.required]],
      invoiceDate: [new Date()],
      invoiceValue: ['', [Validators.required]],
      driver: ['', [Validators.required]],
      company: ['', [Validators.required]],
      trip: ['', [Validators.required]],
      grnNo: [],
      typeOfDocument: []
    });
    this.loadingForm.valueChanges.subscribe(() => {
      this.validity = this.loadingForm.valid;
    });
  }
  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  fetchObject() {
    if (this.selectedId) {
      this.selectedObject = this.db.getLoadingSheet(this.selectedId);
      this.selectedObject.subscribe((data: any) => {
        console.log(data);
        this.loadingForm.patchValue({
          partNo: data.partNo,
          partName: data.partName,
          date: new Date(data.date.toMillis()),
          quantity: data.quantity,
          invoiceNo: data.invoiceNo,
          invoiceDate: new Date(data.invoiceDate.toMillis()),
          invoiceValue: data.invoiceValue,
          driver: data.driver,
          company: data.company,
          trip: data.trip,
          grnNo: data.grnNo,
          typeOfDocument: data.typeOfDocument,
        });
      });
    }
  }
  

  // ONSUBMIT
  onButtonClicked(clickedButton) {
    this.loadingForm.get("typeOfDocument").setValue("loading");
    if (clickedButton === 'save') {
      this.db.addLoadingSheet(this.loadingForm.value, this.selectedId)
        .then(() => {
          this.toast.success('Dispatch updated succesfully');
          if (this.selectedId) {
            this.location.back();
          }
        });
    }

  }

  onDate(event) {
    console.log(event);
    console.log(this.sampleDate);
  }
}

