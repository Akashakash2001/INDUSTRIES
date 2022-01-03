import { DatabaseService } from './../../services/database/database.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
  sort: any = '1';
  data: any = [];

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit(): void {
    this.db.getMaterials().subscribe((data) => {
      this.data = data;
    });

  }

  onItemSelected(item) {
    this.router.navigate([`/materials/${item.id}`]);
    // this.router.navigate([`/materials/${product.id}`]);
  }

}
