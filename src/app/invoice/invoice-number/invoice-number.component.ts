import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { InvoiveNumberService } from '../invoive.service';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-invoice-number',
  templateUrl: './invoice-number.component.html',
  styleUrls: ['./invoice-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoiceNumberComponent implements OnInit {
  @Output() event = new EventEmitter<string>();

  currentNumber: number = 0;
  prefix;
  radio;
  price;
  gender;
  constructor(
    private dialogRef: NbDialogRef<any>) {

  }

  ngOnInit(): void {

  }

  onDismissClicked() {
    this.dialogRef.close()
  }

  onAutoClicked() {
  }

  onSubmitClicked(){
    console.log("Submit Clicked");
    console.log(this.radio);
    console.log(this.prefix);
    console.log(this.currentNumber);
  }

}

