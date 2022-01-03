import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  sort: any = '1';
  data: any = [];

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.db.getCustomers().subscribe((data) => {
      this.data = data;
    });

  }

  onItemSelected(item) {
    this.router.navigate([`/customers/${item.id}`]);
    // this.router.navigate([`/materials/${product.id}`]);
  }

}
