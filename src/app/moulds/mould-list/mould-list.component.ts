import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from './../../services/database/database.service';


@Component({
  selector: 'app-mould-list',
  templateUrl: './mould-list.component.html',
  styleUrls: ['./mould-list.component.scss']
})
export class MouldListComponent implements OnInit {
  sort: any = '1';
  data: any = [];

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit(): void {
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
