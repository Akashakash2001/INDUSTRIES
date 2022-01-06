import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-form-delete',
  templateUrl: './form-delete.component.html',
  styleUrls: ['./form-delete.component.scss']
})
export class FormDeleteComponent implements OnInit {
  @Input() status='true';
  @Output() event= new EventEmitter<string>();
  constructor( private location : Location) { }

  ngOnInit(): void {
  }
}