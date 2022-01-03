import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouldEditComponent } from './mould-edit.component';

describe('MouldEditComponent', () => {
  let component: MouldEditComponent;
  let fixture: ComponentFixture<MouldEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouldEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouldEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
