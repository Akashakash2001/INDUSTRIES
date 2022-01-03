import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input() showSidenav!: boolean;
  public showMaster = true; 
  public showProduction = true;
  constructor() { }
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
  ngOnInit(): void {
  }

}
