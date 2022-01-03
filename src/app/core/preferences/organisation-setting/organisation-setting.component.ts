import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';



@Component({
  selector: 'app-organisation-setting',
  templateUrl: './organisation-setting.component.html',
  styleUrls: ['./organisation-setting.component.scss']
})
export class OrganisationSettingComponent implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
