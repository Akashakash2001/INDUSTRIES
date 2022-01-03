import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePartsComponent } from './invoice-parts.component';

describe('InvoicePartsComponent', () => {
  let component: InvoicePartsComponent;
  let fixture: ComponentFixture<InvoicePartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicePartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
