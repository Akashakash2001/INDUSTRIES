import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  sort: any = '1';
  data: any = [];

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.db.getVendors().subscribe((data) => {
      this.data = data;
    });

  }

  onItemSelected(item) {
    this.router.navigate([`/vendors/${item.id}`]);
  }

}
