import { Component, NgModule, OnInit } from '@angular/core';
import { ToastService } from './../../ui/toast.service';
import { DatabaseService } from './../../services/database/database.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import {NbDatepickerModule} from '@nebular/theme';

@Component({
  selector: 'app-batch-card-edit',
  templateUrl: './batch-card-edit.component.html',
  styleUrls: ['./batch-card-edit.component.scss']
})

export class BatchCardEditComponent implements OnInit {


  get batchNumber(){
    return this.form.get('batchNumber');
  }
  get partName(){
    return this.form.get('partName');
  }
  get materialName(){
    return this.form.get('materialName');
  }
  get machineName(){
    return this.form.get('machineName');
  }
 

  private selectedId: string;
  // selectedObject: any;
  // option: any = 'FG';
  form: FormGroup;


  // validity = true;


  constructor(
    private fb: FormBuilder,
    private db: DatabaseService,
    private toast: ToastService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      batchNumber: ['', [Validators.required, Validators.minLength(3)]],
      partName: [''],
      materialName: [''],
      machineName: [''],})
    

    
  }

}

