import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouldListComponent } from './mould-list.component';

describe('MouldListComponent', () => {
  let component: MouldListComponent;
  let fixture: ComponentFixture<MouldListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouldListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouldListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
