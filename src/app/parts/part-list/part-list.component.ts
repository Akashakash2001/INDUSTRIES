import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.scss']
})
export class PartListComponent implements OnInit {
  sort: any = '1';
  data: any = [];
  constructor(private db: DatabaseService, private router: Router) {
    this.db.getParts().subscribe((data) => {
      this.data = data;
    });
  }

  ngOnInit(): void {
  }


  onItemSelected(item) {
    console.log(item.id);
    this.router.navigate([`/parts/${item.id}`]);
    // this.router.navigate([`/materials/${product.id}`]);
  }


}
