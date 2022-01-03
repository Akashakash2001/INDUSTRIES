import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { PartListComponent } from './parts/part-list/part-list.component';
import { PartEditComponent } from './parts/part-edit/part-edit.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { MaterialListComponent } from './materials/material-list/material-list.component';
import { MaterialEditComponent } from './materials/material-edit/material-edit.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { MachineListComponent } from './machines/machine-list/machine-list.component';
import { MachineEditComponent } from './machines/machine-edit/machine-edit.component';
import { MouldListComponent } from './moulds/mould-list/mould-list.component';
import { MouldEditComponent } from './moulds/mould-edit/mould-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreferencesComponent } from './core/preferences/preferences.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ScheduleComponent } from './planning-and-control/schedule/schedule.component';
import { LoadingEditComponent } from './planning-and-control/loading-sheet/loading-edit/loading-edit.component';
import { LoadingListComponent } from './planning-and-control/loading-sheet/loading-list/loading-list.component';
import { PrintComponent } from './invoice/print/print.component';


const routes: Routes = [
  { path: 'parts', component: PartListComponent },
  { path: 'parts/new', component: PartEditComponent },
  { path: 'parts/:id', component: PartEditComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/new', component: CustomerEditComponent },
  { path: 'customers/:id', component: CustomerEditComponent },
  { path: 'vendors', component: VendorListComponent },
  { path: 'vendors/new', component: VendorEditComponent },
  { path: 'vendors/:id', component: VendorEditComponent },
  { path: 'materials', component: MaterialListComponent },
  { path: 'materials/new', component: MaterialEditComponent },
  { path: 'materials/:id', component: MaterialEditComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/new', component: EmployeeEditComponent },
  { path: 'employees/:id', component: EmployeeEditComponent },
  { path: 'machines', component: MachineListComponent },
  { path: 'machines/new', component: MachineEditComponent },
  { path: 'machines/:id', component: MachineEditComponent },
  { path: 'moulds', component: MouldListComponent },
  { path: 'moulds/new', component: MouldEditComponent },
  { path: 'moulds/:id', component: MouldEditComponent },
  { path: 'preferences', component: PreferencesComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'loading', component: LoadingListComponent },
  { path: 'loading/new', component: LoadingEditComponent },
  { path: 'loading/:id', component: LoadingEditComponent },
  { path: '', component: DashboardComponent },
  { path: 'print', component: PrintComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
