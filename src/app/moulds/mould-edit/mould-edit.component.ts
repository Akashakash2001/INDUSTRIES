import { ToastService } from './../../ui/toast.service';
import { DatabaseService } from './../../services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mould-edit',
  templateUrl: './mould-edit.component.html',
  styleUrls: ['./mould-edit.component.scss']
})
export class MouldEditComponent implements OnInit {
  // GETTERS AND SETTERS
  get name() {
    return this.form.get('name');
  }
  get code() {
    return this.form.get('code');
  }
  get phone() {
    return this.form.get('phone');
  }
  get email() {
    return this.form.get('email');
  }
  get cycleTime() {
    return this.form.get('cycleTime');
  }

  get typeOfMould() {
    return this.form.get('typeOfMould');
  }
  get material() {
    return this.form.get('material');
  }

  get childpart() {
    return this.form.get('childpart') as FormArray;
  }
  // DECLARATIONS
  private selectedId: string;
  selectedObject: any;
  form: FormGroup;
  validity = true;
  shotWt: number;
  option: any = 'FG';



  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private toast: ToastService,
    private route: ActivatedRoute,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
      this.fetchObject();
    });
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required, Validators.minLength(3)]],
      cycleTime: [''],
      inventoryType: [this.option],
      material: [''],
      typeOfMould: ['mould'],
      dimensions: this.fb.group({
        length: [''],
        width: [''],
        height: ['']
      }),
      childpart: this.fb.array([])
    });

    this.form.valueChanges.subscribe((data) => {
      this.validity = this.form.valid;
    });
  }


  fetchObject() {
    if (this.selectedId) {
      this.selectedObject = this.db.getMould(this.selectedId);
      this.selectedObject.subscribe((data: any) => {
        this.form.setValue({
          name: data.name,
          code: data.code,
          cycleTime: data.cycleTime,
          typeOfMould: data.typeOfMould,
          dimensions: data.dimensions
        });
        if (data.typeOfMould === 'mould') {
          this.shotWt = data.shotWt;
        }
      });
    }
  }

  addChildpart() {
    const cp = this.fb.group({
      partName: [],
      partNumber: [],
      quantity: []
    });
    this.childpart.push(cp);
  }

  deleteChildpart(i) {
    this.childpart.removeAt(i);
  }
  // ONSUBMIT
  onButtonClicked(clickedButton) {
    if (clickedButton === 'save') {

      let data;
      data = this.form.value;
      if (this.form.value.typeOfMould === 'mould') {
        data.shotWt = this.shotWt;
      }
      this.db.addMould(data, this.selectedId)
        .then(() => {
          this.toast.success('Mould updated succesfully');
          this.form.reset();
          this.shotWt = null;
          if (this.selectedId) {
            this.location.back();
          }
        });
      // this.toast.success();
      // if (this.option === 'Bought Out') {
      //   this.db.addMaterial(this.boForm.value)
      //     .then(() => {
      //       this.toast.success('Material updated succesfully');
      //       this.boForm.reset();
      //       this.rmForm.reset();
      //     });
      // } else {
      //   this.rmForm.value.name = this.rmName;
      //   this.db.addMaterial(this.rmForm.value)
      //     .then(() => {
      //       this.toast.success('Material updated succesfully');
      //       this.boForm.reset();
      //       this.rmForm.reset();
      //     });
      // }
    }
  }
}
