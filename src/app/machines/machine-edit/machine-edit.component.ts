import { ToastService } from './../../ui/toast.service';
import { DatabaseService } from './../../services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-machine-edit',
  templateUrl: './machine-edit.component.html',
  styleUrls: ['./machine-edit.component.scss']
})
export class MachineEditComponent implements OnInit {
  // GETTERS AND SETTERS
  get name() {
    return this.form.get('name');
  }
  get code() {
    return this.form.get('code');
  }
  get make() {
    return this.form.get('make');
  }
  get email() {
    return this.form.get('email');
  }

  private selectedId: string;
  selectedObject: any;
  option: any = 'moulding';
  // DECLARATIONS
  form: FormGroup;
  mouldingMachineParams: FormGroup;
  validity = false;

  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private toast: ToastService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
      this.fetchObject();
    });
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      code: ['', [Validators.required, Validators.minLength(3)]],
      make: ['', Validators.required],
      machineType: [''],
      dimensions: this.fb.group({
        length: [''],
        width: [''],
        height: ['']
      }),
    });

    this.mouldingMachineParams = this.fb.group({
      tonnage: [''],
      tieBarDistance: [''],
      plattenSize: this.fb.group({
        length: [''],
        width: ['']
      }),
      screwSize: [''],
      maxShotWt: ['']
    });

    this.form.valueChanges.subscribe(() => {
      this.validity = this.form.valid;
    });

  }
  onChange() {

  }

  fetchObject() {
    if (this.selectedId) {
      this.selectedObject = this.db.getMachine(this.selectedId);
      this.selectedObject.subscribe((data: any) => {
        this.option = data.machineType;
        this.form.patchValue({
          name: data.name,
          code: data.code,
          make: data.make,
          machineType: data.machineType,
          dimensions: data.dimensions
        });
        if (this.option === 'moulding') {
          this.mouldingMachineParams.patchValue({
            tonnage: data.tonnage,
            tieBarDistance: data.tieBarDistance,
            plattenSize: data.plattenSize,
            screwSize: data.screwSize,
            maxShotWt: data.maxShotWt
          });
        }
      });
    }
  }
  // ONSUBMIT
  onButtonClicked(clickedButton) {

    if (clickedButton === 'save') {
      let data;
      if (this.form.value.machineType === 'moulding') {
        data = Object.assign(this.form.value, this.mouldingMachineParams.value);
      } else {
        data = this.form.value;
      }
      this.db.addMachine(data, this.selectedId)
        .then(() => {
          this.toast.success('Machine updated succesfully');
          this.form.reset();
          this.mouldingMachineParams.reset();
          if (this.selectedId) {
            this.location.back();
          }
        });
    }
  }

}
