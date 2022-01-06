import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-loading-list',
  templateUrl: './loading-list.component.html',
  styleUrls: ['./loading-list.component.scss']
})
export class LoadingListComponent implements OnInit {
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  sort: any = '1';
  data: any = [];
  customers: any = [];
  selectedCustomer = '';
  parts: Observable<any>;
  validity = false;
  afs: any;
  item: any;

  constructor(private db: DatabaseService, private router: Router,private firestore: AngularFirestore) { }
  

  ngOnInit(): void {
    this.db.getLoadingSheetList().subscribe((data) => {
      this.data = data;
      console.log(data);
      
    });
    this.db.getCustomers().subscribe((data) => {
      this.customers = data;
      this.selectedCustomer
    });
    

  }
  public onChange(){
    this.parts = this.firestore.collection('parts',ref=>ref.where('customer','==',this.selectedCustomer)).valueChanges();
  }
  
  
  //PRINT FUNCTION
  printComponent(cmpName) {
    let printContents = document.getElementById(cmpName).innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
  onItemSelected(item){
    console.log(item)
    this.router.navigate([`/loading/${item.id}`]);
  }   
  
  

  onButtonClicked(clickedButton): void {
    if (clickedButton === 'save') {
      
      } else {
        

}
  }
}
