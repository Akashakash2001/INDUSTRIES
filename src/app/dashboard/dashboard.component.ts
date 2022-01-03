import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  parts: any;
  materials: any;
  machines: any;
  moulds: any;
  constructor(private db: DatabaseService) { 
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

  ngOnInit(): void {
  }

}
