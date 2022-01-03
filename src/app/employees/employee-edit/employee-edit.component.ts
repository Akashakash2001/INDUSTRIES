import { ToastService } from './../../ui/toast.service';
import { DatabaseService } from './../../services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
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

  // DECLARATIONS
  private selectedId: string;
  selectedObject: any;
  form: FormGroup;
  validity = false;

  //MAIN
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
      phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    });

    this.form.valueChanges.subscribe(() => {
      this.validity = this.form.valid;
    });
  }
  fetchObject() {
    if (this.selectedId) {
      this.selectedObject = this.db.getEmployee(this.selectedId);
      this.selectedObject.subscribe((data: any) => {
        this.form.patchValue({
          name: data.name,
          code: data.code,
          phone: data.phone,
          email: data.email
        });
      });
    }
  }
  // ONSUBMIT
  onButtonClicked(clickedButton) {
    if (clickedButton === 'save') {
      // this.toast.success();
      this.db.addEmployee(this.form.value, this.selectedId)
        .then(() => {
          this.toast.success('Employee updated succesfully');
          this.form.reset();
          if (this.selectedId) {
            this.location.back();
          }
        });
    }
  }


}
