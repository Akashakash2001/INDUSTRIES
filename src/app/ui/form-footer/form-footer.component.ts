import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'ui-form-footer',
  templateUrl: './form-footer.component.html',
  styleUrls: ['./form-footer.component.scss']
})


export class FormFooterComponent implements OnInit {
  @Input() status = 'true';
  @Output() event = new EventEmitter<string>();
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onDismissClicked() {
    this.event.emit('dismiss');
    this.location.back();
  }
}
