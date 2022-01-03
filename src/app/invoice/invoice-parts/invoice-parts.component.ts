import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database/database.service';
import { InvoiveNumberService } from '../invoive.service';
import { parts } from './parts';
import { NbDialogRef } from '@nebular/theme';




@Component({
  selector: 'app-invoice-parts',
  templateUrl: './invoice-parts.component.html',
  styleUrls: ['./invoice-parts.component.scss']
})
export class InvoicePartsComponent implements OnInit {
  selectedItem = '2';
  form: FormGroup;
  parts: any = [];
  part:parts;
  get batch() {
    return this.form.get('batch');
  }
  get quantity() {
    return this.form.get('quantity');
  }
  get package() {
    return this.form.get('package');
  }
  // get batchNumber() {
  //   return this.form.get('weight');
  // }
  constructor(
    private fb: FormBuilder,private db: DatabaseService,    private data: InvoiveNumberService, protected ref:NbDialogRef<InvoicePartsComponent>,

  ) { 
    this.db.getParts().subscribe((partData) => {
      this.parts = partData;
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      quantity: [''],
      batch:[''],
      package:['']
    });
  }

 

  updatePart(part:parts){
    // console.log("update");
    this.part = part;
    // this.parts = part;
  }


  cancel() {
    this.ref.close();
  }

  submit(obj:any) {
    console.log(obj[0]);
    console.log(obj[1].value);
    this.ref.close(obj);
  }
}