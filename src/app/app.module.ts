// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// NEBULAR
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbThemeModule, NbLayoutModule, NbInputModule, NbAccordionModule, NbCardModule, NbButtonModule, NbSidebarModule,
  NbMenuModule, NbListModule, NbActionsModule, NbSelectModule, NbFormFieldModule, NbTabsetModule, NbAutocompleteModule, NbIconModule, NbDialogModule,
  NbRadioModule, NbDatepickerModule
} from '@nebular/theme';

// TOASTR
import { ToastrModule } from 'ngx-toastr';

// COMPONENTS
import { PartEditComponent } from './parts/part-edit/part-edit.component';
import { PartListComponent } from './parts/part-list/part-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { MaterialEditComponent } from './materials/material-edit/material-edit.component';
import { MaterialListComponent } from './materials/material-list/material-list.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { MachineListComponent } from './machines/machine-list/machine-list.component';
import { MachineEditComponent } from './machines/machine-edit/machine-edit.component';
import { MouldListComponent } from './moulds/mould-list/mould-list.component';
import { MouldEditComponent } from './moulds/mould-edit/mould-edit.component';
import { FormFooterComponent } from './ui/form-footer/form-footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './ui/navbar/navbar.component';

// FIRESTORE
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// SERVICES
import { DatabaseService } from './services/database/database.service';
import { ListViewComponent } from './ui/list-view/list-view.component';
import { PreferencesComponent } from './core/preferences/preferences.component';
import { OrganisationSettingComponent } from './core/preferences/organisation-setting/organisation-setting.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceNumberComponent } from './invoice/invoice-number/invoice-number.component';
import { InvoicePartsComponent } from './invoice/invoice-parts/invoice-parts.component';
import { ScheduleComponent } from './planning-and-control/schedule/schedule.component';
import { LoadingListComponent } from './planning-and-control/loading-sheet/loading-list/loading-list.component';
import { LoadingEditComponent } from './planning-and-control/loading-sheet/loading-edit/loading-edit.component';
import { PrintComponent } from './invoice/print/print.component';
import { SidenavComponent } from './ui/sidenav/sidenav.component';
import { FormDeleteComponent } from './ui/Delete/form-delete/form-delete.component';




@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PartEditComponent,
    PartListComponent,
    CustomerEditComponent,
    CustomerListComponent,
    VendorListComponent,
    VendorEditComponent,
    MaterialEditComponent,
    MaterialListComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    MachineListComponent,
    MachineEditComponent,
    MouldListComponent,
    MouldEditComponent,
    FormFooterComponent,
    ListViewComponent,
    DashboardComponent,
    NavbarComponent,
    PreferencesComponent,
    OrganisationSettingComponent,
    InvoiceComponent,
    InvoiceNumberComponent,
    InvoicePartsComponent,
    ScheduleComponent,
    LoadingEditComponent,
    LoadingListComponent,
    PrintComponent,
    SidenavComponent,
    FormDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    NbAccordionModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbListModule,
    NbActionsModule,
    NbSelectModule,
    NbFormFieldModule,
    NbTabsetModule,
    NbAutocompleteModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      newestOnTop: false,
      maxOpened: 4,
      autoDismiss: true
    }),
    NbDialogModule.forRoot(),
    NbRadioModule,
    NbDatepickerModule.forRoot(),

    

  ],
  providers: [
    DatabaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
