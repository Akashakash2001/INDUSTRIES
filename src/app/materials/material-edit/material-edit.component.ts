import { ToastService } from './../../ui/toast.service';
import { DatabaseService } from './../../services/database/database.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-material-edit',
  templateUrl: './material-edit.component.html',
  styleUrls: ['./material-edit.component.scss']
})
export class MaterialEditComponent implements OnInit {

  options: any[];
  filteredOptions$: Observable<any[]>;

  @ViewChild('autoInput') input;

  get rmCategory() {
    return this.rmForm.get('rmCategory');
  }
  get grade() {
    return this.rmForm.get('grade');
  }
  get color() {
    return this.rmForm.get('color');
  }

  get partNumber() {
    return this.boForm.get('partNumber');
  }


  private selectedId: string;
  selectedObject: any;
  option: any = 'Raw Material';
  rmForm: FormGroup;
  boForm: FormGroup;
  validity = false;

  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private toast: ToastService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  rmName = '';
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
      this.fetchObject();
    });

    this.boForm = this.fb.group({
      typeOfMaterial: ['Bought Out'],
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      partNumber: ['', Validators.required],
      vendor: ['', Validators.required],
      price: ['', Validators.required],
    });

    this.rmForm = this.fb.group({
      typeOfMaterial: ['Raw Material'],
      name: [{ value: '', disabled: true }, [Validators.required, Validators.minLength(3)]],
      rmCategory: ['', Validators.required],
      grade: ['', Validators.required],
      color: ['', Validators.required],
      description: [''],
      vendor: ['', Validators.required],
      price: ['', Validators.required],
    });

    this.boForm.valueChanges.subscribe(() => {
      this.validity = this.boForm.valid;
    });

    this.rmForm.valueChanges.subscribe((data) => {
      this.validity = this.rmForm.valid;
      this.setName();
    });
    // AUTO COMPLETE
    this.db.getVendors().subscribe((data) => {
      this.options = data;
      // console.log(data);
    });
    this.filteredOptions$ = of(this.options);
  }

  fetchObject() {
    if (this.selectedId) {
      this.selectedObject = this.db.getMaterial(this.selectedId);
      this.selectedObject.subscribe((data: any) => {
        if (data.typeOfMaterial === 'Raw Material') {
          this.option = 'Raw Material';
          this.rmForm.setValue({
            typeOfMaterial: data.typeOfMaterial,
            name: data.name,
            rmCategory: data.rmCategory,
            grade: data.grade,
            color: data.color,
            description: data.description,
            vendor: data.vendor,
            price: data.price
          });
        } else if (data.typeOfMaterial === 'Bought Out') {
          this.option = 'Bought Out';
          this.boForm.setValue({
            typeOfMaterial: data.typeOfMaterial,
            name: data.name,
            partNumber: data.partNumber,
            description: data.description,
            vendor: data.vendor,
            price: data.price
          });
        }
      });
    }
  }

  setName() {
    this.rmName = this.rmForm.get('rmCategory').value;
    if (this.rmForm.get('grade').value) {
      this.rmName = this.rmName + ' - ' + this.rmForm.get('grade').value;
    }
    if (this.rmForm.get('color').value) {
      this.rmName = this.rmName + ' - ' + this.rmForm.get('color').value;
    }
    if (this.rmForm.get('description').value) {
      this.rmName = this.rmName + ' (' + this.rmForm.get('description').value + ')';
    }
  }


  // AUTO COMPLETE
  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.name.toLowerCase().includes(filterValue));
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
  }

  // ONSUBMIT
  onButtonClicked(clickedButton) {
    if (clickedButton === 'save') {
      if (this.option === 'Bought Out') {
        this.db.addMaterial(this.boForm.value, this.selectedId)
          .then(() => {
            this.toast.success('Material updated succesfully');
            this.boForm.reset();
            this.rmForm.reset();
            if (this.selectedId) {
              this.location.back();
            }
          });
      } else {
        this.rmForm.value.name = this.rmName;
        this.db.addMaterial(this.rmForm.value, this.selectedId)
          .then(() => {
            this.toast.success('Material updated succesfully');
            this.boForm.reset();
            this.rmForm.reset();
            if (this.selectedId) {
              this.location.back();
            }
          });
      }
    }
  }

}
