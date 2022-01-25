import { Component, ChangeDetectionStrategy,EventEmitter, ViewChild, OnInit,Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location, NumberSymbol } from '@angular/common';
import { NbDialogService } from '@nebular/theme';
import { InvoiceNumberComponent } from './invoice-number/invoice-number.component';
import { InvoiceService } from './invoice.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { InvoicePartsComponent } from './invoice-parts/invoice-parts.component';
// import { InvoiveNumberService } from './invoive.service';
import { parts } from './invoice-parts/parts';
import { DatabaseService } from '../services/database/database.service';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ToastService } from 'src/app/ui/toast.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./invoice.component.scss']
})




export class InvoiceComponent implements OnInit {
  @Output() event = new EventEmitter<string>();
  autoManual: boolean = false;
  name: Variable;
  parts:any;
  rate: any;
  customers:any;
  message = "Manual";
  autoValue: string;
  number: string;
  // ngModelDate = new Date();
  itemList: any = [];
  p: any;
  selectedItem = '1';
  selectedItemButton = '2';
  

  numbers = new Array(1, 4, 9);
 

  get date() {
    return this.form.get('date');
  }
  get description() {
    return this.form.get('description');
  }

  get poNumber() {
    return this.form.get('poNumber');
  }
  get InvoiceNumber() {
    return this.form.get('InvoiceNumber');
  }

  get batch() {
    return this.form.get('batch');
  }

  get quantity() {
    return this.form.get('quantity');
  }
  get packingDetails() {
    return this.form.get('packingDetails');
  }
  get rm_name() {
    return this.form.get('rm_name');
  }
  get customer() {
    return this.form.get('customer');
  }
  get material() {
    return this.form.get('material');
  }
  get partName() {
    return this.form.get('part');
  }
  get partNumber() {
    return this.form.get('number');
  }


  private selectedId: string;
  selectedObject: any;
  option: any = 'FG';
  form: FormGroup;
  validity = true;
  part: number;
  partOptions: string[] = [];
  partsFiltered$: Observable<any[]>;
  customersFiltered$: Observable<any[]>;
  
  @ViewChild('autoInput') input;
  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private toast: ToastService,
    private location: Location,
    private dialogService: NbDialogService,
    private data: InvoiceService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {

    this.db.getParts().subscribe ((rate) => {
      this.rate =rate;
    });
    

    console.log("1");
    this.data.currentMessage.subscribe(message => this.updatemode(message));
    this.data.currentInvoice.subscribe(message => this.updateNumber(message));
    this.data.currentPart.subscribe(parts => this.updateParts(parts));
    // this.data.currentPart.subscribe(part=>this.updateParts(part));
    this.route.paramMap.subscribe((params: ParamMap) => { 
      this.selectedId = params.get('id');
      this.fetchObject();
      this.loadPartsList();
      this.loadCustomersList();
    });
    this.form = this.fb.group({
      InvoiceNumber: [''],
      poNumber: [''],
      date: [''],
      customer:[''], 
      description: [''],
      rm_name: [''],
      partName: [''],
      partNumber: [''],
      rate:[''],
      quantity:[''],
      packingDetails:['']
    });
    this.form.valueChanges.subscribe(() => {
      this.validity = this.form.valid;
    });

  }
  

  private loadCustomersList() {
    this.db.getCustomers()
      .subscribe((list: any) => {
        this.customersFiltered$ = of(list);
      })
  }
  private loadPartsList() {
    this.db.getParts()
      .subscribe((list: any) => {
        this.partOptions = list;
        this.partsFiltered$ = of(list);
      })
  }
  
  // CUSTOMER NAME FILTER

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.partOptions.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  // PART NAME FILTER 
  private value(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.partOptions.filter(optionValue => optionValue.toLowerCase().includes(filterValue))
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  // getFilterOptions(value: string): Observable<string[]> {
  //   return of(value).pipe(
  //     map(filterString => this.value(filterString)),
  //   );
  // }



  open() {
    this.dialogService.open(InvoiceNumberComponent);
  }

  openPart() {
    this.itemList.push(undefined);
  }
    // this.dialogService.open(InvoicePartsComponent).onClose.subscribe(
    //   part => {
    //     this.itemList.push(part);
    //     console.log(part);
    //   }
    // );
  
  onDataChange(): void {
    this.customersFiltered$ = this.getFilteredOptions(this.input.nativeElement.value);
  }
  onSelectionChange($event) {
    console.log($event.name);
    this.customersFiltered$ = this.getFilteredOptions($event.name);
  }

  onItemChange(): void {
    this.partsFiltered$ = this.getFilteredOptions(this.input.nativeElement.value);
  }
  onSelectChange($event) {
    this.partsFiltered$ = this.getFilteredOptions($event);
  }

  recieveMessage($event) {
    this.message = $event;
  }
  onDismissClicked() {
    this.event.emit('dismiss');
    this.location.back();
  }

  updatemode(msg: string) {
    if (msg != null) {
      this.message = msg;
      if (this.message == "Auto") {
        this.autoManual = true;
      }
      else {
        this.autoManual = false;
      }
    }
  }

  updateNumber(msg: string) {
    if (msg != "") {
      this.number = msg;
    }
  }
  

  
  updateParts(part: parts) {
    console.log(part);
    if (part != null) {
      this.itemList.push(part);
    }

  }
  fetchObject() {
    if (this.selectedId) {
      console.log(this.selectedObject)
      this.selectedObject = this.db.getPart(this.selectedId);
      this.selectedObject.subscribe((data: any) => {
        this.form.patchValue({
          name: data.name,
          description: data.description,
          code: data.code,
          partWeight: data.partWeight,
          shotWeight: data.shotWeight,
          cycleTime: data.cycleTime,
          cavity: data.cavity,
          inventoryType: data.inventoryType,
          customer: data.customer,
          nextOperation: data.nextOperation,
          price: data.price,
          rm_name: data.rm_name,
          partName: data.partName,
          rate: data.rate,
          quantity:data.quantity,
          packingDetails:data.packingDetails,
        });
      });
    }
  }



// ONSUBMIT
onButton() {
  console.log(this.form.value)
    this.db.addInvoice(this.form.value, this.selectedId)
      .then(() => {
        this.toast.success('Invoice updated succesfully');
        this.form.reset();
        if (this.selectedId) {
          this.location.back();
        }
      });
    }
  }
