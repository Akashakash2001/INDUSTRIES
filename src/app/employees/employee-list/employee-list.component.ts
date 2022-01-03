import { Router } from '@angular/router';
import { DatabaseService } from './../../services/database/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  sort: any = '1';
  data: any = [];

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.db.getEmployees().subscribe((data) => {
      this.data = data;
    });

  }

  onItemSelected(item) {
    this.router.navigate([`/employees/${item.id}`]);
    // this.router.navigate([`/materials/${product.id}`]);
  }

}
