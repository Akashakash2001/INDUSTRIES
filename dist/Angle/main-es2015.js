(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _customers_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers/customer-edit/customer-edit.component */ "./src/app/customers/customer-edit/customer-edit.component.ts");
/* harmony import */ var _customers_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers/customer-list/customer-list.component */ "./src/app/customers/customer-list/customer-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _parts_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parts/part-list/part-list.component */ "./src/app/parts/part-list/part-list.component.ts");
/* harmony import */ var _parts_part_edit_part_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parts/part-edit/part-edit.component */ "./src/app/parts/part-edit/part-edit.component.ts");
/* harmony import */ var _vendors_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendors/vendor-list/vendor-list.component */ "./src/app/vendors/vendor-list/vendor-list.component.ts");
/* harmony import */ var _vendors_vendor_edit_vendor_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendors/vendor-edit/vendor-edit.component */ "./src/app/vendors/vendor-edit/vendor-edit.component.ts");
/* harmony import */ var _materials_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./materials/material-list/material-list.component */ "./src/app/materials/material-list/material-list.component.ts");
/* harmony import */ var _materials_material_edit_material_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./materials/material-edit/material-edit.component */ "./src/app/materials/material-edit/material-edit.component.ts");
/* harmony import */ var _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees/employee-list/employee-list.component */ "./src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var _employees_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employees/employee-edit/employee-edit.component */ "./src/app/employees/employee-edit/employee-edit.component.ts");
/* harmony import */ var _machines_machine_list_machine_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./machines/machine-list/machine-list.component */ "./src/app/machines/machine-list/machine-list.component.ts");
/* harmony import */ var _machines_machine_edit_machine_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./machines/machine-edit/machine-edit.component */ "./src/app/machines/machine-edit/machine-edit.component.ts");
/* harmony import */ var _moulds_mould_list_mould_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./moulds/mould-list/mould-list.component */ "./src/app/moulds/mould-list/mould-list.component.ts");
/* harmony import */ var _moulds_mould_edit_mould_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./moulds/mould-edit/mould-edit.component */ "./src/app/moulds/mould-edit/mould-edit.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _core_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/preferences/preferences.component */ "./src/app/core/preferences/preferences.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");
/* harmony import */ var _planning_and_control_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./planning-and-control/schedule/schedule.component */ "./src/app/planning-and-control/schedule/schedule.component.ts");
/* harmony import */ var _planning_and_control_loading_sheet_loading_edit_loading_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./planning-and-control/loading-sheet/loading-edit/loading-edit.component */ "./src/app/planning-and-control/loading-sheet/loading-edit/loading-edit.component.ts");
/* harmony import */ var _planning_and_control_loading_sheet_loading_list_loading_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./planning-and-control/loading-sheet/loading-list/loading-list.component */ "./src/app/planning-and-control/loading-sheet/loading-list/loading-list.component.ts");
/* harmony import */ var _invoice_print_print_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./invoice/print/print.component */ "./src/app/invoice/print/print.component.ts");




// Component





















const routes = [
    { path: 'parts', component: _parts_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_4__["PartListComponent"] },
    { path: 'parts/new', component: _parts_part_edit_part_edit_component__WEBPACK_IMPORTED_MODULE_5__["PartEditComponent"] },
    { path: 'parts/:id', component: _parts_part_edit_part_edit_component__WEBPACK_IMPORTED_MODULE_5__["PartEditComponent"] },
    { path: 'customers', component: _customers_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_1__["CustomerListComponent"] },
    { path: 'customers/new', component: _customers_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_0__["CustomerEditComponent"] },
    { path: 'customers/:id', component: _customers_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_0__["CustomerEditComponent"] },
    { path: 'vendors', component: _vendors_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_6__["VendorListComponent"] },
    { path: 'vendors/new', component: _vendors_vendor_edit_vendor_edit_component__WEBPACK_IMPORTED_MODULE_7__["VendorEditComponent"] },
    { path: 'vendors/:id', component: _vendors_vendor_edit_vendor_edit_component__WEBPACK_IMPORTED_MODULE_7__["VendorEditComponent"] },
    { path: 'materials', component: _materials_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_8__["MaterialListComponent"] },
    { path: 'materials/new', component: _materials_material_edit_material_edit_component__WEBPACK_IMPORTED_MODULE_9__["MaterialEditComponent"] },
    { path: 'materials/:id', component: _materials_material_edit_material_edit_component__WEBPACK_IMPORTED_MODULE_9__["MaterialEditComponent"] },
    { path: 'employees', component: _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeListComponent"] },
    { path: 'employees/new', component: _employees_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeEditComponent"] },
    { path: 'employees/:id', component: _employees_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeEditComponent"] },
    { path: 'machines', component: _machines_machine_list_machine_list_component__WEBPACK_IMPORTED_MODULE_12__["MachineListComponent"] },
    { path: 'machines/new', component: _machines_machine_edit_machine_edit_component__WEBPACK_IMPORTED_MODULE_13__["MachineEditComponent"] },
    { path: 'machines/:id', component: _machines_machine_edit_machine_edit_component__WEBPACK_IMPORTED_MODULE_13__["MachineEditComponent"] },
    { path: 'moulds', component: _moulds_mould_list_mould_list_component__WEBPACK_IMPORTED_MODULE_14__["MouldListComponent"] },
    { path: 'moulds/new', component: _moulds_mould_edit_mould_edit_component__WEBPACK_IMPORTED_MODULE_15__["MouldEditComponent"] },
    { path: 'moulds/:id', component: _moulds_mould_edit_mould_edit_component__WEBPACK_IMPORTED_MODULE_15__["MouldEditComponent"] },
    { path: 'preferences', component: _core_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_17__["PreferencesComponent"] },
    { path: 'invoice', component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_18__["InvoiceComponent"] },
    { path: 'schedule', component: _planning_and_control_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_19__["ScheduleComponent"] },
    { path: 'loading', component: _planning_and_control_loading_sheet_loading_list_loading_list_component__WEBPACK_IMPORTED_MODULE_21__["LoadingListComponent"] },
    { path: 'loading/new', component: _planning_and_control_loading_sheet_loading_edit_loading_edit_component__WEBPACK_IMPORTED_MODULE_20__["LoadingEditComponent"] },
    { path: 'loading/:id', component: _planning_and_control_loading_sheet_loading_edit_loading_edit_component__WEBPACK_IMPORTED_MODULE_20__["LoadingEditComponent"] },
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"] },
    { path: 'print', component: _invoice_print_print_component__WEBPACK_IMPORTED_MODULE_22__["PrintComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ui_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/animations */ "./src/app/ui/animations.ts");
/* harmony import */ var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/navbar/navbar.component */ "./src/app/ui/navbar/navbar.component.ts");
/* harmony import */ var _ui_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/sidenav/sidenav.component */ "./src/app/ui/sidenav/sidenav.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AppComponent {
    constructor() {
        this.title = 'Angle';
    }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
    toggleSidenav(status) {
        this.showSidenav = status;
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 2, consts: [[3, "sidenavStatus"], [3, "showSidenav"], ["center", ""], ["id", "main", 1, "main"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("sidenavStatus", function AppComponent_Template_app_navbar_sidenavStatus_0_listener($event) { return ctx.toggleSidenav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "nb-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-layout-column", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "router-outlet", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showSidenav", ctx.showSidenav);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("@routeAnimations", ctx.prepareRoute(_r250));
    } }, directives: [_ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _ui_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  margin-top: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXERldmVsb3BtZW50XFxBbmd1bGFyXFxhbmdsZS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxnQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbntcbiAgbWFyZ2luLXRvcDogNDhweDtcbn1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xuICAgICAgXG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcbiAgIFxuICB9XG5cbiAgIiwiLm1haW4ge1xuICBtYXJnaW4tdG9wOiA0OHB4O1xufSJdfQ== */"], data: { animation: [_ui_animations__WEBPACK_IMPORTED_MODULE_1__["fader"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_ui_animations__WEBPACK_IMPORTED_MODULE_1__["fader"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _parts_part_edit_part_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parts/part-edit/part-edit.component */ "./src/app/parts/part-edit/part-edit.component.ts");
/* harmony import */ var _parts_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parts/part-list/part-list.component */ "./src/app/parts/part-list/part-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _customers_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./customers/customer-edit/customer-edit.component */ "./src/app/customers/customer-edit/customer-edit.component.ts");
/* harmony import */ var _customers_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./customers/customer-list/customer-list.component */ "./src/app/customers/customer-list/customer-list.component.ts");
/* harmony import */ var _vendors_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./vendors/vendor-list/vendor-list.component */ "./src/app/vendors/vendor-list/vendor-list.component.ts");
/* harmony import */ var _vendors_vendor_edit_vendor_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vendors/vendor-edit/vendor-edit.component */ "./src/app/vendors/vendor-edit/vendor-edit.component.ts");
/* harmony import */ var _materials_material_edit_material_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./materials/material-edit/material-edit.component */ "./src/app/materials/material-edit/material-edit.component.ts");
/* harmony import */ var _materials_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./materials/material-list/material-list.component */ "./src/app/materials/material-list/material-list.component.ts");
/* harmony import */ var _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./employees/employee-list/employee-list.component */ "./src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var _employees_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./employees/employee-edit/employee-edit.component */ "./src/app/employees/employee-edit/employee-edit.component.ts");
/* harmony import */ var _machines_machine_list_machine_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./machines/machine-list/machine-list.component */ "./src/app/machines/machine-list/machine-list.component.ts");
/* harmony import */ var _machines_machine_edit_machine_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./machines/machine-edit/machine-edit.component */ "./src/app/machines/machine-edit/machine-edit.component.ts");
/* harmony import */ var _moulds_mould_list_mould_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./moulds/mould-list/mould-list.component */ "./src/app/moulds/mould-list/mould-list.component.ts");
/* harmony import */ var _moulds_mould_edit_mould_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./moulds/mould-edit/mould-edit.component */ "./src/app/moulds/mould-edit/mould-edit.component.ts");
/* harmony import */ var _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ui/form-footer/form-footer.component */ "./src/app/ui/form-footer/form-footer.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ui/navbar/navbar.component */ "./src/app/ui/navbar/navbar.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/fire/analytics */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ui/list-view/list-view.component */ "./src/app/ui/list-view/list-view.component.ts");
/* harmony import */ var _core_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./core/preferences/preferences.component */ "./src/app/core/preferences/preferences.component.ts");
/* harmony import */ var _core_preferences_organisation_setting_organisation_setting_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./core/preferences/organisation-setting/organisation-setting.component */ "./src/app/core/preferences/organisation-setting/organisation-setting.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/invoice/invoice.component.ts");
/* harmony import */ var _invoice_invoice_number_invoice_number_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./invoice/invoice-number/invoice-number.component */ "./src/app/invoice/invoice-number/invoice-number.component.ts");
/* harmony import */ var _invoice_invoice_parts_invoice_parts_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./invoice/invoice-parts/invoice-parts.component */ "./src/app/invoice/invoice-parts/invoice-parts.component.ts");
/* harmony import */ var _planning_and_control_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./planning-and-control/schedule/schedule.component */ "./src/app/planning-and-control/schedule/schedule.component.ts");
/* harmony import */ var _planning_and_control_loading_sheet_loading_list_loading_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./planning-and-control/loading-sheet/loading-list/loading-list.component */ "./src/app/planning-and-control/loading-sheet/loading-list/loading-list.component.ts");
/* harmony import */ var _planning_and_control_loading_sheet_loading_edit_loading_edit_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./planning-and-control/loading-sheet/loading-edit/loading-edit.component */ "./src/app/planning-and-control/loading-sheet/loading-edit/loading-edit.component.ts");
/* harmony import */ var _invoice_print_print_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./invoice/print/print.component */ "./src/app/invoice/print/print.component.ts");
/* harmony import */ var _ui_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ui/sidenav/sidenav.component */ "./src/app/ui/sidenav/sidenav.component.ts");
// ANGULAR









// NEBULAR


// TOASTR

// COMPONENTS


















// FIRESTORE



// SERVICES

















class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_database_database_service__WEBPACK_IMPORTED_MODULE_33__["DatabaseService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_30__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
            _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_31__["AngularFireAnalyticsModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__["AngularFirestoreModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbThemeModule"].forRoot({ name: 'dark' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_9__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAccordionModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSidebarModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbMenuModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbActionsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbFormFieldModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbTabsetModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAutocompleteModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                positionClass: 'toast-bottom-right',
                newestOnTop: false,
                maxOpened: 4,
                autoDismiss: true
            }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDialogModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbRadioModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDatepickerModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"],
        _parts_part_edit_part_edit_component__WEBPACK_IMPORTED_MODULE_12__["PartEditComponent"],
        _parts_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_13__["PartListComponent"],
        _customers_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_15__["CustomerEditComponent"],
        _customers_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_16__["CustomerListComponent"],
        _vendors_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_17__["VendorListComponent"],
        _vendors_vendor_edit_vendor_edit_component__WEBPACK_IMPORTED_MODULE_18__["VendorEditComponent"],
        _materials_material_edit_material_edit_component__WEBPACK_IMPORTED_MODULE_19__["MaterialEditComponent"],
        _materials_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_20__["MaterialListComponent"],
        _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeListComponent"],
        _employees_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_22__["EmployeeEditComponent"],
        _machines_machine_list_machine_list_component__WEBPACK_IMPORTED_MODULE_23__["MachineListComponent"],
        _machines_machine_edit_machine_edit_component__WEBPACK_IMPORTED_MODULE_24__["MachineEditComponent"],
        _moulds_mould_list_mould_list_component__WEBPACK_IMPORTED_MODULE_25__["MouldListComponent"],
        _moulds_mould_edit_mould_edit_component__WEBPACK_IMPORTED_MODULE_26__["MouldEditComponent"],
        _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_27__["FormFooterComponent"],
        _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_34__["ListViewComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
        _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_29__["NavbarComponent"],
        _core_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_35__["PreferencesComponent"],
        _core_preferences_organisation_setting_organisation_setting_component__WEBPACK_IMPORTED_MODULE_36__["OrganisationSettingComponent"],
        _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_37__["InvoiceComponent"],
        _invoice_invoice_number_invoice_number_component__WEBPACK_IMPORTED_MODULE_38__["InvoiceNumberComponent"],
        _invoice_invoice_parts_invoice_parts_component__WEBPACK_IMPORTED_MODULE_39__["InvoicePartsComponent"],
        _planning_and_control_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_40__["ScheduleComponent"],
        _planning_and_control_loading_sheet_loading_edit_loading_edit_component__WEBPACK_IMPORTED_MODULE_42__["LoadingEditComponent"],
        _planning_and_control_loading_sheet_loading_list_loading_list_component__WEBPACK_IMPORTED_MODULE_41__["LoadingListComponent"],
        _invoice_print_print_component__WEBPACK_IMPORTED_MODULE_43__["PrintComponent"],
        _ui_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_44__["SidenavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_30__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_31__["AngularFireAnalyticsModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__["AngularFirestoreModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_9__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAccordionModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbActionsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbFormFieldModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbTabsetModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAutocompleteModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbRadioModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDatepickerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"],
                    _parts_part_edit_part_edit_component__WEBPACK_IMPORTED_MODULE_12__["PartEditComponent"],
                    _parts_part_list_part_list_component__WEBPACK_IMPORTED_MODULE_13__["PartListComponent"],
                    _customers_customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_15__["CustomerEditComponent"],
                    _customers_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_16__["CustomerListComponent"],
                    _vendors_vendor_list_vendor_list_component__WEBPACK_IMPORTED_MODULE_17__["VendorListComponent"],
                    _vendors_vendor_edit_vendor_edit_component__WEBPACK_IMPORTED_MODULE_18__["VendorEditComponent"],
                    _materials_material_edit_material_edit_component__WEBPACK_IMPORTED_MODULE_19__["MaterialEditComponent"],
                    _materials_material_list_material_list_component__WEBPACK_IMPORTED_MODULE_20__["MaterialListComponent"],
                    _employees_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeListComponent"],
                    _employees_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_22__["EmployeeEditComponent"],
                    _machines_machine_list_machine_list_component__WEBPACK_IMPORTED_MODULE_23__["MachineListComponent"],
                    _machines_machine_edit_machine_edit_component__WEBPACK_IMPORTED_MODULE_24__["MachineEditComponent"],
                    _moulds_mould_list_mould_list_component__WEBPACK_IMPORTED_MODULE_25__["MouldListComponent"],
                    _moulds_mould_edit_mould_edit_component__WEBPACK_IMPORTED_MODULE_26__["MouldEditComponent"],
                    _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_27__["FormFooterComponent"],
                    _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_34__["ListViewComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["DashboardComponent"],
                    _ui_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_29__["NavbarComponent"],
                    _core_preferences_preferences_component__WEBPACK_IMPORTED_MODULE_35__["PreferencesComponent"],
                    _core_preferences_organisation_setting_organisation_setting_component__WEBPACK_IMPORTED_MODULE_36__["OrganisationSettingComponent"],
                    _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_37__["InvoiceComponent"],
                    _invoice_invoice_number_invoice_number_component__WEBPACK_IMPORTED_MODULE_38__["InvoiceNumberComponent"],
                    _invoice_invoice_parts_invoice_parts_component__WEBPACK_IMPORTED_MODULE_39__["InvoicePartsComponent"],
                    _planning_and_control_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_40__["ScheduleComponent"],
                    _planning_and_control_loading_sheet_loading_edit_loading_edit_component__WEBPACK_IMPORTED_MODULE_42__["LoadingEditComponent"],
                    _planning_and_control_loading_sheet_loading_list_loading_list_component__WEBPACK_IMPORTED_MODULE_41__["LoadingListComponent"],
                    _invoice_print_print_component__WEBPACK_IMPORTED_MODULE_43__["PrintComponent"],
                    _ui_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_44__["SidenavComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production }),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_30__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
                    _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_31__["AngularFireAnalyticsModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_32__["AngularFirestoreModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbThemeModule"].forRoot({ name: 'dark' }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbLayoutModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_9__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbInputModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAccordionModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSidebarModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbMenuModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbListModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbActionsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbSelectModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbFormFieldModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbTabsetModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbAutocompleteModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                        positionClass: 'toast-bottom-right',
                        newestOnTop: false,
                        maxOpened: 4,
                        autoDismiss: true
                    }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDialogModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbRadioModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_10__["NbDatepickerModule"].forRoot(),
                ],
                providers: [
                    _services_database_database_service__WEBPACK_IMPORTED_MODULE_33__["DatabaseService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/preferences/organisation-setting/organisation-setting.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/preferences/organisation-setting/organisation-setting.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrganisationSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationSettingComponent", function() { return OrganisationSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class OrganisationSettingComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OrganisationSettingComponent.??fac = function OrganisationSettingComponent_Factory(t) { return new (t || OrganisationSettingComponent)(); };
OrganisationSettingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: OrganisationSettingComponent, selectors: [["app-organisation-setting"]], decls: 62, vars: 1, consts: [[1, "form-group"], ["for", "logo", 1, "label"], ["type", "file", "id", "file"], [3, "formGroup"], ["for", "name", 1, "label"], [1, "row"], [1, "col-md-6"], ["type", "text", "id", "name", "placeholder", "eg. Ajay", "nbInput", ""], [2, "padding-left", "15px"], ["for", "address", 1, "label"], ["type", "text", "id", "address", "placeholder", "eg. Ajay", "nbInput", ""], ["for", "state", 1, "label"], ["type", "text", "id", "state", "placeholder", "eg. Ajay", "nbInput", ""], ["for", "pincode", 1, "label"], ["type", "text", "id", "pincode", "placeholder", "eg. Ajay", "nbInput", ""], ["for", "phone", 1, "label"], ["type", "text", "id", "phone", "placeholder", "eg. Ajay", "nbInput", ""], ["for", "email", 1, "label"], ["type", "text", "id", "email", "placeholder", "eg. Ajay", "nbInput", ""], ["for", "website", 1, "label"], ["type", "text", "id", "website", "placeholder", "eg. Ajay", "nbInput", ""]], template: function OrganisationSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Organisation Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Organization Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Organization Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Organization address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJlZmVyZW5jZXMvb3JnYW5pc2F0aW9uLXNldHRpbmcvb3JnYW5pc2F0aW9uLXNldHRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](OrganisationSettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-organisation-setting',
                templateUrl: './organisation-setting.component.html',
                styleUrls: ['./organisation-setting.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/preferences/preferences.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/preferences/preferences.component.ts ***!
  \***********************************************************/
/*! exports provided: PreferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreferencesComponent", function() { return PreferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _organisation_setting_organisation_setting_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organisation-setting/organisation-setting.component */ "./src/app/core/preferences/organisation-setting/organisation-setting.component.ts");



class PreferencesComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PreferencesComponent.??fac = function PreferencesComponent_Factory(t) { return new (t || PreferencesComponent)(); };
PreferencesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PreferencesComponent, selectors: [["app-preferences"]], decls: 1, vars: 0, template: function PreferencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-organisation-setting");
    } }, directives: [_organisation_setting_organisation_setting_component__WEBPACK_IMPORTED_MODULE_1__["OrganisationSettingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJlZmVyZW5jZXMvcHJlZmVyZW5jZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PreferencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preferences',
                templateUrl: './preferences.component.html',
                styleUrls: ['./preferences.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/customers/customer-edit/customer-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-edit/customer-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _ui_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../ui/toast.service */ "./src/app/ui/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/form-footer/form-footer.component */ "./src/app/ui/form-footer/form-footer.component.ts");










function CustomerEditComponent_div_11_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter name of the Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_11_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Vendor's Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CustomerEditComponent_div_11_li_3_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CustomerEditComponent_div_11_li_4_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.name.errors == null ? null : ctx_r0.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.name.errors == null ? null : ctx_r0.name.errors.minlength);
} }
function CustomerEditComponent_div_18_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter an Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_18_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Address should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CustomerEditComponent_div_18_li_3_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CustomerEditComponent_div_18_li_4_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.address.errors == null ? null : ctx_r1.address.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.address.errors == null ? null : ctx_r1.address.errors.minlength);
} }
function CustomerEditComponent_div_25_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a Pincode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_25_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Part Name should contain 6 numbers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_25_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "eg. 600001");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CustomerEditComponent_div_25_li_3_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CustomerEditComponent_div_25_li_4_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, CustomerEditComponent_div_25_li_5_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.pincode.errors == null ? null : ctx_r2.pincode.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.pincode.errors == null ? null : ctx_r2.pincode.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.gstin.errors == null ? null : ctx_r2.gstin.errors.required);
} }
function CustomerEditComponent_div_32_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a valid GSTIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_32_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "GSTIN should contain 15 only characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_32_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "eg. 33AABCT3518Q1Z3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function CustomerEditComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, CustomerEditComponent_div_32_li_3_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, CustomerEditComponent_div_32_li_4_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, CustomerEditComponent_div_32_li_5_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.gstin.errors == null ? null : ctx_r3.gstin.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r3.gstin.errors == null ? null : ctx_r3.gstin.errors.minlength) || (ctx_r3.gstin.errors == null ? null : ctx_r3.gstin.errors.maxlength));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.gstin.errors == null ? null : ctx_r3.gstin.errors.required);
} }
class CustomerEditComponent {
    // MAIN
    constructor(fb, db, toast, route, location) {
        this.fb = fb;
        this.db = db;
        this.toast = toast;
        this.route = route;
        this.location = location;
        this.validity = false;
    }
    // GETTERS AND SETTERS
    get name() {
        return this.form.get('name');
    }
    get address() {
        return this.form.get('address');
    }
    get pincode() {
        return this.form.get('pincode');
    }
    get gstin() {
        return this.form.get('gstin');
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.selectedId = params.get('id');
            this.fetchObject();
        });
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            gstin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]]
        });
        this.form.valueChanges.subscribe(() => {
            this.validity = this.form.valid;
        });
    }
    fetchObject() {
        if (this.selectedId) {
            this.selectedObject = this.db.getCustomer(this.selectedId);
            this.selectedObject.subscribe((data) => {
                this.form.setValue({
                    name: data.name,
                    address: data.address,
                    pincode: data.pincode,
                    gstin: data.gstin
                });
            });
        }
    }
    onButtonClicked(clickedButton) {
        if (clickedButton === 'save') {
            this.db.addCustomer(this.form.value, this.selectedId)
                .then(() => {
                this.toast.success('Customer updated succesfully');
                this.form.reset();
                if (this.selectedId) {
                    this.location.back();
                }
            });
        }
    }
}
CustomerEditComponent.??fac = function CustomerEditComponent_Factory(t) { return new (t || CustomerEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
CustomerEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomerEditComponent, selectors: [["app-customer-edit"]], decls: 34, vars: 14, consts: [[3, "formGroup"], [1, "form-group"], ["for", "name", 1, "label"], [1, "row"], [1, "col-md-6"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "name", "id", "name", "placeholder", "eg. Morakhot Industries Pvt. Ltd."], ["class", "col-md-6", 4, "ngIf"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "address", "id", "address", "placeholder", "eg. No 6/26 Shastri Bhavan                                                                                              2nd Floor, Haddows Road,                                                                  Nungambakkam", "rows", "3", 1, "form-control"], [1, "col-md-2", "col-5"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "pincode", "id", "pincode", 1, "form-control"], [1, "col-md-3", "col-8"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "gstin", "id", "gstin", 1, "form-control"], [3, "status", "event"], [1, "error"], [4, "ngIf"]], template: function CustomerEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Customer Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, CustomerEditComponent_div_11_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, CustomerEditComponent_div_18_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, CustomerEditComponent_div_25_Template, 6, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "GSTIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, CustomerEditComponent_div_32_Template, 6, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "ui-form-footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("event", function CustomerEditComponent_Template_ui_form_footer_event_33_listener($event) { return ctx.onButtonClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.address.invalid && (ctx.address.dirty || ctx.address.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.address.invalid && (ctx.address.dirty || ctx.address.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.pincode.invalid && (ctx.pincode.dirty || ctx.pincode.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.pincode.invalid && (ctx.pincode.dirty || ctx.pincode.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.gstin.invalid && (ctx.gstin.dirty || ctx.gstin.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.gstin.invalid && (ctx.gstin.dirty || ctx.gstin.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("status", ctx.validity);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__["FormFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1lZGl0L2N1c3RvbWVyLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-edit',
                templateUrl: './customer-edit.component.html',
                styleUrls: ['./customer-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }, { type: _ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/list-view/list-view.component */ "./src/app/ui/list-view/list-view.component.ts");






class CustomerListComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.sort = '1';
        this.data = [];
    }
    ngOnInit() {
        this.db.getCustomers().subscribe((data) => {
            this.data = data;
        });
    }
    onItemSelected(item) {
        this.router.navigate([`/customers/${item.id}`]);
        // this.router.navigate([`/materials/${product.id}`]);
    }
}
CustomerListComponent.??fac = function CustomerListComponent_Factory(t) { return new (t || CustomerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CustomerListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CustomerListComponent, selectors: [["app-customer-list"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-4"], ["nbButton", "", "size", "small", "routerLink", "/customers/new", "status", "primary"], [1, "col-6"], ["icon", "search-outline"], ["icon", "power-outline"], ["icon", "person-outline"], ["icon", "home-outline"], [3, "list", "onclick"]], template: function CustomerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "New Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nb-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "nb-action", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nb-action", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "nb-action", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "nb-action", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ui-list-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onclick", function CustomerListComponent_Template_ui_list_view_onclick_10_listener($event) { return ctx.onItemSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx.data);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1saXN0L2N1c3RvbWVyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CustomerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-customer-list',
                templateUrl: './customer-list.component.html',
                styleUrls: ['./customer-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");




class DashboardComponent {
    constructor(db) {
        this.db = db;
        this.db.getParts().subscribe((data) => {
            this.parts = data.length;
        });
        this.db.getMachines().subscribe((data) => {
            this.machines = data.length;
        });
        this.db.getMaterials().subscribe((data) => {
            this.materials = data.length;
        });
        this.db.getMoulds().subscribe((data) => {
            this.moulds = data.length;
        });
    }
    ngOnInit() {
    }
}
DashboardComponent.??fac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"])); };
DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 67, vars: 4, consts: [[1, "row"], [1, "card"], [1, "column"], [2, "margin-left", "25px"], [2, "color", "#09bc8a"], [1, "column", 2, "margin-left", "50px", "margin-top", "40px"], [2, "background-color", "#09bc8a", "border-radius", "50%"], ["icon", "cube-outline"], [2, "color", "#d743eb"], [1, "column", 2, "margin-left", "30px", "margin-top", "40px"], [2, "background-color", "#b717cc", "border-radius", "50%"], ["icon", "copy-outline"], [2, "color", "#aabc09"], [2, "background-color", "#aabc09", "border-radius", "50%"], ["icon", "printer-outline"], [2, "color", "#ce6815"], [2, "background-color", "#ce6815", "border-radius", "50%"], ["icon", "pantone-outline"], [2, "margin-top", "20px"], ["for", "inventoryType", 1, "label"], [1, "button-section"], ["type", "button", "onclick", "window.location.href = 'invoice'", 1, "row", "button-card"], [1, "button-title"], ["type", "button", 1, "row", "button-card"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Total parts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "nb-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Total Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "nb-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Total Moulds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "nb-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Total machines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "nb-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Jobcard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Line 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.parts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.materials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.moulds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.machines);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(182, 95, 95, 0.2);\n  transition: 0.3s;\n  background-color: #444444;\n  color: #dddddd;\n  border-radius: 5px;\n  \n  margin-right: 8px;\n  margin-left: 8px;\n  width: 190px;\n  height: 130px;\n  padding-left: 5px;\n}\n\nnb-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  margin: 3px;\n}\n\nh4[_ngcontent-%COMP%] {\n  color: #dddddd;\n  margin-bottom: 10px;\n  display: inline-block;\n  margin-bottom: 4px;\n}\n\nP[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #dddddd;\n  font-size: 12px;\n  display: inline-block;\n}\n\n.button-card[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 248px;\n  margin-top: 16px;\n  padding: 10px 0 0 10px;\n  color: whitesmoke;\n  border-radius: 8px;\n  background-color: #444444;\n  border: none;\n  cursor: pointer;\n  flex-direction: column;\n  text-align: left;\n}\n\n@media only screen and (min-width: 768px) {\n  .card[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 130px;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .card[_ngcontent-%COMP%] {\n    box-shadow: 0 4px 8px 0 rgba(182, 95, 95, 0.2);\n    transition: 0.3s;\n    background-color: #444444;\n    color: #dddddd;\n    border-radius: 5px;\n    \n    height: 130px;\n    margin-right: 8px;\n    margin-left: 8px;\n    width: 190px;\n    padding-left: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxEZXZlbG9wbWVudFxcQW5ndWxhclxcYW5nbGUvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQW9CLHdCQUFBO0VBQ3BCLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDR0o7O0FEREE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QURHRTtFQUVFO0lBQ0ksWUFBQTtJQUNBLGFBQUE7RUNETjtBQUNGOztBRHFCRTtFQUVFO0lBQ0ksOENBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQW9CLHdCQUFBO0lBQ3BCLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDbkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMTgyLCA5NSwgOTUsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xuICAgIGNvbG9yOiAjZGRkZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgLyogNXB4IHJvdW5kZWQgY29ybmVycyAqL1xuICAgIG1hcmdpbi1yaWdodDogOHB4OyAgXG4gICAgbWFyZ2luLWxlZnQ6IDhweDsgXG4gICAgd2lkdGg6IDE5MHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbm5iLWljb257XG4gICAgd2lkdGg6NDRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbWFyZ2luOiAzcHg7XG59XG5cbmg0IHtcbiAgICBjb2xvcjogI2RkZGRkZDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5QIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiAjZGRkZGRkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYnV0dG9uLWNhcmQge1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMjQ4cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmJ1dHRvbi10aXRsZXtcbi8vICAgIHNpemU6IDIwc3A7XG4gIH1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NSRUVOIEZPUiBUQUJMRVQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgLmNhcmQge1xuICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgfVxuICAgIFxuICAgIG5iLWljb257XG4gICAgICAgXG4gICAgfVxuICAgIFxuICAgIGg0IHtcbiAgICAgICBcbiAgICB9XG4gICAgUCB7XG4gICAgIFxuICAgIH1cbiAgICAuYnV0dG9uLWNhcmQge1xuICAgIFxuXG4gICAgICB9XG4gIH0gXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1FTkQgT0YgU0NSRUVOIEZPUiBUQUJMRVQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TQ1JFRU4gRk9SIE1PQklMRS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG5cbiAgICAuY2FyZCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMTgyLCA5NSwgOTUsIDAuMik7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XG4gICAgICAgIGNvbG9yOiAjZGRkZGRkO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IC8qIDVweCByb3VuZGVkIGNvcm5lcnMgKi9cbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7ICBcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDsgXG4gICAgICAgIHdpZHRoOiAxOTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIFxuICAgIG5iLWljb257XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgaDQge1xuICAgICAgICBcbiAgICB9XG4gICAgUCB7XG4gICAgXG4gICAgfVxuICAgIC5idXR0b24tY2FyZCB7XG4gICAgICBcbiAgICAgIH1cbiAgfSBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1FTkQgT0YgU0NSRUVOIEZPUiBNT0JJTEUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0iLCIuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMTgyLCA5NSwgOTUsIDAuMik7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XG4gIGNvbG9yOiAjZGRkZGRkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIDVweCByb3VuZGVkIGNvcm5lcnMgKi9cbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHdpZHRoOiAxOTBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbm5iLWljb24ge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW46IDNweDtcbn1cblxuaDQge1xuICBjb2xvcjogI2RkZGRkZDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cblAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogI2RkZGRkZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5idXR0b24tY2FyZCB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDI0OHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nOiAxMHB4IDAgMCAxMHB4O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNhcmQge1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMTgyLCA5NSwgOTUsIDAuMik7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xuICAgIGNvbG9yOiAjZGRkZGRkO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvKiA1cHggcm91bmRlZCBjb3JuZXJzICovXG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIHdpZHRoOiAxOTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/employees/employee-edit/employee-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-edit/employee-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _ui_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../ui/toast.service */ "./src/app/ui/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/form-footer/form-footer.component */ "./src/app/ui/form-footer/form-footer.component.ts");










function EmployeeEditComponent_div_11_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EmployeeEditComponent_div_11_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EmployeeEditComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, EmployeeEditComponent_div_11_li_3_Template, 3, 0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, EmployeeEditComponent_div_11_li_4_Template, 3, 0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r125.name.errors == null ? null : ctx_r125.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r125.name.errors == null ? null : ctx_r125.name.errors.minlength);
} }
function EmployeeEditComponent_div_18_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter code of the Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EmployeeEditComponent_div_18_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Employee's code should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EmployeeEditComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, EmployeeEditComponent_div_18_li_3_Template, 3, 0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, EmployeeEditComponent_div_18_li_4_Template, 3, 0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r126.code.errors == null ? null : ctx_r126.code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r126.code.errors == null ? null : ctx_r126.code.errors.minlength);
} }
function EmployeeEditComponent_div_28_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EmployeeEditComponent_div_28_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Enter a valid Phone number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EmployeeEditComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, EmployeeEditComponent_div_28_li_3_Template, 3, 0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, EmployeeEditComponent_div_28_li_4_Template, 3, 0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r127.phone.errors == null ? null : ctx_r127.phone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r127.phone.errors == null ? null : ctx_r127.phone.errors.minlength);
} }
function EmployeeEditComponent_div_40_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Enter a valid email id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function EmployeeEditComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, EmployeeEditComponent_div_40_li_3_Template, 3, 0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r128.email.errors == null ? null : ctx_r128.email.errors.pattern);
} }
class EmployeeEditComponent {
    //MAIN
    constructor(fb, db, toast, route, location) {
        this.fb = fb;
        this.db = db;
        this.toast = toast;
        this.route = route;
        this.location = location;
        this.validity = false;
    }
    // GETTERS AND SETTERS
    get name() {
        return this.form.get('name');
    }
    get code() {
        return this.form.get('code');
    }
    get phone() {
        return this.form.get('phone');
    }
    get email() {
        return this.form.get('email');
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.selectedId = params.get('id');
            this.fetchObject();
        });
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
        });
        this.form.valueChanges.subscribe(() => {
            this.validity = this.form.valid;
        });
    }
    fetchObject() {
        if (this.selectedId) {
            this.selectedObject = this.db.getEmployee(this.selectedId);
            this.selectedObject.subscribe((data) => {
                this.form.patchValue({
                    name: data.name,
                    code: data.code,
                    phone: data.phone,
                    email: data.email
                });
            });
        }
    }
    // ONSUBMIT
    onButtonClicked(clickedButton) {
        if (clickedButton === 'save') {
            // this.toast.success();
            this.db.addEmployee(this.form.value, this.selectedId)
                .then(() => {
                this.toast.success('Employee updated succesfully');
                this.form.reset();
                if (this.selectedId) {
                    this.location.back();
                }
            });
        }
    }
}
EmployeeEditComponent.??fac = function EmployeeEditComponent_Factory(t) { return new (t || EmployeeEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
EmployeeEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EmployeeEditComponent, selectors: [["app-employee-edit"]], decls: 42, vars: 14, consts: [[3, "formGroup"], [1, "form-group"], ["for", "name", 1, "label"], [1, "row"], [1, "col-md-6"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "name", "id", "name", "placeholder", "eg. Ajay"], ["class", "col-md-6", 4, "ngIf"], ["for", "code", 1, "label"], [1, "col-md-3"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "code", "id", "code", "placeholder", "eg. Ex - 19001"], ["for", "phone", 1, "label"], ["nbPrefix", ""], ["fullWidth", "", "type", "number", "nbInput", "", "fullWidth", "", "formControlName", "phone", "id", "phone", "placeholder", "999 111 2222"], ["for", "email", 1, "label"], ["fullWidth", "", "type", "text", "nbInput", "", "fullWidth", "", "formControlName", "email", "id", "email", "placeholder", "abc@xyz.com"], [3, "status", "event"], [1, "error"], [4, "ngIf"]], template: function EmployeeEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Employee Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, EmployeeEditComponent_div_11_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, EmployeeEditComponent_div_18_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "+91");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, EmployeeEditComponent_div_28_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "(optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "@");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, EmployeeEditComponent_div_40_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "ui-form-footer", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("event", function EmployeeEditComponent_Template_ui_form_footer_event_41_listener($event) { return ctx.onButtonClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.code.invalid && (ctx.code.dirty || ctx.code.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.code.invalid && (ctx.code.dirty || ctx.code.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.phone.invalid && (ctx.phone.dirty || ctx.phone.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.phone.invalid && (ctx.phone.dirty || ctx.phone.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("status", ctx.validity);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbPrefixDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__["FormFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS1lZGl0L2VtcGxveWVlLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-edit',
                templateUrl: './employee-edit.component.html',
                styleUrls: ['./employee-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }, { type: _ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/employees/employee-list/employee-list.component.ts ***!
  \********************************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/list-view/list-view.component */ "./src/app/ui/list-view/list-view.component.ts");






class EmployeeListComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.sort = '1';
        this.data = [];
    }
    ngOnInit() {
        this.db.getEmployees().subscribe((data) => {
            this.data = data;
        });
    }
    onItemSelected(item) {
        this.router.navigate([`/employees/${item.id}`]);
        // this.router.navigate([`/materials/${product.id}`]);
    }
}
EmployeeListComponent.??fac = function EmployeeListComponent_Factory(t) { return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EmployeeListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: EmployeeListComponent, selectors: [["app-employee-list"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-4"], ["nbButton", "", "size", "small", "routerLink", "/employees/new", "status", "primary"], [1, "col-6"], ["icon", "search-outline"], ["icon", "power-outline"], ["icon", "person-outline"], ["icon", "home-outline"], [3, "list", "onclick"]], template: function EmployeeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "New Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nb-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "nb-action", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nb-action", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "nb-action", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "nb-action", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ui-list-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onclick", function EmployeeListComponent_Template_ui_list_view_onclick_10_listener($event) { return ctx.onItemSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx.data);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZS1saXN0L2VtcGxveWVlLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-list',
                templateUrl: './employee-list.component.html',
                styleUrls: ['./employee-list.component.scss']
            }]
    }], function () { return [{ type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/invoice/invoice-number/invoice-number.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/invoice/invoice-number/invoice-number.component.ts ***!
  \********************************************************************/
/*! exports provided: InvoiceNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceNumberComponent", function() { return InvoiceNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class InvoiceNumberComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.currentNumber = 0;
    }
    ngOnInit() {
    }
    onDismissClicked() {
        this.dialogRef.close();
    }
    onAutoClicked() {
    }
    onSubmitClicked() {
        console.log("Submit Clicked");
        console.log(this.radio);
        console.log(this.prefix);
        console.log(this.currentNumber);
    }
}
InvoiceNumberComponent.??fac = function InvoiceNumberComponent_Factory(t) { return new (t || InvoiceNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"])); };
InvoiceNumberComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: InvoiceNumberComponent, selectors: [["app-invoice-number"]], outputs: { event: "event" }, decls: 31, vars: 5, consts: [["nbButton", "", "ghost", "", "status", "control", 2, "float", "right", 3, "click"], ["icon", "close-outline", 2, "float", "right"], ["name", "invoice-number-generation", 3, "ngModel", "ngModelChange"], ["value", "true", "name", "radio"], [1, "row"], ["formGroup", "form", 1, "form-group"], ["for", "prefix", 1, "label"], [1, "col-md-6"], ["type", "text", "id", "prefix", "placeholder", "", "nbInput", "", 3, "ngModel", "ngModelChange"], [1, "form-group"], ["for", "current-number", 1, "label"], ["type", "text", "id", "current-number", "placeholder", "", "nbInput", "", 3, "ngModel", "ngModelChange"], ["value", "false", "name", "radio"], [1, "col-md-3", 2, "padding-top", "15px", "padding-bottom", "15px"], ["nbButton", "", "status", "primary", 3, "click"], ["type", "text", 3, "ngModel", "ngModelChange"]], template: function InvoiceNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Invoice Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InvoiceNumberComponent_Template_button_click_3_listener() { return ctx.onDismissClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "nb-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nb-radio-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function InvoiceNumberComponent_Template_nb_radio_group_ngModelChange_6_listener($event) { return ctx.radio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "nb-radio", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Automatically generate invoice number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function InvoiceNumberComponent_Template_input_ngModelChange_16_listener($event) { return ctx.prefix = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Current Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function InvoiceNumberComponent_Template_input_ngModelChange_22_listener($event) { return ctx.currentNumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "nb-radio", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Enter invoice number everytime");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InvoiceNumberComponent_Template_button_click_26_listener() { return ctx.onSubmitClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function InvoiceNumberComponent_Template_input_ngModelChange_28_listener($event) { return ctx.price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.radio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.prefix);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.currentNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.radio);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbRadioGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbRadioComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS1udW1iZXIvaW52b2ljZS1udW1iZXIuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InvoiceNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invoice-number',
                templateUrl: './invoice-number.component.html',
                styleUrls: ['./invoice-number.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogRef"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/invoice/invoice-parts/invoice-parts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/invoice/invoice-parts/invoice-parts.component.ts ***!
  \******************************************************************/
/*! exports provided: InvoicePartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePartsComponent", function() { return InvoicePartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _invoive_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../invoive.service */ "./src/app/invoice/invoive.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");






class InvoicePartsComponent {
    // get batchNumber() {
    //   return this.form.get('weight');
    // }
    constructor(fb, db, data, ref) {
        this.fb = fb;
        this.db = db;
        this.data = data;
        this.ref = ref;
        this.selectedItem = '2';
        this.parts = [];
        this.db.getParts().subscribe((partData) => {
            this.parts = partData;
        });
    }
    get batch() {
        return this.form.get('batch');
    }
    get quantity() {
        return this.form.get('quantity');
    }
    get package() {
        return this.form.get('package');
    }
    ngOnInit() {
        this.form = this.fb.group({
            quantity: [''],
            batch: [''],
            package: ['']
        });
    }
    updatePart(part) {
        // console.log("update");
        this.part = part;
        // this.parts = part;
    }
    cancel() {
        this.ref.close();
    }
    submit(obj) {
        console.log(obj[0]);
        console.log(obj[1].value);
        this.ref.close(obj);
    }
}
InvoicePartsComponent.??fac = function InvoicePartsComponent_Factory(t) { return new (t || InvoicePartsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_invoive_service__WEBPACK_IMPORTED_MODULE_3__["InvoiveNumberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogRef"])); };
InvoicePartsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: InvoicePartsComponent, selectors: [["app-invoice-parts"]], decls: 0, vars: 0, template: function InvoicePartsComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS1wYXJ0cy9pbnZvaWNlLXBhcnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InvoicePartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invoice-parts',
                templateUrl: './invoice-parts.component.html',
                styleUrls: ['./invoice-parts.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }, { type: _invoive_service__WEBPACK_IMPORTED_MODULE_3__["InvoiveNumberService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/invoice/invoice-parts/parts.ts":
/*!************************************************!*\
  !*** ./src/app/invoice/invoice-parts/parts.ts ***!
  \************************************************/
/*! exports provided: parts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parts", function() { return parts; });
class parts {
    parts(data) {
        this.id = data.id;
        this.name = data.id;
        this.cycleTime = data.cycleTime;
        this.customer = data.customer;
        this.price = data.price;
    }
}


/***/ }),

/***/ "./src/app/invoice/invoice.component.ts":
/*!**********************************************!*\
  !*** ./src/app/invoice/invoice.component.ts ***!
  \**********************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _invoice_number_invoice_number_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-number/invoice-number.component */ "./src/app/invoice/invoice-number/invoice-number.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var src_app_ui_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ui/toast.service */ "./src/app/ui/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _invoice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./invoice.service */ "./src/app/invoice/invoice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");












const _c0 = ["autoInput"];
function InvoiceComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r192.number, " ");
} }
function InvoiceComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function InvoiceComponent_nb_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const option_r199 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r199.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", option_r199.name, " ");
} }
function InvoiceComponent_tr_68_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const option_r204 = ctx.$implicit;
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r204.name)("formGroup", ctx_r203.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", option_r204.name, "/", option_r204.code, " ");
} }
function InvoiceComponent_tr_68_Template(rf, ctx) { if (rf & 1) {
    const _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "input", 53, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function InvoiceComponent_tr_68_Template_input_input_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r206); const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r205.onDataChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nb-autocomplete", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedChange", function InvoiceComponent_tr_68_Template_nb_autocomplete_selectedChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r206); const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r207.onSelectChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, InvoiceComponent_tr_68_nb_option_6_Template, 2, 4, "nb-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Select a Tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "5%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "12%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "18%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "28%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5);
    const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r198.description.invalid && (ctx_r198.description.dirty || ctx_r198.description.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nbAutocomplete", _r202);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 4, ctx_r198.partsFiltered$));
} }
class InvoiceComponent {
    constructor(fb, db, toast, location, dialogService, data, route) {
        this.fb = fb;
        this.db = db;
        this.toast = toast;
        this.location = location;
        this.dialogService = dialogService;
        this.data = data;
        this.route = route;
        this.autoManual = false;
        this.message = "Manual";
        // ngModelDate = new Date();
        this.itemList = [];
        this.selectedItem = '1';
        this.selectedItemButton = '2';
        this.numbers = new Array(1, 4, 9);
        this.option = 'FG';
        this.validity = true;
        this.partOptions = [];
    }
    get date() {
        return this.form.get('date');
    }
    get description() {
        return this.form.get('description');
    }
    get poNumber() {
        return this.form.get('poNumber');
    }
    get InvoiceNumber() {
        return this.form.get('InvoiceNumber');
    }
    get batch() {
        return this.form.get('batch');
    }
    get quantity() {
        return this.form.get('quantity');
    }
    get package() {
        return this.form.get('package');
    }
    get rm_name() {
        return this.form.get('rm_name');
    }
    get customer() {
        return this.form.get('customer');
    }
    get material() {
        return this.form.get('material');
    }
    get partName() {
        return this.form.get('part');
    }
    get partNumber() {
        return this.form.get('number');
    }
    ngOnInit() {
        console.log("1");
        this.data.currentMessage.subscribe(message => this.updatemode(message));
        this.data.currentInvoice.subscribe(message => this.updateNumber(message));
        this.data.currentPart.subscribe(parts => this.updateParts(parts));
        // this.data.currentPart.subscribe(part=>this.updateParts(part));
        this.route.paramMap.subscribe((params) => {
            this.selectedId = params.get('id');
            this.fetchObject();
            this.loadPartsList();
            this.loadCustomersList();
        });
        this.form = this.fb.group({
            InvoiceNumber: [''],
            poNumber: [''],
            date: [''],
            description: [''],
            rm_name: [''],
            partName: [''],
            partNumber: [''],
            rate: [''],
            quantity: [''],
            packingDetails: ['']
        });
        this.form.valueChanges.subscribe(() => {
            this.validity = this.form.valid;
        });
    }
    loadCustomersList() {
        this.db.getCustomers()
            .subscribe((list) => {
            this.customersFiltered$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(list);
        });
    }
    loadPartsList() {
        this.db.getParts()
            .subscribe((list) => {
            this.partOptions = list;
            this.partsFiltered$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(list);
        });
    }
    // CUSTOMER NAME FILTER
    filter(value) {
        const filterValue = value.toLowerCase();
        return this.partOptions.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }
    // PART NAME FILTER 
    value(value) {
        const filterValue = value.toLowerCase();
        return this.partOptions.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }
    getFilteredOptions(value) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(filterString => this.filter(filterString)));
    }
    // getFilterOptions(value: string): Observable<string[]> {
    //   return of(value).pipe(
    //     map(filterString => this.value(filterString)),
    //   );
    // }
    open() {
        this.dialogService.open(_invoice_number_invoice_number_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceNumberComponent"]);
    }
    openPart() {
        this.itemList.push(undefined);
        // this.dialogService.open(InvoicePartsComponent).onClose.subscribe(
        //   part => {
        //     this.itemList.push(part);
        //     console.log(part);
        //   }
        // );
    }
    onDataChange() {
        this.customersFiltered$ = this.getFilteredOptions(this.input.nativeElement.value);
    }
    onSelectionChange($event) {
        console.log($event.name);
        this.customersFiltered$ = this.getFilteredOptions($event.name);
    }
    onItemChange() {
        this.partsFiltered$ = this.getFilteredOptions(this.input.nativeElement.value);
    }
    onSelectChange($event) {
        this.partsFiltered$ = this.getFilteredOptions($event);
    }
    recieveMessage($event) {
        this.message = $event;
    }
    updatemode(msg) {
        if (msg != null) {
            this.message = msg;
            if (this.message == "Auto") {
                this.autoManual = true;
            }
            else {
                this.autoManual = false;
            }
        }
    }
    updateNumber(msg) {
        if (msg != "") {
            this.number = msg;
        }
    }
    updateParts(part) {
        console.log(part);
        if (part != null) {
            this.itemList.push(part);
        }
    }
    fetchObject() {
        if (this.selectedId) {
            console.log(this.selectedObject);
            this.selectedObject = this.db.getPart(this.selectedId);
            this.selectedObject.subscribe((data) => {
                this.form.patchValue({
                    name: data.name,
                    description: data.description,
                    code: data.code,
                    partWeight: data.partWeight,
                    shotWeight: data.shotWeight,
                    cycleTime: data.cycleTime,
                    cavity: data.cavity,
                    inventoryType: data.inventoryType,
                    customer: data.customer,
                    nextOperation: data.nextOperation,
                    price: data.price,
                    rm_name: data.rm_name,
                    partName: data.partName,
                    rate: data.rate,
                    quantity: data.quantity,
                    packingDetails: data.packingDetails,
                });
            });
        }
    }
    // ONSUBMIT
    onButtonClicked(clickedButton) {
        console.log(this.form.value);
        if (clickedButton === 'save') {
            this.db.addInvoice(this.form.value, this.selectedId)
                .then(() => {
                this.toast.success('Invoice updated succesfully');
                this.form.reset();
                if (this.selectedId) {
                    this.location.back();
                }
            });
        }
    }
}
InvoiceComponent.??fac = function InvoiceComponent_Factory(t) { return new (t || InvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_ui_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"])); };
InvoiceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: InvoiceComponent, selectors: [["app-invoice"]], viewQuery: function InvoiceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.input = _t.first);
    } }, decls: 127, vars: 14, consts: [[3, "formGroup"], [1, "form-group"], ["for", "number", 1, "label"], [1, "row"], ["class", "col-md-6", 4, "ngIf"], ["nbButton", "", "status", "info", 3, "click"], ["icon", "edit"], [2, "padding-left", "15px"], ["for", "date", 1, "label"], [1, "col-md-6"], ["nbInput", "", "placeholder", "Pick Date", "formControlName", "date", 3, "nbDatepicker"], ["dateTimePicker", ""], ["for", "po", 1, "label"], ["formControlName", "poNumber", "type", "text", "id", "po", "placeholder", "", "nbInput", ""], ["for", "rm_name", 1, "label"], [1, "col-md-4"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "rm_name", "id", "rm_name", "placeholder", "eg-Mando", 3, "nbAutocomplete", "input"], ["autoInput", ""], [3, "selectedChange"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-3", 2, "padding-top", "15px", "padding-bottom", "15px"], ["nbButton", "", "status", "primary", 3, "click"], ["icon", "plus"], [2, "width", "100%", 3, "formGroup"], [2, "text-align", "center"], ["for", "text", 1, "label"], ["style", "text-align: center;", 4, "ngFor", "ngForOf"], [2, "margin-left", "16px"], [2, "font-weight", "bold"], ["nbInput", "", "fullWidth", "", "placeholder", "Enter the terms and conditions of your business to be displayed in your transaction", 2, "margin-bottom", "20px", "height", "150px"], [2, "margin-left", "30px"], [1, "col-md-5"], [2, "font-weight", "bold", "margin-left", "25px"], [1, "col-md-7"], ["placeholder", "Select Showcase", 1, "col-md-2", 3, "selected", "selectedChange"], ["value", "", "disabled", ""], ["value", "0"], ["value", "1"], ["type", "text", "nbInput", "", 2, "margin-bottom", "10px", "width", "20%", "height", "40px"], [1, "col-md-8"], [2, "margin-left", "18px"], ["status", "primary", "placeholder", "Select Showcase", 3, "selected", "selectedChange"], ["status", "primary", "value", ""], ["status", "primary", "value", "0"], ["routerLink", "/print"], ["status", "primary", "value", "1"], ["status", "primary", "value", "2"], [1, "col-md-1"], ["nbButton", "", "status", "primary", 3, "event"], ["nbButton", "", "status", "primary"], ["formControlName", "InvoiceNumber", "type", "text", "id", "number", "placeholder", "eg-SIG10", "nbInput", ""], [3, "value"], ["type", "text", "s", "", "nbInput", "", "fullWidth", "", "formControlName", "partName", "id", "partName", "placeholder", "eg-GB LHD", 2, "margin-bottom", "20px", "width", "80%", "height", "40px", 3, "nbAutocomplete", "input"], [3, "value", "formGroup", 4, "ngFor", "ngForOf"], ["type", "text", "id", "package", "placeholder", "", "nbInput", "", 1, "package", 2, "margin-bottom", "20px", "width", "80%", "height", "40px"], ["type", "text", "id", "Quantity", "placeholder", "", "nbInput", "", 1, "Quantity", 2, "margin-bottom", "20px", "width", "40%", "height", "40px"], ["placeholder", "eg. 0%", 2, "margin-bottom", "20px", "width", "70%", "height", "40px", "background-color", "rgb(5, 5, 5)", "color", "rgb(245, 238, 238)", "border", "rgb(5, 5, 5)"], ["disabled", ""], ["value", "5"], ["value", "12"], ["value", "18"], ["value", "28"], [3, "value", "formGroup"]], template: function InvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Invoice Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Invoice Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, InvoiceComponent_div_9_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, InvoiceComponent_div_10_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InvoiceComponent_Template_button_click_11_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "nb-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Invoice Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "nb-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "PO Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function InvoiceComponent_Template_input_input_34_listener() { return ctx.onDataChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "nb-autocomplete", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedChange", function InvoiceComponent_Template_nb_autocomplete_selectedChange_36_listener($event) { return ctx.onSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, InvoiceComponent_nb_option_38_Template, 2, 2, "nb-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](39, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function InvoiceComponent_Template_button_click_41_listener() { return ctx.openPart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "nb-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Add Part ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Part no/Part name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Batch no");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, "Packaging Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](68, InvoiceComponent_tr_68_Template, 34, 6, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "nb-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "nb-card", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "TCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "nb-select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedChange", function InvoiceComponent_Template_nb_select_selectedChange_87_listener($event) { return ctx.selectedItem = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "nb-option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "Select a Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "nb-option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "CGST/SGST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "nb-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "IGST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "nb-option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](95, "UGST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "Shipping Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](101, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](102, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](106, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "nb-select", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedChange", function InvoiceComponent_Template_nb_select_selectedChange_111_listener($event) { return ctx.selectedItemButton = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "nb-option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "Save and Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "nb-option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](115, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](116, "Save and Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "nb-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](118, "Save and Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "nb-option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](120, "Save and Send Later");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](121, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("event", function InvoiceComponent_Template_button_event_122_listener($event) { return ctx.onButtonClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](123, "Save as Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](124, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](126, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](22);
        const _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.autoManual);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.autoManual);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nbDatepicker", _r194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.description.invalid && (ctx.description.dirty || ctx.description.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nbAutocomplete", _r196);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](39, 12, ctx.customersFiltered$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.itemList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selected", ctx.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selected", ctx.selectedItemButton);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDatepickerComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InvoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invoice',
                templateUrl: './invoice.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styleUrls: ['./invoice.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"] }, { type: src_app_ui_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDialogService"] }, { type: _invoice_service__WEBPACK_IMPORTED_MODULE_9__["InvoiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoInput']
        }] }); })();


/***/ }),

/***/ "./src/app/invoice/invoice.service.ts":
/*!********************************************!*\
  !*** ./src/app/invoice/invoice.service.ts ***!
  \********************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _invoice_parts_parts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-parts/parts */ "./src/app/invoice/invoice-parts/parts.ts");




class InvoiceService {
    constructor() {
        this.messagesource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("DefaultMessage");
        this.currentMessage = this.messagesource.asObservable();
        this.invoiceSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("DefaultMessage");
        this.currentInvoice = this.invoiceSource.asObservable();
        this.partSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _invoice_parts_parts__WEBPACK_IMPORTED_MODULE_2__["parts"]);
        this.currentPart = this.partSource.asObservable();
    }
    changeMessage(message) {
        this.messagesource.next(message);
    }
    changeInvoice(message) {
        this.invoiceSource.next(message);
    }
    addPart(part) {
        console.log(part);
        this.partSource.next(part);
    }
}
InvoiceService.??fac = function InvoiceService_Factory(t) { return new (t || InvoiceService)(); };
InvoiceService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: InvoiceService, factory: InvoiceService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InvoiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/invoice/invoive.service.ts":
/*!********************************************!*\
  !*** ./src/app/invoice/invoive.service.ts ***!
  \********************************************/
/*! exports provided: InvoiveNumberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiveNumberService", function() { return InvoiveNumberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _invoice_parts_parts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice-parts/parts */ "./src/app/invoice/invoice-parts/parts.ts");




class InvoiveNumberService {
    constructor() {
        this.messagesource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("DefaultMessage");
        this.currentMessage = this.messagesource.asObservable();
        this.invoiceSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]("DefaultMessage");
        this.currentInvoice = this.invoiceSource.asObservable();
        this.partSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _invoice_parts_parts__WEBPACK_IMPORTED_MODULE_2__["parts"]);
        this.currentPart = this.partSource.asObservable();
    }
    changeMessage(message) {
        this.messagesource.next(message);
    }
    changeInvoice(message) {
        this.invoiceSource.next(message);
    }
    addPart(part) {
        console.log(part);
        this.partSource.next(part);
    }
}
InvoiveNumberService.??fac = function InvoiveNumberService_Factory(t) { return new (t || InvoiveNumberService)(); };
InvoiveNumberService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: InvoiveNumberService, factory: InvoiveNumberService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](InvoiveNumberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/invoice/print/print.component.ts":
/*!**************************************************!*\
  !*** ./src/app/invoice/print/print.component.ts ***!
  \**************************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PrintComponent {
    constructor() {
    }
    ngOnInit() {
        let printContents = document.getElementById("print-layout").innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
}
PrintComponent.??fac = function PrintComponent_Factory(t) { return new (t || PrintComponent)(); };
PrintComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PrintComponent, selectors: [["app-print"]], decls: 20, vars: 0, consts: [["id", "print-layout"], [1, "header-space"], [1, "content"], [1, "footer-space"], [1, "header"], [1, "footer"]], template: function PrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tfoot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "COOL HEADER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "AWESOME FOOTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvcHJpbnQvcHJpbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PrintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print',
                templateUrl: './print.component.html',
                styleUrls: ['./print.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/machines/machine-edit/machine-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/machines/machine-edit/machine-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: MachineEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineEditComponent", function() { return MachineEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _ui_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../ui/toast.service */ "./src/app/ui/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/form-footer/form-footer.component */ "./src/app/ui/form-footer/form-footer.component.ts");










function MachineEditComponent_div_11_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_11_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MachineEditComponent_div_11_li_3_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MachineEditComponent_div_11_li_4_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r136.name.errors == null ? null : ctx_r136.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r136.name.errors == null ? null : ctx_r136.name.errors.minlength);
} }
function MachineEditComponent_div_18_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter code of the Machine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_18_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Machine code should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MachineEditComponent_div_18_li_3_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MachineEditComponent_div_18_li_4_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r137.code.errors == null ? null : ctx_r137.code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r137.code.errors == null ? null : ctx_r137.code.errors.minlength);
} }
function MachineEditComponent_div_25_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a make.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_25_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Make should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MachineEditComponent_div_25_li_3_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MachineEditComponent_div_25_li_4_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r138.make.errors == null ? null : ctx_r138.make.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r138.make.errors == null ? null : ctx_r138.make.errors.minlength);
} }
function MachineEditComponent_div_113_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_113_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MachineEditComponent_div_113_li_3_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MachineEditComponent_div_113_li_4_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r139.name.errors == null ? null : ctx_r139.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r139.name.errors == null ? null : ctx_r139.name.errors.minlength);
} }
function MachineEditComponent_div_115_div_6_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_115_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_115_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MachineEditComponent_div_115_div_6_li_3_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MachineEditComponent_div_115_div_6_li_4_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r153.name.errors == null ? null : ctx_r153.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r153.name.errors == null ? null : ctx_r153.name.errors.minlength);
} }
function MachineEditComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Tonnage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MachineEditComponent_div_115_div_6_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r140.name.invalid && (ctx_r140.name.dirty || ctx_r140.name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r140.name.invalid && (ctx_r140.name.dirty || ctx_r140.name.touched));
} }
function MachineEditComponent_div_116_div_9_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_116_div_9_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_116_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MachineEditComponent_div_116_div_9_li_3_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MachineEditComponent_div_116_div_9_li_4_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r156.name.errors == null ? null : ctx_r156.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r156.name.errors == null ? null : ctx_r156.name.errors.minlength);
} }
function MachineEditComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Tie bar distance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MachineEditComponent_div_116_div_9_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r141.name.invalid && (ctx_r141.name.dirty || ctx_r141.name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r141.name.invalid && (ctx_r141.name.dirty || ctx_r141.name.touched));
} }
function MachineEditComponent_div_117_div_27_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_117_div_27_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_117_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MachineEditComponent_div_117_div_27_li_3_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MachineEditComponent_div_117_div_27_li_4_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r159.name.errors == null ? null : ctx_r159.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r159.name.errors == null ? null : ctx_r159.name.errors.minlength);
} }
function MachineEditComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Platten size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "length");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "width");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, MachineEditComponent_div_117_div_27_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r142.name.invalid && (ctx_r142.name.dirty || ctx_r142.name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r142.name.invalid && (ctx_r142.name.dirty || ctx_r142.name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r142.name.invalid && (ctx_r142.name.dirty || ctx_r142.name.touched));
} }
function MachineEditComponent_div_118_div_9_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_118_div_9_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_118_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MachineEditComponent_div_118_div_9_li_3_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MachineEditComponent_div_118_div_9_li_4_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r162.name.errors == null ? null : ctx_r162.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r162.name.errors == null ? null : ctx_r162.name.errors.minlength);
} }
function MachineEditComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Screw size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "cm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MachineEditComponent_div_118_div_9_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r143.name.invalid && (ctx_r143.name.dirty || ctx_r143.name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r143.name.invalid && (ctx_r143.name.dirty || ctx_r143.name.touched));
} }
function MachineEditComponent_div_119_div_9_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_119_div_9_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MachineEditComponent_div_119_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MachineEditComponent_div_119_div_9_li_3_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MachineEditComponent_div_119_div_9_li_4_Template, 3, 0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r165.name.errors == null ? null : ctx_r165.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r165.name.errors == null ? null : ctx_r165.name.errors.minlength);
} }
function MachineEditComponent_div_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Maximum shot weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "g ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MachineEditComponent_div_119_div_9_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r144.name.invalid && (ctx_r144.name.dirty || ctx_r144.name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r144.name.invalid && (ctx_r144.name.dirty || ctx_r144.name.touched));
} }
class MachineEditComponent {
    constructor(fb, db, toast, route, location) {
        this.fb = fb;
        this.db = db;
        this.toast = toast;
        this.route = route;
        this.location = location;
        this.option = 'moulding';
        this.validity = false;
    }
    // GETTERS AND SETTERS
    get name() {
        return this.form.get('name');
    }
    get code() {
        return this.form.get('code');
    }
    get make() {
        return this.form.get('make');
    }
    get email() {
        return this.form.get('email');
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.selectedId = params.get('id');
            this.fetchObject();
        });
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            make: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            machineType: [''],
            dimensions: this.fb.group({
                length: [''],
                width: [''],
                height: ['']
            }),
        });
        this.mouldingMachineParams = this.fb.group({
            tonnage: [''],
            tieBarDistance: [''],
            plattenSize: this.fb.group({
                length: [''],
                width: ['']
            }),
            screwSize: [''],
            maxShotWt: ['']
        });
        this.form.valueChanges.subscribe(() => {
            this.validity = this.form.valid;
        });
    }
    onChange() {
    }
    fetchObject() {
        if (this.selectedId) {
            this.selectedObject = this.db.getMachine(this.selectedId);
            this.selectedObject.subscribe((data) => {
                this.option = data.machineType;
                this.form.patchValue({
                    name: data.name,
                    code: data.code,
                    make: data.make,
                    machineType: data.machineType,
                    dimensions: data.dimensions
                });
                if (this.option === 'moulding') {
                    this.mouldingMachineParams.patchValue({
                        tonnage: data.tonnage,
                        tieBarDistance: data.tieBarDistance,
                        plattenSize: data.plattenSize,
                        screwSize: data.screwSize,
                        maxShotWt: data.maxShotWt
                    });
                }
            });
        }
    }
    // ONSUBMIT
    onButtonClicked(clickedButton) {
        if (clickedButton === 'save') {
            let data;
            if (this.form.value.machineType === 'moulding') {
                data = Object.assign(this.form.value, this.mouldingMachineParams.value);
            }
            else {
                data = this.form.value;
            }
            this.db.addMachine(data, this.selectedId)
                .then(() => {
                this.toast.success('Machine updated succesfully');
                this.form.reset();
                this.mouldingMachineParams.reset();
                if (this.selectedId) {
                    this.location.back();
                }
            });
        }
    }
}
MachineEditComponent.??fac = function MachineEditComponent_Factory(t) { return new (t || MachineEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
MachineEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MachineEditComponent, selectors: [["app-machine-edit"]], decls: 131, vars: 30, consts: [[3, "formGroup"], [1, "form-group"], ["for", "name", 1, "label"], [1, "row"], [1, "col-md-6"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "name", "id", "name", "placeholder", "eg. E120T"], ["class", "col-md-6", 4, "ngIf"], ["for", "code", 1, "label"], [1, "col-md-3"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "code", "id", "code", "placeholder", "eg. MC-T-1"], ["for", "make", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "make", "id", "make", "placeholder", "eg. Engel"], ["for", "inventoryType", 1, "label"], [1, "row", "radio-section"], [1, "col", "radio-option"], ["type", "radio", "id", "WIP", "formControlName", "machineType", "value", "moulding", "checked", "", 3, "ngModel", "ngModelChange", "change"], ["for", "control_01", 1, "card", "radio-card"], ["src", "/assets/app/moulding.svg", "alt", "Card image cap", 1, ""], [1, "card-body"], [1, "card-title", "text-center", "label"], ["type", "radio", "id", "FG", "formControlName", "machineType", "value", "squeezing", 3, "ngModel", "ngModelChange", "change"], ["for", "control_02", 1, "card", "radio-card"], ["src", "/assets/app/squeezing.svg", "alt", "Card image cap", 1, "card-img-top"], ["type", "radio", "id", "FG", "formControlName", "machineType", "value", "welding", 3, "ngModel", "ngModelChange", "change"], ["src", "/assets/app/welding.svg", "alt", "Card image cap", 1, "card-img-top"], ["type", "radio", "id", "FG", "formControlName", "machineType", "value", "Testing", 3, "ngModel", "ngModelChange", "change"], ["src", "/assets/app/testing.svg", "alt", "Card image cap", 1, "card-img-top"], ["formGroupName", "dimensions", 1, "form-group"], [1, "col-4"], [2, "text-align", "center"], ["type", "number", "formControlName", "length", "nbInput", "", "fullWidth", "", "id", "make"], ["nbSuffix", ""], [1, "label"], [2, "position", "absolute", "top", "50%"], ["type", "number", "formControlName", "width", "nbInput", "", "fullWidth", "", "id", "make"], ["type", "number", "formControlName", "height", "nbInput", "", "fullWidth", "", "id", "make"], ["class", "form-group", 4, "ngIf"], ["class", "form-group", "formGroupName", "plattenSize", 4, "ngIf"], [3, "status", "event"], [1, "error"], [4, "ngIf"], ["type", "text", "formControlName", "tonnage", "nbInput", "", "fullWidth", "", "id", "tonnage", "placeholder", "eg. 60"], [1, "col-md-2"], ["type", "number", "formControlName", "tieBarDistance", "nbInput", "", "fullWidth", "", "id", "make"], ["formGroupName", "plattenSize", 1, "form-group"], ["type", "number", "formControlName", "screwSize", "nbInput", "", "fullWidth", "", "id", "make"], ["type", "number", "formControlName", "maxShotWt", "nbInput", "", "fullWidth", "", "id", "make"]], template: function MachineEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Machine Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, MachineEditComponent_div_11_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, MachineEditComponent_div_18_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Make");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, MachineEditComponent_div_25_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "nb-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Machine Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Operational Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Type of machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MachineEditComponent_Template_input_ngModelChange_43_listener($event) { return ctx.option = $event; })("change", function MachineEditComponent_Template_input_change_43_listener() { return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Moulding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MachineEditComponent_Template_input_ngModelChange_51_listener($event) { return ctx.option = $event; })("change", function MachineEditComponent_Template_input_change_51_listener() { return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Squeezing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MachineEditComponent_Template_input_ngModelChange_59_listener($event) { return ctx.option = $event; })("change", function MachineEditComponent_Template_input_change_59_listener() { return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Welding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MachineEditComponent_Template_input_ngModelChange_67_listener($event) { return ctx.option = $event; })("change", function MachineEditComponent_Template_input_change_67_listener() { return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Machine dimensions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84, "length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](88, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](91, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](98, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](103, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](105, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](112, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](113, MachineEditComponent_div_113_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](115, MachineEditComponent_div_115_Template, 7, 3, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](116, MachineEditComponent_div_116_Template, 10, 3, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](117, MachineEditComponent_div_117_Template, 28, 5, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](118, MachineEditComponent_div_118_Template, 10, 3, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](119, MachineEditComponent_div_119_Template, 10, 3, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](121, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](122, "Maintanence Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](124, " Item Content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Other Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](129, " Item Content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "ui-form-footer", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("event", function MachineEditComponent_Template_ui_form_footer_event_130_listener($event) { return ctx.onButtonClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.code.invalid && (ctx.code.dirty || ctx.code.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.code.invalid && (ctx.code.dirty || ctx.code.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.make.invalid && (ctx.make.dirty || ctx.make.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.make.invalid && (ctx.make.dirty || ctx.make.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.mouldingMachineParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "moulding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "moulding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "moulding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "moulding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "moulding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("status", ctx.validity);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAccordionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAccordionItemBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbFormFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSuffixDirective"], _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__["FormFooterComponent"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.radio-card[_ngcontent-%COMP%] {\n  height: 108px;\n  width: 108px;\n  border-radius: 8px;\n  background-color: #444444;\n}\n\n.radio-card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 4px;\n  height: 48px;\n  -webkit-filter: grayscale(100);\n          filter: grayscale(100);\n}\n\n.radio-section[_ngcontent-%COMP%] {\n  margin: 0 1px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0px 0;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:not(:disabled)    ~ .radio-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:disabled    ~ .radio-card[_ngcontent-%COMP%] {\n  color: #bcc2bf;\n  border-color: #bcc2bf;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n\n.radio[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 20px;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .radio-card[_ngcontent-%COMP%] {\n  background: #ffc107;\n  box-shadow: 0px 0px 20px #ffc107;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .radio-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: white;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .radio-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-filter: grayscale(0);\n          filter: grayscale(0);\n}\n\n.radio-option[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFjaGluZXMvbWFjaGluZS1lZGl0L0Q6XFxEZXZlbG9wbWVudFxcQW5ndWxhclxcYW5nbGUvc3JjXFxhcHBcXG1hY2hpbmVzXFxtYWNoaW5lLWVkaXRcXG1hY2hpbmUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFjaGluZXMvbWFjaGluZS1lZGl0L21hY2hpbmUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0FDSUY7O0FESEU7RUFDRSxlQUFBO0FDS0o7O0FESEU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDS0o7O0FERkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREhBO0VBQ0UsbUJBQUE7RUFFQSxnQ0FBQTtBQ0tGOztBREpBO0VBQ0UsWUFBQTtBQ01GOztBREpFO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ01KOztBRENBO0VBQ0Usa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21hY2hpbmVzL21hY2hpbmUtZWRpdC9tYWNoaW5lLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnVse1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgXG4ucmFkaW8tY2FyZHtcbiAgaGVpZ2h0OiAxMDhweDtcbiAgd2lkdGg6IDEwOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XG59XG4ucmFkaW8tY2FyZD5pbWd7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDApO1xufVxuLnJhZGlvLXNlY3Rpb257XG4gIG1hcmdpbjogMCAxcHg7XG59XG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMHB4IDA7XG59XG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBkaXNwbGF5OiBub25lO1xuICAmOm5vdCg6ZGlzYWJsZWQpIH4gLnJhZGlvLWNhcmQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmOmRpc2FibGVkIH4gLnJhZGlvLWNhcmQge1xuICAgIGNvbG9yOiBoc2xhKDE1MCwgNSUsIDc1JSwgMSk7XG4gICAgYm9yZGVyLWNvbG9yOiBoc2xhKDE1MCwgNSUsIDc1JSwgMSk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG59XG4ucmFkaW8ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMjBweDtcbn1cbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLnJhZGlvLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xuICAvLyBjb2xvcjogaHNsYSgyMTUsIDAlLCAxMDAlLCAxKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4ICNmZmMxMDc7XG4ubGFiZWx7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiAgaW1ne1xuICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xuICB9XG59XG5wIHtcbiAgLy8gbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5yYWRpby1vcHRpb257XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG5cblxuICAiLCJ1bCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5yYWRpby1jYXJkIHtcbiAgaGVpZ2h0OiAxMDhweDtcbiAgd2lkdGg6IDEwOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XG59XG5cbi5yYWRpby1jYXJkID4gaW1nIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogNHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCk7XG59XG5cbi5yYWRpby1zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIDFweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDBweCAwO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpub3QoOmRpc2FibGVkKSB+IC5yYWRpby1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW5wdXRbdHlwZT1yYWRpb106ZGlzYWJsZWQgfiAucmFkaW8tY2FyZCB7XG4gIGNvbG9yOiAjYmNjMmJmO1xuICBib3JkZXItY29sb3I6ICNiY2MyYmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5yYWRpbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLnJhZGlvLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggI2ZmYzEwNztcbn1cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAucmFkaW8tY2FyZCAubGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLnJhZGlvLWNhcmQgaW1nIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG59XG5cbi5yYWRpby1vcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MachineEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-machine-edit',
                templateUrl: './machine-edit.component.html',
                styleUrls: ['./machine-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }, { type: _ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/machines/machine-list/machine-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/machines/machine-list/machine-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: MachineListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MachineListComponent", function() { return MachineListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/list-view/list-view.component */ "./src/app/ui/list-view/list-view.component.ts");






class MachineListComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.sort = '1';
        this.data = [];
    }
    ngOnInit() {
        this.db.getMachines().subscribe((data) => {
            this.data = data;
        });
    }
    onItemSelected(item) {
        console.log(item.id);
        this.router.navigate([`/machines/${item.id}`]);
        // this.router.navigate([`/materials/${product.id}`]);
    }
}
MachineListComponent.??fac = function MachineListComponent_Factory(t) { return new (t || MachineListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MachineListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MachineListComponent, selectors: [["app-machine-list"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-4"], ["nbButton", "", "size", "small", "routerLink", "/machines/new", "status", "primary"], [1, "col-6"], ["icon", "search-outline"], ["icon", "power-outline"], ["icon", "person-outline"], ["icon", "home-outline"], [3, "list", "onclick"]], template: function MachineListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "New Machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nb-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "nb-action", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nb-action", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "nb-action", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "nb-action", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ui-list-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onclick", function MachineListComponent_Template_ui_list_view_onclick_10_listener($event) { return ctx.onItemSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx.data);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hY2hpbmVzL21hY2hpbmUtbGlzdC9tYWNoaW5lLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MachineListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-machine-list',
                templateUrl: './machine-list.component.html',
                styleUrls: ['./machine-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/materials/material-edit/material-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/materials/material-edit/material-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: MaterialEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialEditComponent", function() { return MaterialEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _ui_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../ui/toast.service */ "./src/app/ui/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/form-footer/form-footer.component */ "./src/app/ui/form-footer/form-footer.component.ts");












const _c0 = ["autoInput"];
function MaterialEditComponent_form_25_div_7_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter name of the Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_7_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Material Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_25_div_7_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MaterialEditComponent_form_25_div_7_li_4_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r77.rmForm.get("name").errors == null ? null : ctx_r77.rmForm.get("name").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r77.rmForm.get("name").errors == null ? null : ctx_r77.rmForm.get("name").errors.minlength);
} }
function MaterialEditComponent_form_25_div_14_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter name of the Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_14_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Material Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_25_div_14_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MaterialEditComponent_form_25_div_14_li_4_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r78.rmCategory.errors == null ? null : ctx_r78.rmCategory.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r78.rmCategory.errors == null ? null : ctx_r78.rmCategory.errors.minlength);
} }
function MaterialEditComponent_form_25_div_21_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter grade of the Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_21_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Material grade should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_25_div_21_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MaterialEditComponent_form_25_div_21_li_4_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r79.grade.errors == null ? null : ctx_r79.grade.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r79.grade.errors == null ? null : ctx_r79.grade.errors.minlength);
} }
function MaterialEditComponent_form_25_div_28_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter color of the Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_28_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Material color should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_25_div_28_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MaterialEditComponent_form_25_div_28_li_4_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r80.color.errors == null ? null : ctx_r80.color.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r80.color.errors == null ? null : ctx_r80.color.errors.minlength);
} }
function MaterialEditComponent_form_25_div_37_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter description for the Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_37_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Material description should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_25_div_37_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MaterialEditComponent_form_25_div_37_li_4_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r81.rmForm.get("description").errors == null ? null : ctx_r81.rmForm.get("description").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r81.rmForm.get("description").errors == null ? null : ctx_r81.rmForm.get("description").errors.minlength);
} }
function MaterialEditComponent_form_25_nb_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const option_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r97.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", option_r97.name, " ");
} }
function MaterialEditComponent_form_25_div_49_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter vendor of the Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_49_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Vendor should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_25_div_49_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MaterialEditComponent_form_25_div_49_li_4_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r85.rmForm.get("vendor").errors == null ? null : ctx_r85.rmForm.get("vendor").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r85.rmForm.get("vendor").errors == null ? null : ctx_r85.rmForm.get("vendor").errors.minlength);
} }
function MaterialEditComponent_form_25_div_59_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_25_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_25_div_59_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r86.rmForm.get("price").errors == null ? null : ctx_r86.rmForm.get("price").errors.required);
} }
const _c1 = function () { return { standalone: true }; };
function MaterialEditComponent_form_25_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MaterialEditComponent_form_25_div_7_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Raw Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MaterialEditComponent_form_25_div_14_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, MaterialEditComponent_form_25_div_21_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, MaterialEditComponent_form_25_div_28_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, MaterialEditComponent_form_25_div_37_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "Vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function MaterialEditComponent_form_25_Template_input_input_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r101.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "nb-autocomplete", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedChange", function MaterialEditComponent_form_25_Template_nb_autocomplete_selectedChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r102); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r103.onSelectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, MaterialEditComponent_form_25_nb_option_47_Template, 2, 2, "nb-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](48, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, MaterialEditComponent_form_25_div_49_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](58, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, MaterialEditComponent_form_25_div_59_Template, 4, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](46);
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r75.rmForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](28, _c1))("ngModel", ctx_r75.rmName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r75.rmForm.get("name").invalid && (ctx_r75.rmForm.get("name").dirty || ctx_r75.rmForm.get("name").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r75.rmCategory.invalid && (ctx_r75.rmCategory.dirty || ctx_r75.rmCategory.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r75.rmCategory.invalid && (ctx_r75.rmCategory.dirty || ctx_r75.rmCategory.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r75.grade.invalid && (ctx_r75.grade.dirty || ctx_r75.grade.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r75.grade.invalid && (ctx_r75.grade.dirty || ctx_r75.grade.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r75.color.invalid && (ctx_r75.color.dirty || ctx_r75.color.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r75.color.invalid && (ctx_r75.color.dirty || ctx_r75.color.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r75.rmForm.get("description").invalid && (ctx_r75.rmForm.get("description").dirty || ctx_r75.rmForm.get("description").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r75.rmForm.get("description").invalid && (ctx_r75.rmForm.get("description").dirty || ctx_r75.rmForm.get("description").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r75.rmForm.get("vendor").invalid && (ctx_r75.rmForm.get("vendor").dirty || ctx_r75.rmForm.get("vendor").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nbAutocomplete", _r83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](48, 26, ctx_r75.filteredOptions$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r75.rmForm.get("vendor").invalid && (ctx_r75.rmForm.get("vendor").dirty || ctx_r75.rmForm.get("vendor").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r75.rmForm.get("price").invalid && (ctx_r75.rmForm.get("price").dirty || ctx_r75.rmForm.get("price").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r75.rmForm.get("price").invalid && (ctx_r75.rmForm.get("price").dirty || ctx_r75.rmForm.get("price").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r75.rmForm.get("price").invalid && (ctx_r75.rmForm.get("price").dirty || ctx_r75.rmForm.get("price").touched));
} }
function MaterialEditComponent_form_26_div_7_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter name of the Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_26_div_7_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Material Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_26_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_26_div_7_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MaterialEditComponent_form_26_div_7_li_4_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r104.boForm.get("name").errors == null ? null : ctx_r104.boForm.get("name").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r104.boForm.get("name").errors == null ? null : ctx_r104.boForm.get("name").errors.minlength);
} }
function MaterialEditComponent_form_26_div_14_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter part Number of the Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_26_div_14_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Material part Number should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_26_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_26_div_14_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MaterialEditComponent_form_26_div_14_li_4_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r105.partNumber.errors == null ? null : ctx_r105.partNumber.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r105.partNumber.errors == null ? null : ctx_r105.partNumber.errors.minlength);
} }
function MaterialEditComponent_form_26_div_23_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter name of the Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_26_div_23_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Material Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_26_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_26_div_23_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MaterialEditComponent_form_26_div_23_li_4_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r106.boForm.get("description").errors == null ? null : ctx_r106.boForm.get("description").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r106.boForm.get("description").errors == null ? null : ctx_r106.boForm.get("description").errors.minlength);
} }
function MaterialEditComponent_form_26_nb_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const option_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r118.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", option_r118.name, " ");
} }
function MaterialEditComponent_form_26_div_35_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter vendor of the Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_26_div_35_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Vendor should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_26_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_26_div_35_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MaterialEditComponent_form_26_div_35_li_4_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r110.boForm.get("vendor").errors == null ? null : ctx_r110.boForm.get("vendor").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r110.boForm.get("vendor").errors == null ? null : ctx_r110.boForm.get("vendor").errors.minlength);
} }
function MaterialEditComponent_form_26_div_45_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MaterialEditComponent_form_26_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MaterialEditComponent_form_26_div_45_li_3_Template, 3, 0, "li", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r111.boForm.get("price").errors == null ? null : ctx_r111.boForm.get("price").errors.required);
} }
function MaterialEditComponent_form_26_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, MaterialEditComponent_form_26_div_7_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Part Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, MaterialEditComponent_form_26_div_14_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "(optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, MaterialEditComponent_form_26_div_23_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "input", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function MaterialEditComponent_form_26_Template_input_input_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r122.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "nb-autocomplete", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedChange", function MaterialEditComponent_form_26_Template_nb_autocomplete_selectedChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r123); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r124.onSelectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, MaterialEditComponent_form_26_nb_option_33_Template, 2, 2, "nb-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, MaterialEditComponent_form_26_div_35_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "\u20B9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, MaterialEditComponent_form_26_div_45_Template, 4, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](32);
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx_r76.boForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r76.boForm.get("name").invalid && (ctx_r76.boForm.get("name").dirty || ctx_r76.boForm.get("name").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r76.boForm.get("name").invalid && (ctx_r76.boForm.get("name").dirty || ctx_r76.boForm.get("name").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r76.partNumber.invalid && (ctx_r76.partNumber.dirty || ctx_r76.partNumber.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r76.partNumber.invalid && (ctx_r76.partNumber.dirty || ctx_r76.partNumber.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r76.boForm.get("description").invalid && (ctx_r76.boForm.get("description").dirty || ctx_r76.boForm.get("description").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r76.boForm.get("description").invalid && (ctx_r76.boForm.get("description").dirty || ctx_r76.boForm.get("description").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r76.boForm.get("vendor").invalid && (ctx_r76.boForm.get("vendor").dirty || ctx_r76.boForm.get("vendor").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nbAutocomplete", _r108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](34, 20, ctx_r76.filteredOptions$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r76.boForm.get("vendor").invalid && (ctx_r76.boForm.get("vendor").dirty || ctx_r76.boForm.get("vendor").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r76.boForm.get("price").invalid && (ctx_r76.boForm.get("price").dirty || ctx_r76.boForm.get("price").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r76.boForm.get("price").invalid && (ctx_r76.boForm.get("price").dirty || ctx_r76.boForm.get("price").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r76.boForm.get("price").invalid && (ctx_r76.boForm.get("price").dirty || ctx_r76.boForm.get("price").touched));
} }
class MaterialEditComponent {
    constructor(fb, db, toast, route, location) {
        this.fb = fb;
        this.db = db;
        this.toast = toast;
        this.route = route;
        this.location = location;
        this.option = 'Raw Material';
        this.validity = false;
        this.rmName = '';
    }
    get rmCategory() {
        return this.rmForm.get('rmCategory');
    }
    get grade() {
        return this.rmForm.get('grade');
    }
    get color() {
        return this.rmForm.get('color');
    }
    get partNumber() {
        return this.boForm.get('partNumber');
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.selectedId = params.get('id');
            this.fetchObject();
        });
        this.boForm = this.fb.group({
            typeOfMaterial: ['Bought Out'],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            description: [''],
            partNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vendor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.rmForm = this.fb.group({
            typeOfMaterial: ['Raw Material'],
            name: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            rmCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            grade: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            color: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            vendor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.boForm.valueChanges.subscribe(() => {
            this.validity = this.boForm.valid;
        });
        this.rmForm.valueChanges.subscribe((data) => {
            this.validity = this.rmForm.valid;
            this.setName();
        });
        // AUTO COMPLETE
        this.db.getVendors().subscribe((data) => {
            this.options = data;
            // console.log(data);
        });
        this.filteredOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.options);
    }
    fetchObject() {
        if (this.selectedId) {
            this.selectedObject = this.db.getMaterial(this.selectedId);
            this.selectedObject.subscribe((data) => {
                if (data.typeOfMaterial === 'Raw Material') {
                    this.option = 'Raw Material';
                    this.rmForm.setValue({
                        typeOfMaterial: data.typeOfMaterial,
                        name: data.name,
                        rmCategory: data.rmCategory,
                        grade: data.grade,
                        color: data.color,
                        description: data.description,
                        vendor: data.vendor,
                        price: data.price
                    });
                }
                else if (data.typeOfMaterial === 'Bought Out') {
                    this.option = 'Bought Out';
                    this.boForm.setValue({
                        typeOfMaterial: data.typeOfMaterial,
                        name: data.name,
                        partNumber: data.partNumber,
                        description: data.description,
                        vendor: data.vendor,
                        price: data.price
                    });
                }
            });
        }
    }
    setName() {
        this.rmName = this.rmForm.get('rmCategory').value;
        if (this.rmForm.get('grade').value) {
            this.rmName = this.rmName + ' - ' + this.rmForm.get('grade').value;
        }
        if (this.rmForm.get('color').value) {
            this.rmName = this.rmName + ' - ' + this.rmForm.get('color').value;
        }
        if (this.rmForm.get('description').value) {
            this.rmName = this.rmName + ' (' + this.rmForm.get('description').value + ')';
        }
    }
    // AUTO COMPLETE
    onChange() {
        this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
    }
    getFilteredOptions(value) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(filterString => this.filter(filterString)));
    }
    filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(optionValue => optionValue.name.toLowerCase().includes(filterValue));
    }
    onSelectionChange($event) {
        this.filteredOptions$ = this.getFilteredOptions($event);
    }
    // ONSUBMIT
    onButtonClicked(clickedButton) {
        if (clickedButton === 'save') {
            if (this.option === 'Bought Out') {
                this.db.addMaterial(this.boForm.value, this.selectedId)
                    .then(() => {
                    this.toast.success('Material updated succesfully');
                    this.boForm.reset();
                    this.rmForm.reset();
                    if (this.selectedId) {
                        this.location.back();
                    }
                });
            }
            else {
                this.rmForm.value.name = this.rmName;
                this.db.addMaterial(this.rmForm.value, this.selectedId)
                    .then(() => {
                    this.toast.success('Material updated succesfully');
                    this.boForm.reset();
                    this.rmForm.reset();
                    if (this.selectedId) {
                        this.location.back();
                    }
                });
            }
        }
    }
}
MaterialEditComponent.??fac = function MaterialEditComponent_Factory(t) { return new (t || MaterialEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ui_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"])); };
MaterialEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MaterialEditComponent, selectors: [["app-material-edit"]], viewQuery: function MaterialEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.input = _t.first);
    } }, decls: 28, vars: 5, consts: [["for", "inventory", 1, "label"], [1, "form-group", "col-md-6"], [1, "row", "radio-section"], [1, "col", "radio-option"], ["type", "radio", "id", "RM", "name", "typeOfMaterial", "value", "Raw Material", "checked", "", 3, "ngModel", "ngModelChange"], ["for", "control_02", 1, "card", "radio-card"], ["src", "/assets/app/raw-material.svg", "alt", "Card image cap", 1, "card-img-top"], [1, "card-body"], [1, "card-title", "text-center", "label"], ["type", "radio", "id", "BO", "name", "typeOfMaterial", "value", "Bought Out", 3, "ngModel", "ngModelChange"], ["for", "control_01", 1, "card", "radio-card"], ["src", "/assets/app/bought-out.svg", "alt", "Card image cap", 1, ""], [3, "formGroup", 4, "ngIf"], [3, "status", "event"], [3, "formGroup"], [1, "form-group"], ["for", "name", 1, "label"], [1, "row"], [1, "col-md-6"], ["type", "text", "disabled", "", "nbInput", "", "fullWidth", "", "id", " name", 3, "ngModelOptions", "ngModel"], ["class", "col-md-6", 4, "ngIf"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "rmCategory", "id", "rmCategory", "placeholder", "eg. PP - PolyPropylene"], ["for", "grade", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "grade", "id", "grade", "placeholder", "eg. MI 3530"], ["for", "ncolorame", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "color", "id", "color", "placeholder", "eg. Natural"], ["for", "description", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "description", "id", "description", "placeholder", "eg. 35% Long Fiber glass filled"], ["type", "text", "nbInput", "", "fullWidth", "", "autocomplete", "off", "formControlName", "vendor", "id", "vendor", "placeholder", "eg. Reliance Industries", 3, "nbAutocomplete", "input"], ["autoInput", ""], [3, "selectedChange"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-2", "col-5"], ["nbPrefix", "", "id", "basic-addon1", 1, "input-group-text"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "price", "id", "price", "placeholder", "eg. 120", 1, "form-control"], [1, "error"], [4, "ngIf"], [3, "value"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "name", "id", "name"], ["for", "partNumber", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "partNumber", "id", "partNumber"]], template: function MaterialEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Material Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Type of material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MaterialEditComponent_Template_input_ngModelChange_11_listener($event) { return ctx.option = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Polymer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MaterialEditComponent_Template_input_ngModelChange_19_listener($event) { return ctx.option = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Bought Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, MaterialEditComponent_form_25_Template, 60, 29, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, MaterialEditComponent_form_26_Template, 46, 22, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "ui-form-footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("event", function MaterialEditComponent_Template_ui_form_footer_event_27_listener($event) { return ctx.onButtonClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "Raw Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "Bought Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("status", ctx.validity);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_9__["FormFooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbFormFieldComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbPrefixDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFscy9tYXRlcmlhbC1lZGl0L21hdGVyaWFsLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MaterialEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-material-edit',
                templateUrl: './material-edit.component.html',
                styleUrls: ['./material-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }, { type: _ui_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoInput']
        }] }); })();


/***/ }),

/***/ "./src/app/materials/material-list/material-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/materials/material-list/material-list.component.ts ***!
  \********************************************************************/
/*! exports provided: MaterialListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialListComponent", function() { return MaterialListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/list-view/list-view.component */ "./src/app/ui/list-view/list-view.component.ts");






class MaterialListComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.sort = '1';
        this.data = [];
    }
    ngOnInit() {
        this.db.getMaterials().subscribe((data) => {
            this.data = data;
        });
    }
    onItemSelected(item) {
        this.router.navigate([`/materials/${item.id}`]);
        // this.router.navigate([`/materials/${product.id}`]);
    }
}
MaterialListComponent.??fac = function MaterialListComponent_Factory(t) { return new (t || MaterialListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MaterialListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MaterialListComponent, selectors: [["app-material-list"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-4"], ["nbButton", "", "size", "small", "routerLink", "/materials/new", "status", "primary"], [1, "col-6"], ["icon", "search-outline"], ["icon", "power-outline"], ["icon", "person-outline"], ["icon", "home-outline"], [3, "list", "onclick"]], template: function MaterialListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "New Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nb-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "nb-action", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nb-action", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "nb-action", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "nb-action", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ui-list-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onclick", function MaterialListComponent_Template_ui_list_view_onclick_10_listener($event) { return ctx.onItemSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx.data);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFscy9tYXRlcmlhbC1saXN0L21hdGVyaWFsLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MaterialListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-material-list',
                templateUrl: './material-list.component.html',
                styleUrls: ['./material-list.component.scss']
            }]
    }], function () { return [{ type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/moulds/mould-edit/mould-edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/moulds/mould-edit/mould-edit.component.ts ***!
  \***********************************************************/
/*! exports provided: MouldEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouldEditComponent", function() { return MouldEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _ui_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../ui/toast.service */ "./src/app/ui/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/form-footer/form-footer.component */ "./src/app/ui/form-footer/form-footer.component.ts");










function MouldEditComponent_div_11_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter code of the Mould");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_11_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Mould Code should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MouldEditComponent_div_11_li_3_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MouldEditComponent_div_11_li_4_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r168.code.errors == null ? null : ctx_r168.code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r168.code.errors == null ? null : ctx_r168.code.errors.minlength);
} }
function MouldEditComponent_div_18_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter name of the Vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_18_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Mould Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MouldEditComponent_div_18_li_3_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MouldEditComponent_div_18_li_4_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r169.name.errors == null ? null : ctx_r169.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r169.name.errors == null ? null : ctx_r169.name.errors.minlength);
} }
function MouldEditComponent_div_26_div_6_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a material.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_26_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "material should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_26_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MouldEditComponent_div_26_div_6_li_3_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MouldEditComponent_div_26_div_6_li_4_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r180.material.errors == null ? null : ctx_r180.material.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r180.material.errors == null ? null : ctx_r180.material.errors.minlength);
} }
function MouldEditComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, MouldEditComponent_div_26_div_6_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r170.material.invalid && (ctx_r170.material.dirty || ctx_r170.material.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r170.material.invalid && (ctx_r170.material.dirty || ctx_r170.material.touched));
} }
function MouldEditComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "div", 1);
} }
function MouldEditComponent_div_48_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_48_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MouldEditComponent_div_48_li_3_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MouldEditComponent_div_48_li_4_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r172.name.errors == null ? null : ctx_r172.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r172.name.errors == null ? null : ctx_r172.name.errors.minlength);
} }
function MouldEditComponent_div_118_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_118_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MouldEditComponent_div_118_li_3_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, MouldEditComponent_div_118_li_4_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r173.name.errors == null ? null : ctx_r173.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r173.name.errors == null ? null : ctx_r173.name.errors.minlength);
} }
function MouldEditComponent_div_128_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a cycle Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MouldEditComponent_div_128_li_3_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r174.cycleTime.errors == null ? null : ctx_r174.cycleTime.errors.required);
} }
function MouldEditComponent_div_129_div_9_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a cycle Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function MouldEditComponent_div_129_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, MouldEditComponent_div_129_div_9_li_3_Template, 3, 0, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r188.cycleTime.errors == null ? null : ctx_r188.cycleTime.errors.required);
} }
const _c0 = function () { return { standalone: true }; };
function MouldEditComponent_div_129_Template(rf, ctx) { if (rf & 1) {
    const _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Shot weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "nb-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function MouldEditComponent_div_129_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r191); const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r190.shotWt = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, MouldEditComponent_div_129_div_9_Template, 4, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r175.cycleTime.invalid && (ctx_r175.cycleTime.dirty || ctx_r175.cycleTime.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r175.shotWt)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r175.cycleTime.invalid && (ctx_r175.cycleTime.dirty || ctx_r175.cycleTime.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r175.cycleTime.invalid && (ctx_r175.cycleTime.dirty || ctx_r175.cycleTime.touched));
} }
class MouldEditComponent {
    constructor(fb, db, toast, route, location) {
        this.fb = fb;
        this.db = db;
        this.toast = toast;
        this.route = route;
        this.location = location;
        this.validity = true;
        this.option = 'FG';
    }
    // GETTERS AND SETTERS
    get name() {
        return this.form.get('name');
    }
    get code() {
        return this.form.get('code');
    }
    get phone() {
        return this.form.get('phone');
    }
    get email() {
        return this.form.get('email');
    }
    get cycleTime() {
        return this.form.get('cycleTime');
    }
    get typeOfMould() {
        return this.form.get('typeOfMould');
    }
    get material() {
        return this.form.get('material');
    }
    get childpart() {
        return this.form.get('childpart');
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.selectedId = params.get('id');
            this.fetchObject();
        });
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            cycleTime: [''],
            inventoryType: [this.option],
            material: [''],
            typeOfMould: ['mould'],
            dimensions: this.fb.group({
                length: [''],
                width: [''],
                height: ['']
            }),
            childpart: this.fb.array([])
        });
        this.form.valueChanges.subscribe((data) => {
            this.validity = this.form.valid;
        });
    }
    fetchObject() {
        if (this.selectedId) {
            this.selectedObject = this.db.getMould(this.selectedId);
            this.selectedObject.subscribe((data) => {
                this.form.setValue({
                    name: data.name,
                    code: data.code,
                    cycleTime: data.cycleTime,
                    typeOfMould: data.typeOfMould,
                    dimensions: data.dimensions
                });
                if (data.typeOfMould === 'mould') {
                    this.shotWt = data.shotWt;
                }
            });
        }
    }
    addChildpart() {
        const cp = this.fb.group({
            partName: [],
            partNumber: [],
            quantity: []
        });
        this.childpart.push(cp);
    }
    deleteChildpart(i) {
        this.childpart.removeAt(i);
    }
    // ONSUBMIT
    onButtonClicked(clickedButton) {
        if (clickedButton === 'save') {
            let data;
            data = this.form.value;
            if (this.form.value.typeOfMould === 'mould') {
                data.shotWt = this.shotWt;
            }
            this.db.addMould(data, this.selectedId)
                .then(() => {
                this.toast.success('Mould updated succesfully');
                this.form.reset();
                this.shotWt = null;
                if (this.selectedId) {
                    this.location.back();
                }
            });
            // this.toast.success();
            // if (this.option === 'Bought Out') {
            //   this.db.addMaterial(this.boForm.value)
            //     .then(() => {
            //       this.toast.success('Material updated succesfully');
            //       this.boForm.reset();
            //       this.rmForm.reset();
            //     });
            // } else {
            //   this.rmForm.value.name = this.rmName;
            //   this.db.addMaterial(this.rmForm.value)
            //     .then(() => {
            //       this.toast.success('Material updated succesfully');
            //       this.boForm.reset();
            //       this.rmForm.reset();
            //     });
            // }
        }
    }
}
MouldEditComponent.??fac = function MouldEditComponent_Factory(t) { return new (t || MouldEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
MouldEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MouldEditComponent, selectors: [["app-mould-edit"]], decls: 136, vars: 30, consts: [[3, "formGroup"], [1, "form-group"], ["for", "code", 1, "label"], [1, "row"], [1, "col-md-6"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "code", "id", "code", "placeholder", "eg. MAT-M-233"], ["class", "col-md-6", 4, "ngIf"], ["for", "name", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "name", "id", "name", "placeholder", "eg. GB LHD"], ["expanded", ""], ["class", "form-group", 4, "ngIf"], ["formGroupName", "material", 1, "form-group"], [1, "col-md-12"], ["type", "number", "nbInput", "", "fullWidth", "", "id", "make", "placeholder", "Nut insert"], [1, "col-2"], [2, "text-align", "center"], ["type", "number", "nbInput", "", "fullWidth", "", "id", "make", "placeholder", "4"], [1, "secondary"], [1, "form-group", "col-md-6"], ["for", "typeOfMould", 1, "label"], [1, "row", "radio-section"], [1, "col", "radio-option"], ["type", "radio", "id", "mould", "formControlName", "typeOfMould", "value", "mould"], ["for", "control_01", 1, "card", "radio-card"], ["src", "/assets/app/moulding.svg", "alt", "Card image cap", 1, ""], [1, "card-body"], [1, "card-title", "text-center", "label"], ["type", "radio", "id", "fixture", "formControlName", "typeOfMould", "value", "fixture", "checked", ""], ["for", "control_02", 1, "card", "radio-card"], ["src", "/assets/app/welding.svg", "alt", "Card image cap", 1, "card-img-top"], ["formGroupName", "dimensions", 1, "form-group"], [1, "col-4"], ["type", "number", "formControlName", "length", "nbInput", "", "fullWidth", "", "id", "make"], ["nbSuffix", ""], [1, "label"], [2, "position", "absolute", "top", "50%"], ["type", "number", "formControlName", "width", "nbInput", "", "fullWidth", "", "id", "make"], ["type", "number", "formControlName", "height", "nbInput", "", "fullWidth", "", "id", "make"], ["for", "cycleTime", 1, "label"], [1, "col-md-2", "col-5"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "cycleTime", "id", "cycleTime", 1, "form-control"], ["nbSuffix", "", "id", "basic-addon1", 1, "input-group-text"], [3, "status", "event"], [1, "error"], [4, "ngIf"], ["for", "Material", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "material", "id", "material", "placeholder", "eg. PPCP"], ["type", "number", "nbInput", "", "fullWidth", "", "id", "cycleTime", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"]], template: function MouldEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Mould Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, MouldEditComponent_div_11_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, MouldEditComponent_div_18_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "nb-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "nb-accordion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "Input Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, MouldEditComponent_div_26_Template, 7, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, MouldEditComponent_div_27_Template, 1, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Child parts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "part name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, MouldEditComponent_div_48_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "+ Add Child Part");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "nb-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Operational Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](61, "Mould/Fixture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](67, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Mould");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](78, "Fixture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Dimensions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "length");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](91, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](93, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](94, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](96, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](97, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](101, "width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](103, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](105, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](108, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](113, "height");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](114, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](116, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](117, "cm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](118, MouldEditComponent_div_118_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Cycle time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](124, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](125, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](128, MouldEditComponent_div_128_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](129, MouldEditComponent_div_129_Template, 10, 8, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](130, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](131, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](132, "Maintainence Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, " Item Content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "ui-form-footer", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("event", function MouldEditComponent_Template_ui_form_footer_event_135_listener($event) { return ctx.onButtonClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.code.invalid && (ctx.code.dirty || ctx.code.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.name.invalid && (ctx.code.dirty || ctx.code.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "FG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "WIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.cycleTime.invalid && (ctx.cycleTime.dirty || ctx.cycleTime.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.cycleTime.invalid && (ctx.cycleTime.dirty || ctx.cycleTime.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cycleTime.invalid && (ctx.cycleTime.dirty || ctx.cycleTime.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.form.value.typeOfMould === "mould");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("status", ctx.validity);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAccordionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbAccordionItemBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbFormFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSuffixDirective"], _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__["FormFooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.radio-card[_ngcontent-%COMP%] {\n  height: 108px;\n  width: 108px;\n  border-radius: 8px;\n  background-color: #444444;\n}\n\n.radio-card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 4px;\n  height: 48px;\n  -webkit-filter: grayscale(100);\n          filter: grayscale(100);\n}\n\n.radio-section[_ngcontent-%COMP%] {\n  margin: 0 1px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0px 0;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:not(:disabled)    ~ .radio-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:disabled    ~ .radio-card[_ngcontent-%COMP%] {\n  color: #bcc2bf;\n  border-color: #bcc2bf;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n\n.radio[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 20px;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .radio-card[_ngcontent-%COMP%] {\n  background: #ffc107;\n  box-shadow: 0px 0px 20px #ffc107;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .radio-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: white;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .radio-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-filter: grayscale(0);\n          filter: grayscale(0);\n}\n\n.radio-option[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW91bGRzL21vdWxkLWVkaXQvRDpcXERldmVsb3BtZW50XFxBbmd1bGFyXFxhbmdsZS9zcmNcXGFwcFxcbW91bGRzXFxtb3VsZC1lZGl0XFxtb3VsZC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb3VsZHMvbW91bGQtZWRpdC9tb3VsZC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7QUNJRjs7QURGQTtFQUNFLGFBQUE7QUNLRjs7QURKRTtFQUNFLGVBQUE7QUNNSjs7QURKRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNNSjs7QURIQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDTUY7O0FESkE7RUFDRSxtQkFBQTtFQUVBLGdDQUFBO0FDTUY7O0FETEU7RUFDRSxZQUFBO0FDT0o7O0FETEU7RUFDRSw0QkFBQTtVQUFBLG9CQUFBO0FDT0o7O0FEQUE7RUFDRSxrQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvbW91bGRzL21vdWxkLWVkaXQvbW91bGQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnJhZGlvLWNhcmQge1xuICBoZWlnaHQ6IDEwOHB4O1xuICB3aWR0aDogMTA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcbn1cbi5yYWRpby1jYXJkID4gaW1nIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogNHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCk7XG59XG4ucmFkaW8tc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAxcHg7XG59XG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMHB4IDA7XG59XG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBkaXNwbGF5OiBub25lO1xuICAmOm5vdCg6ZGlzYWJsZWQpIH4gLnJhZGlvLWNhcmQge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmOmRpc2FibGVkIH4gLnJhZGlvLWNhcmQge1xuICAgIGNvbG9yOiBoc2xhKDE1MCwgNSUsIDc1JSwgMSk7XG4gICAgYm9yZGVyLWNvbG9yOiBoc2xhKDE1MCwgNSUsIDc1JSwgMSk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG59XG4ucmFkaW8ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMjBweDtcbn1cbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLnJhZGlvLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xuICAvLyBjb2xvcjogaHNsYSgyMTUsIDAlLCAxMDAlLCAxKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4ICNmZmMxMDc7XG4gIC5sYWJlbCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIGltZyB7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gIH1cbn1cbnAge1xuICAvLyBudC13ZWlnaHQ6IDkwMDtcbn1cblxuLnJhZGlvLW9wdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsInVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnJhZGlvLWNhcmQge1xuICBoZWlnaHQ6IDEwOHB4O1xuICB3aWR0aDogMTA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcbn1cblxuLnJhZGlvLWNhcmQgPiBpbWcge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwKTtcbn1cblxuLnJhZGlvLXNlY3Rpb24ge1xuICBtYXJnaW46IDAgMXB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMHB4IDA7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmlucHV0W3R5cGU9cmFkaW9dOm5vdCg6ZGlzYWJsZWQpIH4gLnJhZGlvLWNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpkaXNhYmxlZCB+IC5yYWRpby1jYXJkIHtcbiAgY29sb3I6ICNiY2MyYmY7XG4gIGJvcmRlci1jb2xvcjogI2JjYzJiZjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnJhZGlvIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDIwcHg7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAucmFkaW8tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmMxMDc7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAjZmZjMTA3O1xufVxuaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5yYWRpby1jYXJkIC5sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAucmFkaW8tY2FyZCBpbWcge1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcbn1cblxuLnJhZGlvLW9wdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MouldEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mould-edit',
                templateUrl: './mould-edit.component.html',
                styleUrls: ['./mould-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }, { type: _ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/moulds/mould-list/mould-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/moulds/mould-list/mould-list.component.ts ***!
  \***********************************************************/
/*! exports provided: MouldListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouldListComponent", function() { return MouldListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/list-view/list-view.component */ "./src/app/ui/list-view/list-view.component.ts");






class MouldListComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.sort = '1';
        this.data = [];
    }
    ngOnInit() {
        this.db.getMoulds().subscribe((data) => {
            this.data = data;
        });
    }
    onItemSelected(item) {
        console.log(item.id);
        this.router.navigate([`/moulds/${item.id}`]);
        // this.router.navigate([`/materials/${product.id}`]);
    }
}
MouldListComponent.??fac = function MouldListComponent_Factory(t) { return new (t || MouldListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MouldListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: MouldListComponent, selectors: [["app-mould-list"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-4"], ["nbButton", "", "size", "small", "routerLink", "/moulds/new", "status", "primary"], [1, "col-6"], ["icon", "search-outline"], ["icon", "power-outline"], ["icon", "person-outline"], ["icon", "home-outline"], [3, "list", "onclick"]], template: function MouldListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "New Moulds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nb-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "nb-action", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nb-action", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "nb-action", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "nb-action", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ui-list-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onclick", function MouldListComponent_Template_ui_list_view_onclick_10_listener($event) { return ctx.onItemSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx.data);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdWxkcy9tb3VsZC1saXN0L21vdWxkLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](MouldListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mould-list',
                templateUrl: './mould-list.component.html',
                styleUrls: ['./mould-list.component.scss']
            }]
    }], function () { return [{ type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PagesComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PagesComponent.??fac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 17, vars: 0, consts: [[1, "menu"], ["routerLink", "/parts", "routerLinkActive", "active"], ["routerLink", "/customers"], ["routerLink", "/vendors"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Part");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Materials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Machine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Mould / Fixture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Employees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Vendors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Workflows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".menu[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 160px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  padding-top: 20px;\n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n}\n\n.menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f1f1f1;\n}\n\n@media screen and (max-width: 767.98px) {\n  .menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvRDpcXERldmVsb3BtZW50XFxBbmd1bGFyXFxhbmdsZS9zcmNcXGFwcFxccGFnZXNcXHBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDRixZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENFO0VBQ0UsY0FBQTtBQ0VKOztBREVBO0VBQ0E7SUFDRSxhQUFBO0VDQ0E7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnV7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgd2lkdGg6IDE2MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7IFxuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubWVudSBhIHtcbiAgICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubWVudSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2YxZjFmMTtcbiAgfVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4ubWVudXtcbiAgZGlzcGxheTogbm9uZTtcbn1cbn0iLCIubWVudSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDE2MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLm1lbnUgYSB7XG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzgxODE4MTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tZW51IGE6aG92ZXIge1xuICBjb2xvcjogI2YxZjFmMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLm1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                templateUrl: './pages.component.html',
                styleUrls: ['./pages.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/parts/part-edit/part-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/parts/part-edit/part-edit.component.ts ***!
  \********************************************************/
/*! exports provided: PartEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartEditComponent", function() { return PartEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _ui_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../ui/toast.service */ "./src/app/ui/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/form-footer/form-footer.component */ "./src/app/ui/form-footer/form-footer.component.ts");












const _c0 = ["autoInput"];
function PartEditComponent_div_11_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a name.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_11_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_11_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PartEditComponent_div_11_li_4_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.name.errors == null ? null : ctx_r14.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r14.name.errors == null ? null : ctx_r14.name.errors.minlength);
} }
function PartEditComponent_div_18_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a code.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_18_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "code should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_18_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PartEditComponent_div_18_li_4_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r15.code.errors == null ? null : ctx_r15.code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r15.code.errors == null ? null : ctx_r15.code.errors.minlength);
} }
function PartEditComponent_div_27_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a description.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_27_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "description should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_27_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PartEditComponent_div_27_li_4_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.description.errors == null ? null : ctx_r16.description.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r16.description.errors == null ? null : ctx_r16.description.errors.minlength);
} }
function PartEditComponent_nb_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const option_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r38.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", option_r38.name, " ");
} }
function PartEditComponent_div_39_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a description.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_39_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "description should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_39_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PartEditComponent_div_39_li_4_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r20.description.errors == null ? null : ctx_r20.description.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r20.description.errors == null ? null : ctx_r20.description.errors.minlength);
} }
function PartEditComponent_div_49_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_49_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r21.partWeight.errors == null ? null : ctx_r21.partWeight.errors.required);
} }
function PartEditComponent_div_59_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_59_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r22.shotWeight.errors == null ? null : ctx_r22.shotWeight.errors.required);
} }
function PartEditComponent_div_69_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_69_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r23.cycleTime.errors == null ? null : ctx_r23.cycleTime.errors.required);
} }
function PartEditComponent_div_77_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_77_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r24.cavity.errors == null ? null : ctx_r24.cavity.errors.required);
} }
function PartEditComponent_div_105_nb_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const option_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", option_r49.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", option_r49.name, " ");
} }
function PartEditComponent_div_105_div_11_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a customer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_105_div_11_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "customer should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_105_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_105_div_11_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PartEditComponent_div_105_div_11_li_4_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r48.customer.errors == null ? null : ctx_r48.customer.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r48.customer.errors == null ? null : ctx_r48.customer.errors.minlength);
} }
function PartEditComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 63, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function PartEditComponent_div_105_Template_input_input_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r52.onDataChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "nb-autocomplete", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedChange", function PartEditComponent_div_105_Template_nb_autocomplete_selectedChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r54.onSelectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, PartEditComponent_div_105_nb_option_9_Template, 2, 2, "nb-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, PartEditComponent_div_105_div_11_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](8);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r25.description.invalid && (ctx_r25.description.dirty || ctx_r25.description.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nbAutocomplete", _r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](10, 5, ctx_r25.customersFiltered$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r25.customer.invalid && (ctx_r25.customer.dirty || ctx_r25.customer.touched));
} }
function PartEditComponent_div_106_div_6_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter next Operation.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_106_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "next Operation should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_106_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_106_div_6_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PartEditComponent_div_106_div_6_li_4_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r55.nextOperation.errors == null ? null : ctx_r55.nextOperation.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r55.nextOperation.errors == null ? null : ctx_r55.nextOperation.errors.minlength);
} }
function PartEditComponent_div_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Next Operation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, PartEditComponent_div_106_div_6_Template, 5, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r26.nextOperation.invalid && (ctx_r26.nextOperation.dirty || ctx_r26.nextOperation.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r26.nextOperation.invalid && (ctx_r26.nextOperation.dirty || ctx_r26.nextOperation.touched));
} }
function PartEditComponent_div_116_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_116_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r27.price.errors == null ? null : ctx_r27.price.errors.required);
} }
function PartEditComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Drawing Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx_r28.customer.invalid && (ctx_r28.customer.dirty || ctx_r28.customer.touched));
} }
function PartEditComponent_div_131_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter next Operation.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_131_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "next Operation should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_131_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_131_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PartEditComponent_div_131_li_4_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r29.nextOperation.errors == null ? null : ctx_r29.nextOperation.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r29.nextOperation.errors == null ? null : ctx_r29.nextOperation.errors.minlength);
} }
function PartEditComponent_div_140_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter next Operation.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_140_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "next Operation should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function PartEditComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, PartEditComponent_div_140_li_3_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, PartEditComponent_div_140_li_4_Template, 3, 0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r31.nextOperation.errors == null ? null : ctx_r31.nextOperation.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r31.nextOperation.errors == null ? null : ctx_r31.nextOperation.errors.minlength);
} }
class PartEditComponent {
    constructor(fb, db, toast, route, location) {
        this.fb = fb;
        this.db = db;
        this.toast = toast;
        this.route = route;
        this.location = location;
        this.option = 'FG';
        this.validity = true;
        this.options = [];
    }
    get name() {
        return this.form.get('name');
    }
    get description() {
        return this.form.get('description');
    }
    get code() {
        return this.form.get('code');
    }
    get partWeight() {
        return this.form.get('partWeight');
    }
    get shotWeight() {
        return this.form.get('shotWeight');
    }
    get cycleTime() {
        return this.form.get('cycleTime');
    }
    get cavity() {
        return this.form.get('cavity');
    }
    get number() {
        return this.form.get('number');
    }
    get inventoryType() {
        return this.form.get('inventoryType');
    }
    get customer() {
        return this.form.get('customer');
    }
    get nextOperation() {
        return this.form.get('nextOperation');
    }
    get price() {
        return this.form.get('price');
    }
    get material() {
        return this.form.get('material');
    }
    get rm_name() {
        return this.form.get('rm_name');
    }
    get tax_slab() {
        return this.form.get('tax_slab');
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.selectedId = params.get('id');
            this.fetchObject();
            // this.loadCustomersList();
        });
        this.loadRMlist();
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            description: [''],
            code: [''],
            partWeight: [],
            shotWeight: [],
            cycleTime: [],
            cavity: [],
            inventoryType: [this.option],
            customer: [''],
            nextOperation: [''],
            price: [],
            rm_name: [],
            tax_slab: [],
        });
        this.form.valueChanges.subscribe(() => {
            this.validity = this.form.valid;
        });
    }
    loadRMlist() {
        this.db.getMaterials()
            .subscribe((list) => {
            this.filteredOptions$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(list);
            this.options = list;
        });
    }
    // private loadCustomersList() {
    //   this.db.getCustomers()
    //     .subscribe((list: any) => {
    //       this.customersFiltered$ = of(list);
    //     })
    // }
    filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter((optionValue) => optionValue.name.toLowerCase().includes(filterValue));
    }
    getFilteredOptions(value) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(filterString => this.filter(filterString))).subscribe((data) => console.log(data));
        console.log(value);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(filterString => this.filter(filterString)));
    }
    onChange() {
        this.form.controls['customer'].setValue('');
        this.form.controls['nextOperation'].setValue('');
    }
    onDataChange() {
        console.log(this.input.nativeElement.value);
        this.filteredOptions$.subscribe((data) => {
            console.log(data);
        });
        this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
    }
    onSelectionChange($event) {
        this.filteredOptions$ = this.getFilteredOptions($event);
    }
    fetchObject() {
        if (this.selectedId) {
            console.log(this.selectedObject);
            this.selectedObject = this.db.getPart(this.selectedId);
            this.selectedObject.subscribe((data) => {
                this.form.patchValue({
                    name: data.name,
                    description: data.description,
                    code: data.code,
                    partWeight: data.partWeight,
                    shotWeight: data.shotWeight,
                    cycleTime: data.cycleTime,
                    cavity: data.cavity,
                    inventoryType: data.inventoryType,
                    customer: data.customer,
                    nextOperation: data.nextOperation,
                    price: data.price,
                    rm_name: data.rm_name,
                    tax_slab: data.tax_slab,
                });
            });
        }
    }
    // ONSUBMIT
    onButtonClicked(clickedButton) {
        if (clickedButton === 'save') {
            this.db.addPart(this.form.value, this.selectedId)
                .then(() => {
                this.toast.success('Part updated succesfully');
                this.form.reset();
                if (this.selectedId) {
                    this.location.back();
                }
            });
        }
    }
}
PartEditComponent.??fac = function PartEditComponent_Factory(t) { return new (t || PartEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ui_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"])); };
PartEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PartEditComponent, selectors: [["app-part-edit"]], viewQuery: function PartEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.input = _t.first);
    } }, decls: 166, vars: 55, consts: [[3, "formGroup"], [1, "form-group"], ["for", "name", 1, "label"], [1, "row"], [1, "col-md-6"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "name", "id", "name", "placeholder", "eg. GB LHD Reservoir"], ["class", "col-md-6", 4, "ngIf"], ["for", "code", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "code", "id", "code", "placeholder", "eg. 79001"], ["for", "description", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "description", "id", "description", "placeholder", "eg. Project GB"], ["for", "rm_name", 1, "label"], ["type", "text", "autocomplete", "off", "nbInput", "", "fullWidth", "", "formControlName", "rm_name", "id", "rm_name", "placeholder", "eg. PPCP MI3530", 3, "nbAutocomplete", "input"], ["autoInput", ""], [3, "selectedChange"], ["auto", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "partWeight", 1, "label"], [1, "col-md-3", "col-5"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "partWeight", "id", "partWeight", "placeholder", "eg. 92.50", 1, "form-control"], ["nbSuffix", "", "id", "basic-addon1", 1, "input-group-text"], ["for", "weight", 1, "label"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "shotWeight", "id", "shotWeight", "placeholder", "eg. 92.50", 1, "form-control"], ["for", "cycleTime", 1, "label"], [1, "col-md-2", "col-5"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "cycleTime", "id", "cycleTime", "placeholder", "eg. 120", 1, "form-control"], ["for", "cavity", 1, "label"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "cavity", "id", "cavity", "placeholder", "eg. 120", 1, "form-control"], [1, "form-group", "col-md-6"], ["for", "inventoryType", 1, "label"], [1, "row", "radio-section"], [1, "col", "radio-option"], ["type", "radio", "id", "WIP", "formControlName", "inventoryType", "value", "WIP", 3, "ngModel", "ngModelChange", "change"], ["for", "control_01", 1, "card", "radio-card"], ["src", "/assets/app/wip.svg", "alt", "Card image cap", 1, ""], [1, "card-body"], [1, "card-title", "text-center", "label"], ["type", "radio", "id", "FG", "formControlName", "inventoryType", "value", "FG", "checked", "", 3, "ngModel", "ngModelChange", "change"], ["for", "control_02", 1, "card", "radio-card"], ["src", "/assets/app/fg.svg", "alt", "Card image cap", 1, "card-img-top"], ["expanded", ""], ["class", "form-group", 4, "ngIf"], ["for", "price", 1, "label"], ["nbPrefix", "", "id", "basic-addon1", 1, "input-group-text"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "price", "id", "price", "placeholder", "eg. 120", 1, "form-control"], ["for", "nextOperation", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "nextOperation", "id", "nextOperation", "placeholder", "eg. 101DA514"], ["nbInput", "", "placeholder", "Pick Date", 3, "nbDatepicker"], ["dateTimePicker", ""], ["class", "cola-md-6", 4, "ngIf"], ["for", "tax_slab", 1, "label"], ["placeholder", "eg. 0%", "formControlName", "tax_slab"], ["disabled", ""], ["value", "0"], ["value", "5"], ["value", "12"], ["value", "18"], ["value", "28"], [3, "status", "event"], [1, "error"], [4, "ngIf"], [3, "value"], ["for", "customer", 1, "label"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "rm_name", "id", "rm_name", "placeholder", "eg-Mando", 3, "nbAutocomplete", "input"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "nextOperation", "id", "nextOperation", "placeholder", "eg. Trimming"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "customer", "id", "customer", "placeholder", "eg. 101DA514"], [1, "cola-md-6"]], template: function PartEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Part Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Part Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, PartEditComponent_div_11_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Part Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, PartEditComponent_div_18_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "(optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, PartEditComponent_div_27_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Raw Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function PartEditComponent_Template_input_input_33_listener() { return ctx.onDataChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "nb-autocomplete", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedChange", function PartEditComponent_Template_nb_autocomplete_selectedChange_35_listener($event) { return ctx.onSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](37, PartEditComponent_nb_option_37_Template, 2, 2, "nb-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, PartEditComponent_div_39_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Part Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, PartEditComponent_div_49_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Shot Weight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](59, PartEditComponent_div_59_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Cycle Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](66, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](69, PartEditComponent_div_69_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72, "Cavity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](76, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](77, PartEditComponent_div_77_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, "Type of inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PartEditComponent_Template_input_ngModelChange_84_listener($event) { return ctx.option = $event; })("change", function PartEditComponent_Template_input_change_84_listener() { return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](86, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89, "WIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function PartEditComponent_Template_input_ngModelChange_92_listener($event) { return ctx.option = $event; })("change", function PartEditComponent_Template_input_change_92_listener() { return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](94, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](95, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](97, "FG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "nb-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](100, "nb-accordion-item", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](101, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](102, "Sourcing Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](104, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](105, PartEditComponent_div_105_Template, 12, 7, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](106, PartEditComponent_div_106_Template, 7, 3, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](107, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](109, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](110, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](111, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](112, "nb-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](114, "\u20B9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](115, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](116, PartEditComponent_div_116_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](117, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](118, "nb-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](119, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](120, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](121, "Engineering details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](122, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](123, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](124, PartEditComponent_div_124_Template, 6, 2, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](125, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](126, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](127, "Latest Issue Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](128, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](129, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](130, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](131, PartEditComponent_div_131_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](132, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](133, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](134, "Latest Issue date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](135, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](136, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](137, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](138, "nb-datepicker", null, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](140, PartEditComponent_div_140_Template, 5, 2, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](141, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](142, "nb-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](143, "nb-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](144, "nb-accordion-item-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](145, "Part details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](146, "nb-accordion-item-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](147, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](148, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](149, "Select a Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](150, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](151, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](152, "nb-select", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](153, "nb-option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](154, "Select a Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](155, "nb-option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](156, "0%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](157, "nb-option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](158, "5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](159, "nb-option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](160, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](161, "nb-option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](162, "18%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](163, "nb-option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](164, "28%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](165, "ui-form-footer", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("event", function PartEditComponent_Template_ui_form_footer_event_165_listener($event) { return ctx.onButtonClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](36);
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.code.invalid && (ctx.code.dirty || ctx.code.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.code.invalid && (ctx.code.dirty || ctx.code.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.description.invalid && (ctx.description.dirty || ctx.description.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.description.invalid && (ctx.description.dirty || ctx.description.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.description.invalid && (ctx.description.dirty || ctx.description.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nbAutocomplete", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](38, 53, ctx.filteredOptions$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.description.invalid && (ctx.description.dirty || ctx.description.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.partWeight.invalid && (ctx.partWeight.dirty || ctx.partWeight.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.partWeight.invalid && (ctx.partWeight.dirty || ctx.partWeight.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.partWeight.invalid && (ctx.partWeight.dirty || ctx.partWeight.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.shotWeight.invalid && (ctx.shotWeight.dirty || ctx.shotWeight.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.shotWeight.invalid && (ctx.shotWeight.dirty || ctx.shotWeight.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.shotWeight.invalid && (ctx.shotWeight.dirty || ctx.shotWeight.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.cycleTime.invalid && (ctx.cycleTime.dirty || ctx.cycleTime.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.cycleTime.invalid && (ctx.cycleTime.dirty || ctx.cycleTime.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cycleTime.invalid && (ctx.cycleTime.dirty || ctx.cycleTime.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.cavity.invalid && (ctx.cavity.dirty || ctx.cavity.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.cavity.invalid && (ctx.cavity.dirty || ctx.cavity.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.option);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "FG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "WIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.price.invalid && (ctx.price.dirty || ctx.price.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.price.invalid && (ctx.price.dirty || ctx.price.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.price.invalid && (ctx.price.dirty || ctx.price.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.option == "FG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.nextOperation.invalid && (ctx.nextOperation.dirty || ctx.nextOperation.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.nextOperation.invalid && (ctx.nextOperation.dirty || ctx.nextOperation.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nbDatepicker", _r30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.nextOperation.invalid && (ctx.nextOperation.dirty || ctx.nextOperation.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.tax_slab.invalid && (ctx.tax_slab.dirty || ctx.tax_slab.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("status", ctx.validity);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAutocompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbFormFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSuffixDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAccordionComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAccordionItemComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAccordionItemHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbAccordionItemBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbPrefixDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDatepickerDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDatepickerComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"], _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_9__["FormFooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".form-group[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\nul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.radio-card[_ngcontent-%COMP%] {\n  height: 108px;\n  width: 108px;\n  border-radius: 8px;\n  background-color: #444444;\n}\n\n.radio-card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 4px;\n  height: 48px;\n  -webkit-filter: grayscale(100);\n          filter: grayscale(100);\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 0px 0;\n}\n\ninput[type=radio][_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:not(:disabled)    ~ .radio-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:disabled    ~ .radio-card[_ngcontent-%COMP%] {\n  color: #bcc2bf;\n  border-color: #bcc2bf;\n  box-shadow: none;\n  cursor: not-allowed;\n}\n\n.radio[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 20px;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .radio-card[_ngcontent-%COMP%] {\n  background: #ffc107;\n  box-shadow: 0px 0px 20px #ffc107;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .radio-card[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: white;\n}\n\ninput[type=radio][_ngcontent-%COMP%]:checked    + .radio-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-filter: grayscale(0);\n          filter: grayscale(0);\n}\n\n.radio-section[_ngcontent-%COMP%] {\n  margin: 0 1px;\n}\n\n.radio-option[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  background-color: rgba(226, 75, 75, 0.1);\n  border-left: 6px solid #e24b4b;\n  border-radius: 4px;\n  padding-left: 8px;\n}\n\n.error[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  line-height: 38px;\n}\n\n.error[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 38px;\n}\n\n@media only screen and (max-width: 767.95px) {\n  section[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .error[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydHMvcGFydC1lZGl0L0Q6XFxEZXZlbG9wbWVudFxcQW5ndWxhclxcYW5nbGUvc3JjXFxhcHBcXHBhcnRzXFxwYXJ0LWVkaXRcXHBhcnQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFydHMvcGFydC1lZGl0L3BhcnQtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FERkU7RUFDRSxlQUFBO0FDSUo7O0FERkU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FEREE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7RUFFQSxnQ0FBQTtBQ0lGOztBREhFO0VBQ0UsWUFBQTtBQ0tKOztBREhFO0VBQ0UsNEJBQUE7VUFBQSxvQkFBQTtBQ0tKOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURHQTtFQUNFLHdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0U7SUFDRSxzQkFBQTtFQ0dGOztFRERBO0lBQ0UsZUFBQTtFQ0lGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXJ0cy9wYXJ0LWVkaXQvcGFydC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbnVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnJhZGlvLWNhcmQge1xuICBoZWlnaHQ6IDEwOHB4O1xuICB3aWR0aDogMTA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcbn1cbi5yYWRpby1jYXJkID4gaW1nIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZzogNHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCk7XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwcHggMDtcbn1cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gICY6bm90KDpkaXNhYmxlZCkgfiAucmFkaW8tY2FyZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICY6ZGlzYWJsZWQgfiAucmFkaW8tY2FyZCB7XG4gICAgY29sb3I6IGhzbGEoMTUwLCA1JSwgNzUlLCAxKTtcbiAgICBib3JkZXItY29sb3I6IGhzbGEoMTUwLCA1JSwgNzUlLCAxKTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cbi5yYWRpbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4O1xufVxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyAucmFkaW8tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmMxMDc7XG4gIC8vIGNvbG9yOiBoc2xhKDIxNSwgMCUsIDEwMCUsIDEpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggI2ZmYzEwNztcbiAgLmxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgaW1nIHtcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgwKTtcbiAgfVxufVxucCB7XG4gIC8vIG50LXdlaWdodDogOTAwO1xufVxuXG4ucmFkaW8tc2VjdGlvbiB7XG4gIG1hcmdpbjogMCAxcHg7XG59XG5cbi5yYWRpby1vcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8vIFZhbGlkYXRpb25cbi5lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI2LCA3NSwgNzUsIDAuMSk7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmdiYSgyMjYsIDc1LCA3NSwgMSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uZXJyb3Igc21hbGwge1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cbi5lcnJvciA+IGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzhweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk1cHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuZXJyb3Ige1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxufVxuIiwiLmZvcm0tZ3JvdXAge1xuICBwYWRkaW5nOiAwIDE2cHg7XG59XG5cbnVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnJhZGlvLWNhcmQge1xuICBoZWlnaHQ6IDEwOHB4O1xuICB3aWR0aDogMTA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcbn1cblxuLnJhZGlvLWNhcmQgPiBpbWcge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwKTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDBweCAwO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpub3QoOmRpc2FibGVkKSB+IC5yYWRpby1jYXJkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW5wdXRbdHlwZT1yYWRpb106ZGlzYWJsZWQgfiAucmFkaW8tY2FyZCB7XG4gIGNvbG9yOiAjYmNjMmJmO1xuICBib3JkZXItY29sb3I6ICNiY2MyYmY7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5yYWRpbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4O1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLnJhZGlvLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZjMTA3O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggI2ZmYzEwNztcbn1cbmlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyAucmFkaW8tY2FyZCAubGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5pbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLnJhZGlvLWNhcmQgaW1nIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG59XG5cbi5yYWRpby1zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIDFweDtcbn1cblxuLnJhZGlvLW9wdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjYsIDc1LCA3NSwgMC4xKTtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjZTI0YjRiO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4uZXJyb3Igc21hbGwge1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cblxuLmVycm9yID4gZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzOHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45NXB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuZXJyb3Ige1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxufSJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PartEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-part-edit',
                templateUrl: './part-edit.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styleUrls: ['./part-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"] }, { type: _ui_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoInput']
        }] }); })();


/***/ }),

/***/ "./src/app/parts/part-list/part-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/parts/part-list/part-list.component.ts ***!
  \********************************************************/
/*! exports provided: PartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartListComponent", function() { return PartListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/list-view/list-view.component */ "./src/app/ui/list-view/list-view.component.ts");






class PartListComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.sort = '1';
        this.data = [];
        this.db.getParts().subscribe((data) => {
            this.data = data;
        });
    }
    ngOnInit() {
    }
    onItemSelected(item) {
        console.log(item.id);
        this.router.navigate([`/parts/${item.id}`]);
        // this.router.navigate([`/materials/${product.id}`]);
    }
}
PartListComponent.??fac = function PartListComponent_Factory(t) { return new (t || PartListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PartListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PartListComponent, selectors: [["app-part-list"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-4"], ["nbButton", "", "size", "small", "routerLink", "/parts/new", "status", "primary"], [1, "col-6"], ["icon", "search-outline"], ["icon", "power-outline"], ["icon", "person-outline"], ["icon", "home-outline"], [3, "list", "onclick"]], template: function PartListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "New Parts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nb-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "nb-action", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nb-action", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "nb-action", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "nb-action", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ui-list-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onclick", function PartListComponent_Template_ui_list_view_onclick_10_listener($event) { return ctx.onItemSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx.data);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRzL3BhcnQtbGlzdC9wYXJ0LWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PartListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-part-list',
                templateUrl: './part-list.component.html',
                styleUrls: ['./part-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/planning-and-control/loading-sheet/loading-edit/loading-edit.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/planning-and-control/loading-sheet/loading-edit/loading-edit.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LoadingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingEditComponent", function() { return LoadingEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_ui_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ui/toast.service */ "./src/app/ui/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/form-footer/form-footer.component */ "./src/app/ui/form-footer/form-footer.component.ts");












const _c0 = ["autoInput"];
function LoadingEditComponent_div_19_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter PartNumber of the Loading Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoadingEditComponent_div_19_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Part Number should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoadingEditComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, LoadingEditComponent_div_19_li_3_Template, 3, 0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, LoadingEditComponent_div_19_li_4_Template, 3, 0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r216.partNo.errors == null ? null : ctx_r216.partNo.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r216.partNo.errors == null ? null : ctx_r216.partNo.errors.minlength);
} }
function LoadingEditComponent_div_26_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter PartName of the Loading Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoadingEditComponent_div_26_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Part Name should contain atleast 5 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoadingEditComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, LoadingEditComponent_div_26_li_3_Template, 3, 0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, LoadingEditComponent_div_26_li_4_Template, 3, 0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r217.partName.errors == null ? null : ctx_r217.partName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r217.partName.errors == null ? null : ctx_r217.partName.errors.minlength);
} }
function LoadingEditComponent_div_33_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter Quantity of the Loading Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoadingEditComponent_div_33_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Quantity should contain atleast 1 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoadingEditComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, LoadingEditComponent_div_33_li_3_Template, 3, 0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, LoadingEditComponent_div_33_li_4_Template, 3, 0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r218.quantity.errors == null ? null : ctx_r218.quantity.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r218.quantity.errors == null ? null : ctx_r218.quantity.errors.minlength);
} }
class LoadingEditComponent {
    constructor(toast, route, location, db, fb) {
        this.toast = toast;
        this.route = route;
        this.location = location;
        this.db = db;
        this.fb = fb;
        this.data = [];
        this.selectedCustomer = '';
        this.validity = false;
        this.sampleDate = new Date();
        this.partOptions = [];
    }
    get partNo() {
        return this.loadingForm.get('partNo');
    }
    get partName() {
        return this.loadingForm.get('partName');
    }
    get date() {
        return this.loadingForm.get('date');
    }
    get quantity() {
        return this.loadingForm.get('quantity');
    }
    get invoiceNo() {
        return this.loadingForm.get('invoiceNo');
    }
    get invoiceDate() {
        return this.loadingForm.get('invoiceDate');
    }
    get invoiceValue() {
        return this.loadingForm.get('invoiceValue');
    }
    get driver() {
        return this.loadingForm.get('driver');
    }
    get company() {
        return this.loadingForm.get('company');
    }
    get trip() {
        return this.loadingForm.get('trip');
    }
    get grnNo() {
        return this.loadingForm.get('grnNo');
    }
    loadPartsList() {
        this.db.getParts()
            .subscribe((list) => {
            this.partOptions = list;
            this.partsFiltered$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(list);
        });
    }
    onItemChange() {
        this.partsFiltered$ = this.getFilteredOptions(this.input.nativeElement.value);
    }
    onSelectChange($event) {
        this.partsFiltered$ = this.getFilteredOptions($event);
    }
    getFilteredOptions(value) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(filterString => this.filter(filterString)));
    }
    filter(value) {
        const filterValue = value.toLowerCase();
        return this.partOptions.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.selectedId = params.get('id');
            this.fetchObject();
            this.myForm();
        });
        this.loadingForm = this.fb.group({
            date: [new Date()],
            partNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            partName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            quantity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            invoiceNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            invoiceDate: [new Date()],
            invoiceValue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            driver: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            company: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            trip: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            grnNo: [],
            typeOfDocument: []
        });
        this.loadingForm.valueChanges.subscribe(() => {
            this.validity = this.loadingForm.valid;
        });
    }
    myForm() {
        this.requiredForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    fetchObject() {
        if (this.selectedId) {
            console.log(this.selectedId);
            this.selectedObject = this.db.getLoadingSheet(this.selectedId);
            this.selectedObject.subscribe((data) => {
                console.log(data);
                this.loadingForm.patchValue({
                    partNo: data.partNo,
                    partName: data.partName,
                    date: new Date(data.date.toMillis()),
                    quantity: data.quantity,
                    invoiceNo: data.invoiceNo,
                    invoiceDate: new Date(data.invoiceDate.toMillis()),
                    invoiceValue: data.invoiceValue,
                    driver: data.driver,
                    company: data.company,
                    trip: data.trip,
                    grnNo: data.grnNo,
                    typeOfDocument: data.typeOfDocument,
                });
            });
        }
    }
    // ONSUBMIT
    onButtonClicked(clickedButton) {
        this.loadingForm.get("typeOfDocument").setValue("loading");
        if (clickedButton === 'save') {
            this.db.addLoadingSheet(this.loadingForm.value, this.selectedId)
                .then(() => {
                this.toast.success('Dispatch updated succesfully');
                if (this.selectedId) {
                    this.location.back();
                }
            });
        }
    }
    onDate(event) {
        console.log(event);
        console.log(this.sampleDate);
    }
}
LoadingEditComponent.??fac = function LoadingEditComponent_Factory(t) { return new (t || LoadingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_ui_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
LoadingEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoadingEditComponent, selectors: [["app-loading-edit"]], viewQuery: function LoadingEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????viewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.input = _t.first);
    } }, decls: 91, vars: 13, consts: [["novalidate", "", 3, "formGroup"], [1, "form-group"], ["for", "date", 1, "label"], [1, "row"], [1, "col-md-6"], ["nbInput", "", "placeholder", "Pick Date", "formControlName", "date", "id", "date", 3, "nbDatepicker"], ["date", ""], ["for", "partNumber", 1, "label"], ["formControlName", "partNo", "type", "text", "id", "partNo", "fullWidth", "", "placeholder", "", "nbInput", ""], ["class", "col-md-6", 4, "ngIf"], ["for", "partName", 1, "label"], ["formControlName", "partName", "type", "text", "id", "partName", "fullWidth", "", "placeholder", "", "nbInput", ""], ["for", "quantity", 1, "label"], ["formControlName", "quantity", "type", "number", "id", "quantity", "placeholder", "", "nbInput", ""], ["for", "invoiceNo", 1, "label"], ["formControlName", "invoiceNo", "type", "text", "id", "invoiceNo", "fullWidth", "", "placeholder", "", "nbInput", ""], ["for", "invoiceDate", 1, "label"], ["formControlName", "invoiceDate", "id", "invoiceDate", "fullWidth", "", "placeholder", "", "nbInput", "", 3, "nbDatepicker"], ["invoiceDate", ""], ["for", "invoiceValue", 1, "label"], ["formControlName", "invoiceValue", "type", "text", "id", "invoiceValue", "fullWidth", "", "placeholder", "", "nbInput", ""], ["for", "name", 1, "label"], ["formControlName", "driver", "type", "text", "id", "driver", "fullWidth", "", "placeholder", "", "nbInput", ""], ["formControlName", "company", "type", "text", "id", "company", "fullWidth", "", "placeholder", "", "nbInput", ""], ["formControlName", "trip", "id", "trip", "placeholder", "eg. 0%", 2, "margin-bottom", "20px", "width", "70%", "height", "40px", "background-color", "rgb(5, 5, 5)", "color", "rgb(245, 238, 238)", "border", "rgb(5, 5, 5)"], ["disabled", ""], ["value", "I Trip"], ["value", "II Trip"], ["value", "III Trip"], ["value", "IV Trip"], ["value", "V Trip"], ["formControlName", "grnNo", "type", "text", "id", "grnNo", "placeholder", "", "nbInput", ""], [3, "status", "event"], [1, "error"], [4, "ngIf"]], template: function LoadingEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Loading sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "nb-datepicker", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Part Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, LoadingEditComponent_div_19_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Part Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](26, LoadingEditComponent_div_26_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](33, LoadingEditComponent_div_33_Template, 5, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Invoice No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Invoice Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "nb-datepicker", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Invoice Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "nb-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "nb-option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Select a Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "nb-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "I Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "nb-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "II Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "nb-option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "III Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "nb-option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "IV Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "nb-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "V Trip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](84, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](85, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](86, "GRN No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](89, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](90, "ui-form-footer", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("event", function LoadingEditComponent_Template_ui_form_footer_event_90_listener($event) { return ctx.onButtonClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](12);
        const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loadingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nbDatepicker", _r215);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.partNo.invalid && (ctx.partNo.dirty || ctx.partNo.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.partNo.invalid && (ctx.partNo.dirty || ctx.partNo.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.partName.invalid && (ctx.partName.dirty || ctx.partName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.partName.invalid && (ctx.partName.dirty || ctx.partName.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.quantity.invalid && (ctx.quantity.dirty || ctx.quantity.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.quantity.invalid && (ctx.quantity.dirty || ctx.quantity.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nbDatepicker", _r219);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("status", ctx.validity);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbDatepickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbOptionComponent"], _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_9__["FormFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5uaW5nLWFuZC1jb250cm9sL2xvYWRpbmctc2hlZXQvbG9hZGluZy1lZGl0L2xvYWRpbmctZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoadingEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-edit',
                templateUrl: './loading-edit.component.html',
                styleUrls: ['./loading-edit.component.scss']
            }]
    }], function () { return [{ type: src_app_ui_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }, { type: src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autoInput']
        }] }); })();


/***/ }),

/***/ "./src/app/planning-and-control/loading-sheet/loading-list/loading-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/planning-and-control/loading-sheet/loading-list/loading-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LoadingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingListComponent", function() { return LoadingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function LoadingListComponent_nb_option_9_Template(rf, ctx) { if (rf & 1) {
    const _r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoadingListComponent_nb_option_9_Template_nb_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r231); const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r230.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const customer_r229 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", customer_r229.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", customer_r229.name, " ");
} }
function LoadingListComponent_tr_27_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, item_r232.date.toMillis(), "dd/MM/yyyy"));
} }
function LoadingListComponent_tr_27_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", item_r232.partName, "/", item_r232.partNo, "");
} }
function LoadingListComponent_tr_27_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r232.quantity);
} }
function LoadingListComponent_tr_27_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r232.invoiceNo);
} }
function LoadingListComponent_tr_27_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](2, 1, item_r232.invoiceDate.toMillis(), "dd/MM/yyyy"), "");
} }
function LoadingListComponent_tr_27_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r232.invoiceValue);
} }
function LoadingListComponent_tr_27__svg_svg_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "circle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoadingListComponent_tr_27_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "circle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function LoadingListComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoadingListComponent_tr_27_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r249); const item_r232 = ctx.$implicit; const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r248.onItemSelected(item_r232); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, LoadingListComponent_tr_27_td_1_Template, 3, 4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, LoadingListComponent_tr_27_td_2_Template, 2, 2, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, LoadingListComponent_tr_27_td_3_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, LoadingListComponent_tr_27_td_4_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, LoadingListComponent_tr_27_td_5_Template, 3, 4, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, LoadingListComponent_tr_27_td_6_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, LoadingListComponent_tr_27__svg_svg_8_Template, 2, 0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, LoadingListComponent_tr_27_ng_template_9_Template, 2, 0, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r232 = ctx.$implicit;
    const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r232 == null ? null : item_r232.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r232 == null ? null : item_r232.partNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r232 == null ? null : item_r232.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r232 == null ? null : item_r232.invoiceNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r232 == null ? null : item_r232.invoiceDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r232 == null ? null : item_r232.invoiceValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", item_r232 == null ? null : item_r232.grnNo)("ngIfElse", _r240);
} }
class LoadingListComponent {
    constructor(db, router, firestore) {
        this.db = db;
        this.router = router;
        this.firestore = firestore;
        this.myFilter = (d) => {
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
        this.sort = '1';
        this.data = [];
        this.customers = [];
        this.selectedCustomer = '';
        this.validity = false;
    }
    ngOnInit() {
        this.db.getLoadingSheetList().subscribe((data) => {
            this.data = data;
            console.log(data);
        });
        this.db.getCustomers().subscribe((data) => {
            this.customers = data;
            this.selectedCustomer;
        });
    }
    onChange() {
        this.parts = this.firestore.collection('parts', ref => ref.where('customer', '==', this.selectedCustomer)).valueChanges();
    }
    //PRINT FUNCTION
    printComponent(cmpName) {
        let printContents = document.getElementById(cmpName).innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    onItemSelected(item) {
        console.log(item);
        this.router.navigate([`/loading/${item.id}`]);
    }
    onButtonClicked(clickedButton) {
        if (clickedButton === 'save') {
        }
        else {
        }
    }
}
LoadingListComponent.??fac = function LoadingListComponent_Factory(t) { return new (t || LoadingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"])); };
LoadingListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LoadingListComponent, selectors: [["app-loading-list"]], decls: 32, vars: 4, consts: [[1, "row"], [1, "col-4"], ["nbButton", "", "size", "small", "routerLink", "/loading/new", "status", "primary"], ["icon", "plus"], ["nbInput", "", "placeholder", "Pick Date", "formControlName", "date", "id", "date", 3, "nbDatepicker"], ["date", ""], ["placeholder", "Select Customer", "id", "customer", 1, "col-4", 2, "margin-left", "20px", 3, "selected", "selectedChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["id", "component1"], [1, "col-2"], [1, "col-1"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-1"], ["ngxPrint", "", "nbButton", "", "size", "small", "status", "primary", 3, "click"], ["icon", "printer-outline"], [3, "value", "click"], [2, "cursor", "pointer", 3, "click"], ["class", "col-2", 4, "ngIf"], ["style", "text-align: center;", "class", "col-4", 4, "ngIf"], ["style", "text-align: center;", "class", "col-1", 4, "ngIf"], ["style", "text-align: center;", "class", "col-2", 4, "ngIf"], [2, "text-align", "center"], ["height", "20", "width", "20", 4, "ngIf", "ngIfElse"], ["noGrn", ""], [1, "col-4", 2, "text-align", "center"], [1, "col-1", 2, "text-align", "center"], [1, "col-2", 2, "text-align", "center"], ["height", "20", "width", "20"], ["cx", "10", "cy", "10", "r", "10", "stroke", "grey", "stroke-width", "1", "fill", "green"], ["cx", "10", "cy", "10", "r", "10", "stroke", "grey", "stroke-width", "1", "fill", "red"]], template: function LoadingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "nb-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Add Dispatch Record ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "nb-datepicker", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "nb-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedChange", function LoadingListComponent_Template_nb_select_selectedChange_8_listener($event) { return ctx.selectedCustomer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, LoadingListComponent_nb_option_9_Template, 2, 2, "nb-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Part Name / Part Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Invoice Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Invoice Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Invoice Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "GRN Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](27, LoadingListComponent_tr_27_Template, 11, 8, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LoadingListComponent_Template_button_click_29_listener() { return ctx.printComponent("component1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "nb-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("nbDatepicker", _r226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selected", ctx.selectedCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.customers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbDatepickerComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5uaW5nLWFuZC1jb250cm9sL2xvYWRpbmctc2hlZXQvbG9hZGluZy1saXN0L2xvYWRpbmctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoadingListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-list',
                templateUrl: './loading-list.component.html',
                styleUrls: ['./loading-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/planning-and-control/schedule/schedule.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/planning-and-control/schedule/schedule.component.ts ***!
  \*********************************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var src_app_ui_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ui/toast.service */ "./src/app/ui/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/form-footer/form-footer.component */ "./src/app/ui/form-footer/form-footer.component.ts");









function ScheduleComponent_nb_option_2_Template(rf, ctx) { if (rf & 1) {
    const _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ScheduleComponent_nb_option_2_Template_nb_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r212); const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r211.onChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const customer_r210 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", customer_r210.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](customer_r210.name);
} }
function ScheduleComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "rect", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r213 = ctx.$implicit;
    const i_r214 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroupName", i_r214);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", item_r213.value.partName, "/", item_r213.value.partNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r213.value.dispatched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r213.value.schedule - item_r213.value.dispatched);
} }
class ScheduleComponent {
    constructor(db, firestore, toast, location, fb) {
        this.db = db;
        this.firestore = firestore;
        this.toast = toast;
        this.location = location;
        this.fb = fb;
        this.data = [];
        this.selectedCustomer = '';
        this.validity = true;
        this.month = null;
    }
    // get schedule() {
    //   return this.scheduleForm.get('schedule');
    // }
    // get dispatched() {
    //   return this.scheduleForm.get('quantity');
    // }
    // get balance() {
    //   return this.scheduleForm.get('balance');
    // }
    // get completed() {
    //   return this.scheduleForm.get('completed');
    // }
    get partName() {
        return this.scheduleForm.get('partName');
    }
    get items() {
        return this.scheduleForm.get('items');
    }
    ngOnInit() {
        this.db.getCustomers().subscribe((data) => {
            this.data = data;
            this.parts = this.db.getParts();
            // this.route.paramMap.subscribe((params: ParamMap) => {
            //   this.selectedId = params.get('id');
            // });
            this.scheduleForm = this.fb.group({
                id: [''],
                items: this.fb.array([]),
                typeOfDocument: ['']
            });
            this.onMonthChanged();
            // this.loadLoading();
        });
        let curdate = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString();
        console.log(curdate);
        this.month = curdate;
        this.scheduleForm.valueChanges.subscribe(() => {
            this.validity = this.scheduleForm.valid;
        });
    }
    // private loadLoading() {
    //   this.db.getLoadingedit(this.quantity)
    //     .subscribe((list: any) => {
    //       this.options = list;
    //       console.log(this.loadLoading)
    //     })
    // }
    onMonthChanged() {
        this.scheduleForm.reset();
        console.log(this.month);
        const date = new Date(this.month);
        const monthNames = ["jan", "feb", "mar", "apr", "may", "jun",
            "jul", "aug", "sep", "oct", "nov", "dec"
        ];
        const string = date.getFullYear() + "-" + monthNames[date.getMonth()];
        // console.log(string);
        this.selectedId = string;
        this.db.getScheduleSheet(string).get()
            .toPromise()
            .then((docSnapshot) => {
            if (docSnapshot.exists) {
                // Object exists
                this.scheduleForm.controls['id'].setValue(docSnapshot.data().id);
                this.scheduleForm.controls['typeOfDocument'].setValue("docSnapshot.data().typeOfDocument");
                for (let item of docSnapshot.data().items) {
                    this.patchItem(item);
                }
                console.log(docSnapshot.data());
            }
            else {
                // Object does not exist
                this.scheduleForm.controls['id'].setValue(string);
                this.scheduleForm.controls['typeOfDocument'].setValue("schedule");
                this.parts.subscribe((parts) => {
                    for (let part of parts) {
                        console.log(part);
                        this.addItem(part);
                    }
                });
            }
        });
    }
    onChange() {
        this.parts = this.firestore.collection('parts', ref => ref.where('customer', '==', this.selectedCustomer)).valueChanges();
    }
    ;
    addItem(part) {
        const item = this.fb.group({
            partName: part.name,
            partNumber: part.code,
            customer: [],
            schedule: [],
            dispatched: [],
            balance: [],
            completed: []
        });
        this.scheduleForm.controls['items'].push(item);
    }
    patchItem(data) {
        const item = this.fb.group({
            partName: data.partName,
            partNumber: data.partNumber,
            customer: data.customer,
            schedule: data.schedule,
            dispatched: data.dispatched,
            balance: data.balance,
            completed: data.completed
        });
        this.scheduleForm.controls['items'].push(item);
    }
    // ONSUBMIT
    onButtonClicked(clickedButton) {
        console.log(this.scheduleForm.value);
        // this.scheduleForm.get("typeOfDocument").setValue("schedule");
        if (clickedButton === 'save') {
            this.db.addScheduleSheet(this.scheduleForm.value, this.selectedId)
                .then(() => {
                this.toast.success('Schedule updated succesfully');
            });
        }
    }
}
ScheduleComponent.??fac = function ScheduleComponent_Factory(t) { return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
ScheduleComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ScheduleComponent, selectors: [["app-schedule"]], decls: 22, vars: 6, consts: [["type", "month", "id", "month", "nbInput", "", 3, "ngModel", "ngModelChange", "change"], ["placeholder", "Select Customer", "id", "customer", 2, "margin-left", "20px", 3, "selected", "selectedChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "formGroup"], ["formArrayName", "items", 2, "width", "100%"], [2, "width", "100%"], ["for", "partName", 1, "col-4", "form-group"], ["for", "schedule", 1, "col-2", "table-head"], ["for", "dispatched", 1, "col-2", "table-head"], ["for", "balance", 1, "col-2", "table-head"], ["for", "completed", 1, "col-2", "table-head"], ["class", "col-12", 3, "formGroupName", 4, "ngFor", "ngForOf"], [3, "status", "event"], [3, "value", "click"], [1, "col-12", 3, "formGroupName"], ["id", "partName", 1, "col-4"], ["id", "schedule", 1, "table-head"], ["type", "text", "id", "text", "formControlName", "schedule", "nbInput", "", 1, "table-head", "col-1"], ["id", "dispatched", 1, "col-2", "table-head"], ["id", "balance", 1, "col-2", "table-head"], ["id", "completed", 1, "col-2", "table-head"], ["width", "100", "height", "10"], ["width", "100", "height", "10", 2, "fill", "rgb(255, 217, 0)", "stroke-width", "3", "stroke", "rgb(0,0,0)"]], template: function ScheduleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ScheduleComponent_Template_input_ngModelChange_0_listener($event) { return ctx.month = $event; })("change", function ScheduleComponent_Template_input_change_0_listener() { return ctx.onMonthChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("selectedChange", function ScheduleComponent_Template_nb_select_selectedChange_1_listener($event) { return ctx.selectedCustomer = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ScheduleComponent_nb_option_2_Template, 2, 2, "nb-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Part Name/Part Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Dispatched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "% Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, ScheduleComponent_tr_18_Template, 12, 5, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "ui-form-footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("event", function ScheduleComponent_Template_ui_form_footer_event_21_listener($event) { return ctx.onButtonClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.month);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selected", ctx.selectedCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.scheduleForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.items.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("status", ctx.validity);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormArrayName"], _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__["FormFooterComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbOptionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"]], styles: [".table-head[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhbm5pbmctYW5kLWNvbnRyb2wvc2NoZWR1bGUvRDpcXERldmVsb3BtZW50XFxBbmd1bGFyXFxhbmdsZS9zcmNcXGFwcFxccGxhbm5pbmctYW5kLWNvbnRyb2xcXHNjaGVkdWxlXFxzY2hlZHVsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGxhbm5pbmctYW5kLWNvbnRyb2wvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGxhbm5pbmctYW5kLWNvbnRyb2wvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaGVhZHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIudGFibGUtaGVhZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ScheduleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-schedule',
                templateUrl: './schedule.component.html',
                styleUrls: ['./schedule.component.scss']
            }]
    }], function () { return [{ type: src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: src_app_ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/database/database.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/database/database.service.ts ***!
  \*******************************************************/
/*! exports provided: DatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseService", function() { return DatabaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class DatabaseService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getQuantity() {
        throw new Error('Method not implemented.');
    }
    // MATERIALS
    addMaterial(data, id) {
        const uid = id || this.firestore.createId();
        data.id = uid;
        return this.firestore.collection('materials').doc(uid).set(data);
    }
    getMaterials() {
        return this.firestore.collection('materials').valueChanges();
    }
    getMaterial(id) {
        return this.firestore.collection('materials').doc(id).valueChanges();
    }
    // PARTS
    addPart(data, id) {
        const uid = id || this.firestore.createId();
        data.id = uid;
        return this.firestore.collection('parts').doc(uid).set(data);
    }
    getParts() {
        return this.firestore.collection('parts').valueChanges();
    }
    getPart(id) {
        return this.firestore.collection('parts').doc(id).valueChanges();
    }
    // MACHINE
    addMachine(data, id) {
        const uid = id || this.firestore.createId();
        data.id = uid;
        return this.firestore.collection('machines').doc(uid).set(data);
    }
    getMachines() {
        return this.firestore.collection('machines').valueChanges();
    }
    getMachine(id) {
        return this.firestore.collection('machines').doc(id).valueChanges();
    }
    // MOULD
    addMould(data, id) {
        const uid = id || this.firestore.createId();
        data.id = uid;
        return this.firestore.collection('moulds').doc(uid).set(data);
    }
    getMoulds() {
        return this.firestore.collection('moulds').valueChanges();
    }
    getMould(id) {
        return this.firestore.collection('moulds').doc(id).valueChanges();
    }
    // EMPLOYEES
    addEmployee(data, id) {
        const uid = id || this.firestore.createId();
        data.id = uid;
        return this.firestore.collection('employees').doc(uid).set(data);
    }
    getEmployees() {
        return this.firestore.collection('employees').valueChanges();
    }
    getEmployee(id) {
        return this.firestore.collection('employees').doc(id).valueChanges();
    }
    // CUSTOMERS
    addCustomer(data, id) {
        const uid = id || this.firestore.createId();
        data.id = uid;
        return this.firestore.collection('customers').doc(uid).set(data);
    }
    getCustomers() {
        return this.firestore.collection('customers').valueChanges();
    }
    getCustomer(id) {
        return this.firestore.collection('customers').doc(id).valueChanges();
    }
    // VENDORS
    addVendor(data, id) {
        const uid = id || this.firestore.createId();
        data.id = uid;
        return this.firestore.collection('vendors').doc(uid).set(data);
    }
    getVendors() {
        return this.firestore.collection('vendors').valueChanges();
    }
    getVendor(id) {
        return this.firestore.collection('vendors').doc(id).valueChanges();
    }
    // Loading Sheet
    addLoadingSheet(data, id) {
        const uid = id || this.firestore.createId();
        data.id = uid;
        return this.firestore.collection('loading').doc(uid).set(data);
    }
    getLoadingSheetList() {
        return this.firestore.collection('loading').valueChanges();
    }
    getLoadingSheet(id) {
        return this.firestore.collection('loading').doc(id).valueChanges();
    }
    // Schedule Sheet
    addScheduleSheet(data, id) {
        // const october_21= id || this.firestore.createId();
        // data.id = october_21;
        return this.firestore.collection('schedule').doc(id).set(data);
    }
    getScheduleSheetList() {
        return this.firestore.collection('schedule').valueChanges();
    }
    getScheduleSheet(id) {
        return this.firestore.collection('schedule').doc(id);
    }
    //INVOICE
    addInvoice(data, id) {
        const uid = id || this.firestore.createId();
        data.id = uid;
        return this.firestore.collection('invoice').doc(uid).set(data);
    }
    getInvoiceList() {
        return this.firestore.collection('invoice').valueChanges();
    }
    getInvoice(id) {
        return this.firestore.collection('invoice').doc(id).valueChanges();
    }
}
DatabaseService.??fac = function DatabaseService_Factory(t) { return new (t || DatabaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
DatabaseService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: DatabaseService, factory: DatabaseService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DatabaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ui/animations.ts":
/*!**********************************!*\
  !*** ./src/app/ui/animations.ts ***!
  \**********************************/
/*! exports provided: fader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter,:leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(100%)'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1,
                transform: 'scale(1) translateY(0)'
            }))
        ])
    ])
]);


/***/ }),

/***/ "./src/app/ui/form-footer/form-footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui/form-footer/form-footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FormFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFooterComponent", function() { return FormFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");




class FormFooterComponent {
    constructor(location) {
        this.location = location;
        this.status = 'true';
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onDismissClicked() {
        this.event.emit('dismiss');
        this.location.back();
    }
}
FormFooterComponent.??fac = function FormFooterComponent_Factory(t) { return new (t || FormFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
FormFooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FormFooterComponent, selectors: [["ui-form-footer"]], inputs: { status: "status" }, outputs: { event: "event" }, decls: 8, vars: 1, consts: [[1, "footer"], [1, "fancy-button", "primary", 3, "disabled", "click"], [1, "secondary", 3, "click"]], template: function FormFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormFooterComponent_Template_button_click_2_listener() { return ctx.event.emit("save"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function FormFooterComponent_Template_button_click_5_listener() { return ctx.onDismissClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Discard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", !ctx.status);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardBodyComponent"]], styles: [".footer[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  z-index: 99;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: Transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none;\n}\n\n\n\n\n\n.primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .primary[_ngcontent-%COMP%]:before {\n  background: #f5b800;\n  background: linear-gradient(-45deg, #f5b800 0%, #ffcc33 80%, #ffcc33 100%);\n}\n\n\n\n.primary[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 14px;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: #000000;\n  position: relative;\n}\n\n.primary[_ngcontent-%COMP%]:disabled {\n  pointer-events: none;\n  -webkit-filter: brightness(50%);\n          filter: brightness(50%);\n}\n\n.primary.primary[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 1px #ff8008;\n}\n\n.primary[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  bottom: -1px;\n  left: 10px;\n  right: 10px;\n  z-index: -1;\n  border-radius: 2em;\n  -webkit-filter: blur(14px) brightness(0.9);\n          filter: blur(14px) brightness(0.9);\n  transform-style: preserve-3d;\n  transition: all 0.3s ease-out;\n}\n\n.primary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 20px;\n  border-radius: 6px;\n  position: relative;\n  z-index: 2;\n  will-change: transform, filter;\n  transform-style: preserve-3d;\n  transition: all 0.3s ease-out;\n}\n\n.primary[_ngcontent-%COMP%]:focus {\n  color: #000000;\n}\n\n.primary[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n\n.primary[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  -webkit-filter: brightness(0.9) contrast(1.2);\n          filter: brightness(0.9) contrast(1.2);\n  transform: scale(0.96);\n}\n\n.primary[_ngcontent-%COMP%]:hover:before {\n  bottom: 3px;\n  -webkit-filter: blur(6px) brightness(0.8);\n          filter: blur(6px) brightness(0.8);\n}\n\n.primary[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%] {\n  -webkit-filter: brightness(0.75) contrast(1.7);\n          filter: brightness(0.75) contrast(1.7);\n}\n\n.primary.pop-onhover[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n\n.primary.pop-onhover[_ngcontent-%COMP%]:before {\n  opacity: 0;\n  bottom: 10px;\n}\n\n.primary.pop-onhover[_ngcontent-%COMP%]:hover:before {\n  bottom: -7px;\n  opacity: 1;\n  -webkit-filter: blur(16px);\n          filter: blur(16px);\n}\n\n.primary.pop-onhover[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.primary.pop-onhover[_ngcontent-%COMP%]:hover:active   span[_ngcontent-%COMP%] {\n  -webkit-filter: brightness(1) contrast(1);\n          filter: brightness(1) contrast(1);\n  transform: scale(1);\n  transition: all 0.2s ease-out;\n}\n\n.primary.pop-onhover[_ngcontent-%COMP%]:hover:active:before {\n  bottom: 0;\n  -webkit-filter: blur(5px) brightness(0.85);\n          filter: blur(5px) brightness(0.85);\n  transition: all 0.2s ease-out;\n}\n\n.secondary[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: bold;\n  font-size: 14px;\n  cursor: pointer;\n  text-transform: uppercase;\n  color: #d6d6d6;\n  position: relative;\n  margin-left: 8px;\n}\n\n.secondary.primary[_ngcontent-%COMP%] {\n  text-shadow: 0px 0px 1px #ff8008;\n}\n\n.secondary[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: inline-block;\n  position: absolute;\n  bottom: -1px;\n  left: 10px;\n  right: 10px;\n  z-index: -1;\n  border-radius: 2em;\n  -webkit-filter: blur(14px) brightness(0.9);\n          filter: blur(14px) brightness(0.9);\n  transform-style: preserve-3d;\n  transition: all 0.3s ease-out;\n}\n\n.secondary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 20px;\n  border-radius: 6px;\n  position: relative;\n  z-index: 2;\n  background-color: #444444;\n  will-change: transform, filter;\n  transform-style: preserve-3d;\n  transition: all 0.3s ease-out;\n}\n\n.secondary[_ngcontent-%COMP%]:focus {\n  color: #ffffff;\n}\n\n.secondary[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n.secondary[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  -webkit-filter: brightness(0.9) contrast(1.2);\n          filter: brightness(0.9) contrast(1.2);\n  transform: scale(0.96);\n}\n\n.secondary[_ngcontent-%COMP%]:hover:before {\n  bottom: 3px;\n  -webkit-filter: blur(6px) brightness(0.8);\n          filter: blur(6px) brightness(0.8);\n}\n\n.secondary[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%] {\n  -webkit-filter: brightness(0.75) contrast(1.7);\n          filter: brightness(0.75) contrast(1.7);\n}\n\n.secondary.pop-onhover[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n\n.secondary.pop-onhover[_ngcontent-%COMP%]:before {\n  opacity: 0;\n  bottom: 10px;\n}\n\n.secondary.pop-onhover[_ngcontent-%COMP%]:hover:before {\n  bottom: -7px;\n  opacity: 1;\n  -webkit-filter: blur(16px);\n          filter: blur(16px);\n}\n\n.secondary.pop-onhover[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: scale(1);\n}\n\n.secondary.pop-onhover[_ngcontent-%COMP%]:hover:active   span[_ngcontent-%COMP%] {\n  -webkit-filter: brightness(1) contrast(1);\n          filter: brightness(1) contrast(1);\n  transform: scale(1);\n  transition: all 0.2s ease-out;\n}\n\n.secondary.pop-onhover[_ngcontent-%COMP%]:hover:active:before {\n  bottom: 0;\n  -webkit-filter: blur(5px) brightness(0.85);\n          filter: blur(5px) brightness(0.85);\n  transition: all 0.2s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZm9ybS1mb290ZXIvRDpcXERldmVsb3BtZW50XFxBbmd1bGFyXFxhbmdsZS9zcmNcXGFwcFxcdWlcXGZvcm0tZm9vdGVyXFxmb3JtLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvZm9ybS1mb290ZXIvZm9ybS1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDRDs7QURFQTtFQUNDLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVBLFdBQUE7O0FBUUEsa0JBQUE7O0FBQ0E7O0VBUEMsbUJBUzRCO0VBTjVCLDBFQUFBO0FDR0Q7O0FES0EsaUJBQUE7O0FBQ0E7RUFDQyxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0ZEOztBRElDO0VBQ0Msb0JBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FDRkY7O0FESUM7RUFDQyxnQ0FBQTtBQ0ZGOztBREtDO0VBQ0MsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ0hGOztBRE1DO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDSkY7O0FETUM7RUFDQyxjQUFBO0FDSkY7O0FETUM7RUFDQyxjQUFBO0FDSkY7O0FETUU7RUFDQyw2Q0FBQTtVQUFBLHFDQUFBO0VBQ0Esc0JBQUE7QUNKSDs7QURNRTtFQUNDLFdBQUE7RUFDQSx5Q0FBQTtVQUFBLGlDQUFBO0FDSkg7O0FET0M7RUFDQyw4Q0FBQTtVQUFBLHNDQUFBO0FDTEY7O0FEUUU7RUFDQyxrQkFBQTtBQ05IOztBRFFFO0VBQ0MsVUFBQTtFQUNBLFlBQUE7QUNOSDs7QURTRztFQUNDLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtBQ1BKOztBRFNHO0VBRUMsbUJBQUE7QUNSSjs7QURXSTtFQUNDLHlDQUFBO1VBQUEsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDVEw7O0FEV0k7RUFDQyxTQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLDZCQUFBO0FDVEw7O0FEZ0JBO0VBQ0MscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2JEOztBRGVDO0VBQ0MsZ0NBQUE7QUNiRjs7QURnQkM7RUFDQyxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO1VBQUEsa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDZEY7O0FEaUJDO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBRUEsNkJBQUE7QUNoQkY7O0FEa0JDO0VBQ0MsY0FBQTtBQ2hCRjs7QURrQkM7RUFDQyxjQUFBO0FDaEJGOztBRGtCRTtFQUNDLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxzQkFBQTtBQ2hCSDs7QURrQkU7RUFDQyxXQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBQ2hCSDs7QURtQkM7RUFDQyw4Q0FBQTtVQUFBLHNDQUFBO0FDakJGOztBRG9CRTtFQUNDLGtCQUFBO0FDbEJIOztBRG9CRTtFQUNDLFVBQUE7RUFDQSxZQUFBO0FDbEJIOztBRHFCRztFQUNDLFlBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtBQ25CSjs7QURxQkc7RUFFQyxtQkFBQTtBQ3BCSjs7QUR1Qkk7RUFDQyx5Q0FBQTtVQUFBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ3JCTDs7QUR1Qkk7RUFDQyxTQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLDZCQUFBO0FDckJMIiwiZmlsZSI6InNyYy9hcHAvdWkvZm9ybS1mb290ZXIvZm9ybS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcblx0cG9zaXRpb246IHN0aWNreTtcblx0Ym90dG9tOiAwO1xuXHR6LWluZGV4OiA5OTtcbn1cblxuYnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJvcmRlcjogbm9uZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG4vKiBNaXhpbnMgKi9cbkBtaXhpbiBncmFkaWVudEJnKCRkaXJlY3Rpb24sICRzdGFydENvbG9yLCAkZW5kQ29sb3IpIHtcblx0YmFja2dyb3VuZDogJHN0YXJ0Q29sb3I7XG5cdGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRzdGFydENvbG9yIDAlLCAkZW5kQ29sb3IgODAlLCAkZW5kQ29sb3IgMTAwJSk7XG5cdGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRzdGFydENvbG9yIDAlLCAkZW5kQ29sb3IgODAlLCAkZW5kQ29sb3IgMTAwJSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkc3RhcnRDb2xvciAwJSwgJGVuZENvbG9yIDgwJSwgJGVuZENvbG9yIDEwMCUpO1xufVxuXG4vKiBiZyBzaG9ydGNvZGVzICovXG4ucHJpbWFyeSBzcGFuLFxuLnByaW1hcnk6YmVmb3JlIHtcblx0QGluY2x1ZGUgZ3JhZGllbnRCZygtNDVkZWcsICNmNWI4MDAsICNmZmNjMzMpO1xufVxuLyogZmFuY3kgQnV0dG9uICovXG4ucHJpbWFyeSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRjb2xvcjogIzAwMDAwMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXG5cdCY6ZGlzYWJsZWQge1xuXHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHRcdGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xuXHR9XG5cdCYucHJpbWFyeSB7XG5cdFx0dGV4dC1zaGFkb3c6IDBweCAwcHggMXB4ICNmZjgwMDg7XG5cdH1cblxuXHQmOmJlZm9yZSB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogLTFweDtcblx0XHRsZWZ0OiAxMHB4O1xuXHRcdHJpZ2h0OiAxMHB4O1xuXHRcdHotaW5kZXg6IC0xO1xuXHRcdGJvcmRlci1yYWRpdXM6IDJlbTtcblx0XHRmaWx0ZXI6IGJsdXIoMTRweCkgYnJpZ2h0bmVzcygwLjkpO1xuXHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG5cdH1cblxuXHRzcGFuIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0cGFkZGluZzogMTBweCAyMHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0ei1pbmRleDogMjtcblx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBmaWx0ZXI7XG5cdFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcblx0fVxuXHQmOmZvY3VzIHtcblx0XHRjb2xvcjogIzAwMDAwMDtcblx0fVxuXHQmOmhvdmVyIHtcblx0XHRjb2xvcjogIzAwMDAwMDtcblxuXHRcdHNwYW4ge1xuXHRcdFx0ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSkgY29udHJhc3QoMS4yKTtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMC45Nik7XG5cdFx0fVxuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGJvdHRvbTogM3B4O1xuXHRcdFx0ZmlsdGVyOiBibHVyKDZweCkgYnJpZ2h0bmVzcygwLjgpO1xuXHRcdH1cblx0fVxuXHQmOmFjdGl2ZSBzcGFuIHtcblx0XHRmaWx0ZXI6IGJyaWdodG5lc3MoMC43NSkgY29udHJhc3QoMS43KTtcblx0fVxuXHQmLnBvcC1vbmhvdmVyIHtcblx0XHRzcGFuIHtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHR9XG5cdFx0JjpiZWZvcmUge1xuXHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdGJvdHRvbTogMTBweDtcblx0XHR9XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdGJvdHRvbTogLTdweDtcblx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdFx0ZmlsdGVyOiBibHVyKDE2cHgpO1xuXHRcdFx0fVxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdC8vIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdFx0XHR9XG5cdFx0XHQmOmFjdGl2ZSB7XG5cdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdGZpbHRlcjogYnJpZ2h0bmVzcygxKSBjb250cmFzdCgxKTtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0ZmlsdGVyOiBibHVyKDVweCkgYnJpZ2h0bmVzcygwLjg1KTtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4uc2Vjb25kYXJ5IHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGNvbG9yOiAjZDZkNmQ2O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG1hcmdpbi1sZWZ0OiA4cHg7XG5cblx0Ji5wcmltYXJ5IHtcblx0XHR0ZXh0LXNoYWRvdzogMHB4IDBweCAxcHggI2ZmODAwODtcblx0fVxuXG5cdCY6YmVmb3JlIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0Ym90dG9tOiAtMXB4O1xuXHRcdGxlZnQ6IDEwcHg7XG5cdFx0cmlnaHQ6IDEwcHg7XG5cdFx0ei1pbmRleDogLTE7XG5cdFx0Ym9yZGVyLXJhZGl1czogMmVtO1xuXHRcdGZpbHRlcjogYmx1cigxNHB4KSBicmlnaHRuZXNzKDAuOSk7XG5cdFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcblx0fVxuXG5cdHNwYW4ge1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR6LWluZGV4OiAyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XG5cdFx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgZmlsdGVyO1xuXHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcblx0fVxuXHQmOmZvY3VzIHtcblx0XHRjb2xvcjogI2ZmZmZmZjtcblx0fVxuXHQmOmhvdmVyIHtcblx0XHRjb2xvcjogI2ZmZmZmZjtcblxuXHRcdHNwYW4ge1xuXHRcdFx0ZmlsdGVyOiBicmlnaHRuZXNzKDAuOSkgY29udHJhc3QoMS4yKTtcblx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMC45Nik7XG5cdFx0fVxuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGJvdHRvbTogM3B4O1xuXHRcdFx0ZmlsdGVyOiBibHVyKDZweCkgYnJpZ2h0bmVzcygwLjgpO1xuXHRcdH1cblx0fVxuXHQmOmFjdGl2ZSBzcGFuIHtcblx0XHRmaWx0ZXI6IGJyaWdodG5lc3MoMC43NSkgY29udHJhc3QoMS43KTtcblx0fVxuXHQmLnBvcC1vbmhvdmVyIHtcblx0XHRzcGFuIHtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHR9XG5cdFx0JjpiZWZvcmUge1xuXHRcdFx0b3BhY2l0eTogMDtcblx0XHRcdGJvdHRvbTogMTBweDtcblx0XHR9XG5cdFx0Jjpob3ZlciB7XG5cdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdGJvdHRvbTogLTdweDtcblx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdFx0ZmlsdGVyOiBibHVyKDE2cHgpO1xuXHRcdFx0fVxuXHRcdFx0c3BhbiB7XG5cdFx0XHRcdC8vIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdFx0XHR9XG5cdFx0XHQmOmFjdGl2ZSB7XG5cdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdGZpbHRlcjogYnJpZ2h0bmVzcygxKSBjb250cmFzdCgxKTtcblx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xuXHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHRcdFx0ZmlsdGVyOiBibHVyKDVweCkgYnJpZ2h0bmVzcygwLjg1KTtcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLyogTWl4aW5zICovXG4vKiBiZyBzaG9ydGNvZGVzICovXG4ucHJpbWFyeSBzcGFuLFxuLnByaW1hcnk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogI2Y1YjgwMDtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZjViODAwIDAlLCAjZmZjYzMzIDgwJSwgI2ZmY2MzMyAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCAjZjViODAwIDAlLCAjZmZjYzMzIDgwJSwgI2ZmY2MzMyAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00NWRlZywgI2Y1YjgwMCAwJSwgI2ZmY2MzMyA4MCUsICNmZmNjMzMgMTAwJSk7XG59XG5cbi8qIGZhbmN5IEJ1dHRvbiAqL1xuLnByaW1hcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcmltYXJ5OmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xufVxuLnByaW1hcnkucHJpbWFyeSB7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCAjZmY4MDA4O1xufVxuLnByaW1hcnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTFweDtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IC0xO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIGZpbHRlcjogYmx1cigxNHB4KSBicmlnaHRuZXNzKDAuOSk7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuLnByaW1hcnkgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgZmlsdGVyO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cbi5wcmltYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ucHJpbWFyeTpob3ZlciB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnByaW1hcnk6aG92ZXIgc3BhbiB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpIGNvbnRyYXN0KDEuMik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45Nik7XG59XG4ucHJpbWFyeTpob3ZlcjpiZWZvcmUge1xuICBib3R0b206IDNweDtcbiAgZmlsdGVyOiBibHVyKDZweCkgYnJpZ2h0bmVzcygwLjgpO1xufVxuLnByaW1hcnk6YWN0aXZlIHNwYW4ge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC43NSkgY29udHJhc3QoMS43KTtcbn1cbi5wcmltYXJ5LnBvcC1vbmhvdmVyIHNwYW4ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ucHJpbWFyeS5wb3Atb25ob3ZlcjpiZWZvcmUge1xuICBvcGFjaXR5OiAwO1xuICBib3R0b206IDEwcHg7XG59XG4ucHJpbWFyeS5wb3Atb25ob3Zlcjpob3ZlcjpiZWZvcmUge1xuICBib3R0b206IC03cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYmx1cigxNnB4KTtcbn1cbi5wcmltYXJ5LnBvcC1vbmhvdmVyOmhvdmVyIHNwYW4ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLnByaW1hcnkucG9wLW9uaG92ZXI6aG92ZXI6YWN0aXZlIHNwYW4ge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMSkgY29udHJhc3QoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLnByaW1hcnkucG9wLW9uaG92ZXI6aG92ZXI6YWN0aXZlOmJlZm9yZSB7XG4gIGJvdHRvbTogMDtcbiAgZmlsdGVyOiBibHVyKDVweCkgYnJpZ2h0bmVzcygwLjg1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5zZWNvbmRhcnkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNkNmQ2ZDY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5zZWNvbmRhcnkucHJpbWFyeSB7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCAjZmY4MDA4O1xufVxuLnNlY29uZGFyeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMXB4O1xuICBsZWZ0OiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogLTE7XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgZmlsdGVyOiBibHVyKDE0cHgpIGJyaWdodG5lc3MoMC45KTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG4uc2Vjb25kYXJ5IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGZpbHRlcjtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG4uc2Vjb25kYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uc2Vjb25kYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uc2Vjb25kYXJ5OmhvdmVyIHNwYW4ge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KSBjb250cmFzdCgxLjIpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTYpO1xufVxuLnNlY29uZGFyeTpob3ZlcjpiZWZvcmUge1xuICBib3R0b206IDNweDtcbiAgZmlsdGVyOiBibHVyKDZweCkgYnJpZ2h0bmVzcygwLjgpO1xufVxuLnNlY29uZGFyeTphY3RpdmUgc3BhbiB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjc1KSBjb250cmFzdCgxLjcpO1xufVxuLnNlY29uZGFyeS5wb3Atb25ob3ZlciBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLnNlY29uZGFyeS5wb3Atb25ob3ZlcjpiZWZvcmUge1xuICBvcGFjaXR5OiAwO1xuICBib3R0b206IDEwcHg7XG59XG4uc2Vjb25kYXJ5LnBvcC1vbmhvdmVyOmhvdmVyOmJlZm9yZSB7XG4gIGJvdHRvbTogLTdweDtcbiAgb3BhY2l0eTogMTtcbiAgZmlsdGVyOiBibHVyKDE2cHgpO1xufVxuLnNlY29uZGFyeS5wb3Atb25ob3Zlcjpob3ZlciBzcGFuIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5zZWNvbmRhcnkucG9wLW9uaG92ZXI6aG92ZXI6YWN0aXZlIHNwYW4ge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMSkgY29udHJhc3QoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xufVxuLnNlY29uZGFyeS5wb3Atb25ob3Zlcjpob3ZlcjphY3RpdmU6YmVmb3JlIHtcbiAgYm90dG9tOiAwO1xuICBmaWx0ZXI6IGJsdXIoNXB4KSBicmlnaHRuZXNzKDAuODUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FormFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ui-form-footer',
                templateUrl: './form-footer.component.html',
                styleUrls: ['./form-footer.component.scss']
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, { status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/list-view/list-view.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/list-view/list-view.component.ts ***!
  \*****************************************************/
/*! exports provided: ListViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListViewComponent", function() { return ListViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ListViewComponent_nb_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-list-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ListViewComponent_nb_list_item_2_Template_nb_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r254); const item_r252 = ctx.$implicit; const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r253.onItemClicked(item_r252); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r252 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](item_r252.name);
} }
class ListViewComponent {
    constructor() {
        this.onclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onItemClicked(item) {
        this.onclick.emit(item);
    }
}
ListViewComponent.??fac = function ListViewComponent_Factory(t) { return new (t || ListViewComponent)(); };
ListViewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ListViewComponent, selectors: [["ui-list-view"]], inputs: { list: "list" }, outputs: { onclick: "onclick" }, decls: 3, vars: 1, consts: [["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"]], template: function ListViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, ListViewComponent_nb_list_item_2_Template, 3, 1, "nb-list-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.list);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbListItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2xpc3Qtdmlldy9saXN0LXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ListViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ui-list-view',
                templateUrl: './list-view.component.html',
                styleUrls: ['./list-view.component.scss']
            }]
    }], function () { return []; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/navbar/navbar.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/navbar/navbar.component.ts ***!
  \***********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavbarComponent {
    constructor(router) {
        this.router = router;
        this.sidenavStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showSidenav = false;
    }
    ngOnInit() {
        this.sidenavStatus.emit(false);
    }
    onSettingsClicked() {
    }
    sidenavToggle() {
        this.showSidenav = !this.showSidenav;
        this.sidenavStatus.emit(this.showSidenav);
    }
}
NavbarComponent.??fac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], outputs: { sidenavStatus: "sidenavStatus" }, decls: 11, vars: 0, consts: [[1, "navbar"], [1, "icon-button", "toggle-sidenav", 3, "click"], ["viewBox", "0 0 100 80", "width", "24", "height", "24"], ["width", "100", "height", "16", "rx", "8", "fill", "#f5f5f5"], ["y", "30", "width", "100", "height", "16", "rx", "8", "fill", "#f5f5f5"], ["y", "60", "width", "100", "height", "16", "rx", "8", "fill", "#f5f5f5"], [1, "logo-container"], ["src", "assets/icons/logo.png", 1, "nav-logo"], [1, "nav-menu"], ["routerLink", "preferences", 1, "icon-button"], ["src", "assets/app/setting.png", "alt", "setting-icon", 1, "icon"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavbarComponent_Template_div_click_1_listener() { return ctx.sidenavToggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "rect", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "rect", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????namespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #212121;\n  position: fixed;\n  width: 100%;\n  z-index: 99;\n  display: flex;\n  flex-direction: row;\n  height: 48px;\n}\n.navbar[_ngcontent-%COMP%]   .nav-logo[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 6px;\n  height: 32px;\n  margin-left: 16px;\n}\n.navbar[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  float: right;\n}\n.icon-button[_ngcontent-%COMP%] {\n  background-color: #212121;\n  margin: 6px 24px 6px 24px;\n  border-radius: 4px;\n  padding: 6px;\n  line-height: 0px;\n  display: inline-block;\n  transition: 0.2s;\n}\n.icon-button[_ngcontent-%COMP%]:hover {\n  background-color: #777777;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n}\n.logo-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media screen and (max-width: 768px) {\n  .logo-container[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .nav-logo[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .icon-button[_ngcontent-%COMP%] {\n    margin: 6px 16px 6px 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvbmF2YmFyL0Q6XFxEZXZlbG9wbWVudFxcQW5ndWxhclxcYW5nbGUvc3JjXFxhcHBcXHVpXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRVI7QURBSTtFQUNJLFlBQUE7QUNFUjtBREdBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0FKO0FEQ0k7RUFDSSx5QkFBQTtBQ0NSO0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0E7RUFDSSxPQUFBO0FDRUo7QURBQTtFQUNJO0lBQ0ksa0JBQUE7RUNHTjs7RURERTtJQUNJLGlCQUFBO0lBQ0Esa0JBQUE7RUNJTjs7RURERTtJQUNJLHlCQUFBO0VDSU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VpL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIC5uYXYtbG9nbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG4gICAgLm5hdi1tZW51IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cbi8vIH1cblxuLmljb24tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICAgIG1hcmdpbjogNnB4IDI0cHggNnB4IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBsaW5lLWhlaWdodDogMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3Nzc3O1xuICAgIH1cbn1cbi5pY29uIHtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG59XG4ubG9nby1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLm5hdi1sb2dvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAuaWNvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW46IDZweCAxNnB4IDZweCAxNnB4O1xuICAgIH1cbn1cbiIsIi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLm5hdmJhciAubmF2LWxvZ28ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4ubmF2YmFyIC5uYXYtbWVudSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmljb24tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcbiAgbWFyZ2luOiA2cHggMjRweCA2cHggMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGxpbmUtaGVpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbi5pY29uLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi5pY29uIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgZmxleDogMTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxvZ28tY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubmF2LWxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuXG4gIC5pY29uLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiA2cHggMTZweCA2cHggMTZweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { sidenavStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/sidenav/sidenav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/ui/sidenav/sidenav.component.ts ***!
  \*************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1) { return { show: a0, hide: a1 }; };
function SidenavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidenavComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r257); const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r256.showMaster = !ctx_r256.showMaster; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Master ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Part");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Mould");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Machine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Employee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidenavComponent_div_0_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r257); const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r258.showProduction = !ctx_r258.showProduction; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Production ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidenavComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r257); const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r259.showProduction = !ctx_r259.showProduction; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Quality ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidenavComponent_div_0_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r257); const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r260.showProduction = !ctx_r260.showProduction; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Inventory ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidenavComponent_div_0_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r257); const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r261.showProduction = !ctx_r261.showProduction; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Engineering ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SidenavComponent_div_0_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r257); const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r262.showProduction = !ctx_r262.showProduction; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Finance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Loading Sheet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction2"](1, _c0, ctx_r255.showMaster, !ctx_r255.showMaster));
} }
class SidenavComponent {
    constructor() {
        this.showMaster = true;
        this.showProduction = true;
    }
    // items: NbMenuItem[] = [
    //   {
    //     title: 'Dashboard',
    //     icon: 'pie-chart-outline',
    //     link: '/'
    //   },
    //   {
    //     title: 'Master',
    //     expanded: false,
    //     children: [
    //       {
    //         title: 'Materials',
    //         icon: 'copy-outline',
    //         link: '/materials'
    //       },
    //       {
    //         title: 'Part',
    //         icon: 'cube-outline',
    //         link: '/parts'
    //       },
    //       {
    //         title: 'Machine',
    //         icon: 'pantone-outline',
    //         link: '/machines'
    //       },
    //       {
    //         title: 'Mould',
    //         icon: 'printer-outline',
    //         link: '/moulds'
    //       },
    //       {
    //         title: 'Employees',
    //         icon: 'people-outline',
    //         link: '/employees'
    //       },
    //       {
    //         title: 'Customers',
    //         icon: 'car-outline',
    //         link: '/customers'
    //       },
    //       {
    //         title: 'Vendors',
    //         icon: 'shopping-cart-outline',
    //         link: '/vendors'
    //       },
    //     ]
    //   }, {
    //     title: 'Planning and Control',
    //     children: [
    //       {
    //         title: 'Schedule',
    //         icon: 'edit-2-outline',
    //         link: 'schedule'
    //       },
    //       {
    //         title: 'Loading / Dispatch sheet',
    //         icon: 'car-outline',
    //         link: 'loading'
    //       }
    //     ]
    //   },
    //   {
    //     title: 'Production',
    //     expanded: false,
    //   }, {
    //     title: 'Inventory',
    //     expanded: false
    //   },
    //   {
    //     title: 'Finance',
    //     children: [
    //       {
    //         title: 'Invoice',
    //         icon: 'car-outline',
    //         link: 'invoice'
    //       }
    //     ]
    //   },
    // ];
    ngOnInit() {
    }
}
SidenavComponent.??fac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], inputs: { showSidenav: "showSidenav" }, decls: 1, vars: 1, consts: [["id", "mySidenav", "class", "sidenav", 4, "ngIf"], ["id", "mySidenav", 1, "sidenav"], ["href", "/dashboard"], [1, "dropdown-btn", 3, "click"], [1, "fa", "fa-caret-down"], [1, "dropdown-container", 3, "ngClass"], ["href", "/materials"], ["href", "/parts"], ["href", "/mould"], ["href", "/machines"], ["href", "/employees"], ["href", "/customers"], ["href", "/vendors"], ["href", "/schedule"], ["href", "/loading"], ["href", "/invoice"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, SidenavComponent_div_0_Template, 42, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.showSidenav);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 250px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  \n  padding-top: 60px;\n  \n  transition: 0.5s;\n  \n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dropdown-btn[_ngcontent-%COMP%] {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 16px;\n  color: #818181;\n  display: block;\n  transition: 40.3s;\n  background: none;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  text-align: left;\n  width: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown-btn[_ngcontent-%COMP%]:hover {\n  color: #f1f1f1;\n}\n.dropdown-container[_ngcontent-%COMP%] {\n  background-color: #262626;\n  padding-left: 8px;\n}\n.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n@media only screen and (max-width: 576px) {\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dropdown-btn[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvc2lkZW5hdi9EOlxcRGV2ZWxvcG1lbnRcXEFuZ3VsYXJcXGFuZ2xlL3NyY1xcYXBwXFx1aVxcc2lkZW5hdlxcc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdWkvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUFBO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQW9CLDhCQUFBO0VBQ3BCLGlCQUFBO0VBQW1CLG9DQUFBO0VBQ25CLGdCQUFBO0VBQWtCLHlEQUFBO0FDSXRCO0FEREEsOEJBQUE7QUFDQTs7RUFFSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0lKO0FEREEsaUVBQUE7QUFDQTs7RUFFSSxjQUFBO0FDSUo7QUREQTtFQUNJLHlCQUFBO0VBQ0EsaUJBQUE7QUNJSjtBREZBO0VBQ0ksY0FBQTtBQ0tKO0FESEE7RUFDSSxhQUFBO0FDTUo7QURIQSxzSEFBQTtBQUVBLGdJQUFBO0FBQ0E7RUFJSTs7SUFFSSxlQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3VpL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBzaWRlIG5hdmlnYXRpb24gbWVudSAqL1xuLnNpZGVuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICBwYWRkaW5nLXRvcDogNjBweDsgLyogUGxhY2UgY29udGVudCA2MHB4IGZyb20gdGhlIHRvcCAqL1xuICAgIHRyYW5zaXRpb246IDAuNXM7IC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cbn1cblxuLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xuLnNpZGVuYXYgYSxcbi5kcm9wZG93bi1idG4ge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDMycHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzgxODE4MTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0cmFuc2l0aW9uOiA0MC4zcztcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cbi5zaWRlbmF2IGE6aG92ZXIsXG4uZHJvcGRvd24tYnRuOmhvdmVyIHtcbiAgICBjb2xvcjogI2YxZjFmMTtcbn1cblxuLmRyb3Bkb3duLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTdHlsZSBwYWdlIGNvbnRlbnQgLSB1c2UgdGhpcyBpZiB5b3Ugd2FudCB0byBwdXNoIHRoZSBwYWdlIGNvbnRlbnQgdG8gdGhlIHJpZ2h0IHdoZW4geW91IG9wZW4gdGhlIHNpZGUgbmF2aWdhdGlvbiAqL1xuXG4vKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGVuYXYgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAuc2lkZW5hdiB7XG4gICAgICAgIC8vIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIH1cbiAgICAuc2lkZW5hdiBhLFxuICAgIC5kcm9wZG93bi1idG4ge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxufVxuIiwiLyogVGhlIHNpZGUgbmF2aWdhdGlvbiBtZW51ICovXG4uc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICAvKiBQbGFjZSBjb250ZW50IDYwcHggZnJvbSB0aGUgdG9wICovXG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIC8qIDAuNSBzZWNvbmQgdHJhbnNpdGlvbiBlZmZlY3QgdG8gc2xpZGUgaW4gdGhlIHNpZGVuYXYgKi9cbn1cblxuLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xuLnNpZGVuYXYgYSxcbi5kcm9wZG93bi1idG4ge1xuICBwYWRkaW5nOiA4cHggOHB4IDhweCAzMnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM4MTgxODE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiA0MC4zcztcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cbi5zaWRlbmF2IGE6aG92ZXIsXG4uZHJvcGRvd24tYnRuOmhvdmVyIHtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5kcm9wZG93bi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTdHlsZSBwYWdlIGNvbnRlbnQgLSB1c2UgdGhpcyBpZiB5b3Ugd2FudCB0byBwdXNoIHRoZSBwYWdlIGNvbnRlbnQgdG8gdGhlIHJpZ2h0IHdoZW4geW91IG9wZW4gdGhlIHNpZGUgbmF2aWdhdGlvbiAqL1xuLyogT24gc21hbGxlciBzY3JlZW5zLCB3aGVyZSBoZWlnaHQgaXMgbGVzcyB0aGFuIDQ1MHB4LCBjaGFuZ2UgdGhlIHN0eWxlIG9mIHRoZSBzaWRlbmF2IChsZXNzIHBhZGRpbmcgYW5kIGEgc21hbGxlciBmb250IHNpemUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5zaWRlbmF2IGEsXG4uZHJvcGRvd24tYnRuIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SidenavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sidenav',
                templateUrl: './sidenav.component.html',
                styleUrls: ['./sidenav.component.scss']
            }]
    }], function () { return []; }, { showSidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/ui/toast.service.ts":
/*!*************************************!*\
  !*** ./src/app/ui/toast.service.ts ***!
  \*************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");



class ToastService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    success(message, title) {
        this.toastr.success(message, title || '', { closeButton: true, timeOut: 5000 });
    }
}
ToastService.??fac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
ToastService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ToastService, factory: ToastService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/vendors/vendor-edit/vendor-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vendors/vendor-edit/vendor-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: VendorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorEditComponent", function() { return VendorEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_database_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _ui_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../ui/toast.service */ "./src/app/ui/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/form-footer/form-footer.component */ "./src/app/ui/form-footer/form-footer.component.ts");










function VendorEditComponent_div_11_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter name of the Vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function VendorEditComponent_div_11_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Vendor's Name should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function VendorEditComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, VendorEditComponent_div_11_li_3_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, VendorEditComponent_div_11_li_4_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r63.name.errors == null ? null : ctx_r63.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r63.name.errors == null ? null : ctx_r63.name.errors.minlength);
} }
function VendorEditComponent_div_18_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter an Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function VendorEditComponent_div_18_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Address should contain atleast 3 characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function VendorEditComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, VendorEditComponent_div_18_li_3_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, VendorEditComponent_div_18_li_4_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r64.address.errors == null ? null : ctx_r64.address.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r64.address.errors == null ? null : ctx_r64.address.errors.minlength);
} }
function VendorEditComponent_div_25_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a Pincode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function VendorEditComponent_div_25_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Part Name should contain 6 numbers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function VendorEditComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, VendorEditComponent_div_25_li_3_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, VendorEditComponent_div_25_li_4_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r65.pincode.errors == null ? null : ctx_r65.pincode.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r65.pincode.errors == null ? null : ctx_r65.pincode.errors.minlength);
} }
function VendorEditComponent_div_32_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Please enter a valid GSTIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function VendorEditComponent_div_32_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "GSTIN should contain 15 only characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function VendorEditComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, VendorEditComponent_div_32_li_3_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, VendorEditComponent_div_32_li_4_Template, 3, 0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r66.gstin.errors == null ? null : ctx_r66.gstin.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (ctx_r66.gstin.errors == null ? null : ctx_r66.gstin.errors.minlength) || (ctx_r66.gstin.errors == null ? null : ctx_r66.gstin.errors.maxlength));
} }
class VendorEditComponent {
    // MAIN
    constructor(fb, db, toast, route, location) {
        this.fb = fb;
        this.db = db;
        this.toast = toast;
        this.route = route;
        this.location = location;
        this.validity = false;
    }
    // GETTERS AND SETTERS
    get name() {
        return this.form.get('name');
    }
    get address() {
        return this.form.get('address');
    }
    get pincode() {
        return this.form.get('pincode');
    }
    get gstin() {
        return this.form.get('gstin');
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.selectedId = params.get('id');
            this.fetchObject();
        });
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            gstin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]]
        });
        this.form.valueChanges.subscribe(() => {
            this.validity = this.form.valid;
        });
    }
    fetchObject() {
        if (this.selectedId) {
            this.selectedObject = this.db.getVendor(this.selectedId);
            this.selectedObject.subscribe((data) => {
                this.form.setValue({
                    name: data.name,
                    address: data.address,
                    pincode: data.pincode,
                    gstin: data.gstin
                });
            });
        }
    }
    onButtonClicked(clickedButton) {
        if (clickedButton === 'save') {
            this.db.addVendor(this.form.value, this.selectedId)
                .then(() => {
                this.toast.success('Vendor updated succesfully');
                this.form.reset();
                if (this.selectedId) {
                    this.location.back();
                }
            });
        }
    }
}
VendorEditComponent.??fac = function VendorEditComponent_Factory(t) { return new (t || VendorEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
VendorEditComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: VendorEditComponent, selectors: [["app-vendor-edit"]], decls: 34, vars: 14, consts: [[3, "formGroup"], [1, "form-group"], ["for", "name", 1, "label"], [1, "row"], [1, "col-md-6"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "name", "id", "name", "placeholder", "eg. Morakhot Industries Pvt. Ltd."], ["class", "col-md-6", 4, "ngIf"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "address", "id", "address", "placeholder", "eg. No 6/26 Shastri Bhavan                                                                                              2nd Floor, Haddows Road,                                                                  Nungambakkam", "rows", "3", 1, "form-control"], [1, "col-md-2", "col-5"], ["type", "number", "nbInput", "", "fullWidth", "", "formControlName", "pincode", "id", "pincode", "placeholder", "eg. 600001", 1, "form-control"], [1, "col-md-3", "col-8"], ["type", "text", "nbInput", "", "fullWidth", "", "formControlName", "gstin", "id", "gstin", "placeholder", "eg. 33AABCT3518Q1Z3", 1, "form-control"], [3, "status", "event"], [1, "error"], [4, "ngIf"]], template: function VendorEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Vendor Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](11, VendorEditComponent_div_11_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, VendorEditComponent_div_18_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Pincode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](25, VendorEditComponent_div_25_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "GSTIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](32, VendorEditComponent_div_32_Template, 5, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "ui-form-footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("event", function VendorEditComponent_Template_ui_form_footer_event_33_listener($event) { return ctx.onButtonClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.address.invalid && (ctx.address.dirty || ctx.address.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.address.invalid && (ctx.address.dirty || ctx.address.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.pincode.invalid && (ctx.pincode.dirty || ctx.pincode.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.pincode.invalid && (ctx.pincode.dirty || ctx.pincode.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("is-invalid", ctx.gstin.invalid && (ctx.gstin.dirty || ctx.gstin.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.gstin.invalid && (ctx.gstin.dirty || ctx.gstin.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("status", ctx.validity);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _ui_form_footer_form_footer_component__WEBPACK_IMPORTED_MODULE_7__["FormFooterComponent"]], styles: [".form-group[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\nul[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.error[_ngcontent-%COMP%] {\n  background-color: rgba(226, 75, 75, 0.1);\n  border-left: 6px solid #e24b4b;\n  border-radius: 4px;\n  padding-left: 8px;\n}\n\n.error[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  line-height: 38px;\n}\n\n.error[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 38px;\n}\n\n@media only screen and (max-width: 767.95px) {\n  section[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .error[_ngcontent-%COMP%] {\n    margin-top: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9ycy92ZW5kb3ItZWRpdC9EOlxcRGV2ZWxvcG1lbnRcXEFuZ3VsYXJcXGFuZ2xlL3NyY1xcYXBwXFx2ZW5kb3JzXFx2ZW5kb3ItZWRpdFxcdmVuZG9yLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZlbmRvcnMvdmVuZG9yLWVkaXQvdmVuZG9yLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREdBO0VBQ0ksd0NBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFSTtFQUNFLGlCQUFBO0FDQ047O0FEQ0k7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRU47O0FEQ0U7RUFDRTtJQUNFLHNCQUFBO0VDRUo7O0VEQUU7SUFDRSxlQUFBO0VDR0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvcnMvdmVuZG9yLWVkaXQvdmVuZG9yLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbiAgXG4gIHVse1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgXG4gIC8vIFZhbGlkYXRpb25cbi5lcnJvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiw3NSw3NSwwLjEpO1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgcmdiYSgyMjYsNzUsNzUsMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIH1cbiAgICAuZXJyb3Igc21hbGx7XG4gICAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICB9XG4gICAgLmVycm9yPmRpdntcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2Ny45NXB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuZXJyb3J7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuICB9XG4gIFxuICAiLCIuZm9ybS1ncm91cCB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxudWwge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNiwgNzUsIDc1LCAwLjEpO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICNlMjRiNGI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5lcnJvciBzbWFsbCB7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xufVxuXG4uZXJyb3IgPiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM4cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3Ljk1cHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5lcnJvciB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VendorEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vendor-edit',
                templateUrl: './vendor-edit.component.html',
                styleUrls: ['./vendor-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_database_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }, { type: _ui_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/vendors/vendor-list/vendor-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/vendors/vendor-list/vendor-list.component.ts ***!
  \**************************************************************/
/*! exports provided: VendorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorListComponent", function() { return VendorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/database/database.service */ "./src/app/services/database/database.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/list-view/list-view.component */ "./src/app/ui/list-view/list-view.component.ts");






class VendorListComponent {
    constructor(db, router) {
        this.db = db;
        this.router = router;
        this.sort = '1';
        this.data = [];
    }
    ngOnInit() {
        this.db.getVendors().subscribe((data) => {
            this.data = data;
        });
    }
    onItemSelected(item) {
        this.router.navigate([`/vendors/${item.id}`]);
    }
}
VendorListComponent.??fac = function VendorListComponent_Factory(t) { return new (t || VendorListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
VendorListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: VendorListComponent, selectors: [["app-vendor-list"]], decls: 11, vars: 1, consts: [[1, "row"], [1, "col-4"], ["nbButton", "", "size", "small", "routerLink", "/vendors/new", "status", "primary"], [1, "col-6"], ["icon", "search-outline"], ["icon", "power-outline"], ["icon", "person-outline"], ["icon", "home-outline"], [3, "list", "onclick"]], template: function VendorListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "New Vendor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "nb-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "nb-action", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "nb-action", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Views");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "nb-action", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "nb-action", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ui-list-view", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("onclick", function VendorListComponent_Template_ui_list_view_onclick_10_listener($event) { return ctx.onItemSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("list", ctx.data);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionsComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbActionComponent"], _ui_list_view_list_view_component__WEBPACK_IMPORTED_MODULE_4__["ListViewComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvcnMvdmVuZG9yLWxpc3QvdmVuZG9yLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](VendorListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vendor-list',
                templateUrl: './vendor-list.component.html',
                styleUrls: ['./vendor-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_database_database_service__WEBPACK_IMPORTED_MODULE_1__["DatabaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBKj6hFakE8vGcw_QJa7jXTAeHexrS2NAw',
        authDomain: 'angle-dev.firebaseapp.com',
        databaseURL: 'https://angle-dev.firebaseio.com',
        projectId: 'angle-dev',
        storageBucket: 'angle-dev.appspot.com',
        messagingSenderId: '222777721610',
        appId: '1:222777721610:web:839cf35b5683dae34ff0f3',
        measurementId: 'G-KXB860QFML'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\Angular\angle\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);