import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss']
})
export class MachineListComponent implements OnInit {
  sort: any = '1';
  data: any = [];

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit(): void {
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
