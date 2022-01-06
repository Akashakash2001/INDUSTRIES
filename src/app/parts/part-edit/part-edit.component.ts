import { ToastService } from './../../ui/toast.service';
import { DatabaseService } from './../../services/database/database.service';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';


import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-part-edit',
  templateUrl: './part-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./part-edit.component.scss']
})
export class PartEditComponent implements OnInit {
  data: any;


  get name() {
    return this.form.get('name');
  }
  get description() {
    return this.form.get('description');
  }
  get code() {
    return this.form.get('code');
  }
  get partWeight() {
    return this.form.get('partWeight');
  }
  get shotWeight() {
    return this.form.get('shotWeight');
  }
  get cycleTime() {
    return this.form.get('cycleTime');
  }
  get cavity() {
    return this.form.get('cavity');
  }
  get number() {
    return this.form.get('number');
  }
  get inventoryType() {
    return this.form.get('inventoryType');
  }
  get customer() {
    return this.form.get('customer');
  }
  get nextOperation() {
    return this.form.get('nextOperation');
  }
  get price() {
    return this.form.get('price');
  }
  get material() {
    return this.form.get('material');
  }
  get rm_name() {
    return this.form.get('rm_name');
  }
  get tax_slab() {
    return this.form.get('tax_slab');
  }

  private selectedId: string;
  selectedObject: any;
  option: any = 'FG';
  form: FormGroup;
  validity = true;
  options: string[] = [];
  filteredOptions$: Observable<any[]>;
  partsFiltered$: Observable<any[]>;
  customersFiltered$: Observable<any[]>;

  @ViewChild('autoInput') input;
  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private toast: ToastService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
      this.fetchObject();
      // this.loadCustomersList();
    });
    this.loadRMlist();
    this.loadPartsList();

    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      code: [''],
      partWeight: [],
      shotWeight: [],
      cycleTime: [],
      cavity: [],
      inventoryType: [this.option],
      customer: [''],
      nextOperation: [''],
      price: [],
      rm_name: [],
      tax_slab: [],


    });

    this.form.valueChanges.subscribe(() => {
      this.validity = this.form.valid;
      
    });
  }
  private loadPartsList() {
    this.db.getParts()
    .subscribe((list: any)=>{
      this.filteredOptions$=of(list);
    this.options=list ;
     })
    }
  private loadRMlist() {
    this.db.getMaterials()
      .subscribe((list: any) => {
        this.filteredOptions$ = of(list);
        this.options = list;
      })

  }


  // private loadCustomersList() {
  //   this.db.getCustomers()
  //     .subscribe((list: any) => {
  //       this.customersFiltered$ = of(list);
  //     })
  // }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((optionValue: any) => optionValue.name.toLowerCase().includes(filterValue));
  }

  getFilteredOptions(value: string): Observable<string[]> {
    of(value).pipe(
      map(filterString => this.filter(filterString)),
    ).subscribe((data) => console.log(data))
    console.log(value)
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  onChange() {
    this.form.controls['customer'].setValue('');
    this.form.controls['nextOperation'].setValue('');
  }

  onDataChange() {
    console.log(this.input.nativeElement.value)
    this.filteredOptions$.subscribe((data) => {
      console.log(data)
    })

    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
  }


  fetchObject() {
    if (this.selectedId) {
      console.log(this.selectedId)
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
          tax_slab: data.tax_slab,
         
        });
      });
    }
  }

  // ONSUBMIT
  onButtonClicked(clickedButton) {
    if (clickedButton === 'save') {
      this.db.addPart(this.form.value, this.selectedId)
        .then(() => {
          this.toast.success('Part updated succesfully');
          this.form.reset();
          if (this.selectedId) {
            this.location.back();
          }
        });
    }
  }
}
