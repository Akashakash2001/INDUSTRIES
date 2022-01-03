import { ToastService } from './../../ui/toast.service';
import { DatabaseService } from './../../services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  // GETTERS AND SETTERS
  get name() {
    return this.form.get('name');
  }
  get address() {
    return this.form.get('address');
  }
  get pincode() {
    return this.form.get('pincode');
  }
  get gstin() {
    return this.form.get('gstin');
  }
  // DECLARATIONS
  private selectedId: string;
  selectedObject: any;
  form: FormGroup;
  validity = false;

  // MAIN
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
      address: ['', [Validators.required, Validators.minLength(3)]],
      pincode: ['', [Validators.required, Validators.minLength(3)]],
      gstin: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]]
    });

    this.form.valueChanges.subscribe(() => {
      this.validity = this.form.valid;
    });
  }
  fetchObject() {
    if (this.selectedId) {
      this.selectedObject = this.db.getCustomer(this.selectedId);
      this.selectedObject.subscribe((data: any) => {
        this.form.setValue({
          name: data.name,
          address: data.address,
          pincode: data.pincode,
          gstin: data.gstin
        });
      });
    }
  }
  onButtonClicked(clickedButton) {
    if (clickedButton === 'save') {
      this.db.addCustomer(this.form.value, this.selectedId)
        .then(() => {
          this.toast.success('Customer updated succesfully');
          this.form.reset();
          if (this.selectedId) {
            this.location.back();
          }
        });
    }
  }
}
