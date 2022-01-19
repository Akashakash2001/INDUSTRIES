import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of, scheduled } from 'rxjs';
import { ToastService } from 'src/app/ui/toast.service';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  load: any = [];
  data: any = [];
  customer: any;
  selectedCustomer = '';
  parts: Observable<any>;
  quantity: Observable<any>;
  validity = true;
  selectedObject: any;
  private selectedId: string;
  month = null;
  filteredOptions$: any;
  options: any;



  
  // get schedule() {
  //   return this.scheduleForm.get('schedule');
  // }
  // get dispatched() {
  //   return this.scheduleForm.get('quantity');
  // }
  // get balance() {
  //   return this.scheduleForm.get('balance');
  // }
  // get completed() {
  //   return this.scheduleForm.get('completed');
  // }
  get partName() {
    return this.scheduleForm.get('partName');
  }
  get items() {
    return this.scheduleForm.get('items') as FormArray;
    
  }


  constructor(
    private db: DatabaseService,
    private firestore: AngularFirestore,
    private toast: ToastService,
    private location: Location,
    private fb: FormBuilder,
    // private route: ActivatedRoute,
  ) { }

  scheduleForm: FormGroup;


  ngOnInit(): void {

    this.db.getLoadingSheetList().subscribe ((load) => {
      this.load =load;
    });

    this.db.getCustomers().subscribe((data) => {
      this.data = data;
      this.parts = this.db.getParts();
      // this.route.paramMap.subscribe((params: ParamMap) => {
      //   this.selectedId = params.get('id');

      // });

      this.scheduleForm = this.fb.group({
        id: [''],
        items: this.fb.array([]),
        typeOfDocument: ['']
      });
      

      this.onMonthChanged();
      // this.loadLoading();
    });
    
    let curdate = new Date().getFullYear().toString() + '-' + (new Date().getMonth() + 1).toString();
    console.log(curdate);
    this.month = curdate;
    this.scheduleForm.valueChanges.subscribe(() => {
      this.validity = this.scheduleForm.valid; 
    });
    
  }
  
  // private loadLoading() {
  //   this.db.getLoadingedit(this.quantity)
  //     .subscribe((list: any) => {
  //       this.options = list;
  //       console.log(this.loadLoading)

  //     })

  // }

  onMonthChanged() {
    this.scheduleForm.reset();
    console.log(this.month)
    const date = new Date(this.month)
    const monthNames = ["jan", "feb", "mar", "apr", "may", "jun",
      "jul", "aug", "sep", "oct", "nov", "dec" 
    ];
    const string = date.getFullYear() + "-" + monthNames[date.getMonth()]
    // console.log(string);
    this.selectedId = string;
    this.db.getScheduleSheet(string).get()
      .toPromise()
      .then((docSnapshot) => {    
        if (docSnapshot.exists) {
          // Object exists
          this.scheduleForm.controls['id'].setValue(docSnapshot.data().id);
          this.scheduleForm.controls['typeOfDocument'].setValue("docSnapshot.data().typeOfDocument");
          for (let item of docSnapshot.data().items) {
            this.patchItem(item)
          }
          console.log(docSnapshot.data())
        } else {
          // Object does not exist
          this.scheduleForm.controls['id'].setValue(string);
          this.scheduleForm.controls['typeOfDocument'].setValue("schedule");
          this.parts.subscribe((parts) => {
            for (let part of parts) {
              console.log(part);
              this.addItem(part);
            }
          });
        }
      });
  }
  public onChange() {

    this.parts = this.firestore.collection('parts', ref => ref.where('customer', '==', this.selectedCustomer)).valueChanges();
  };

  addItem(part) {
    const item = this.fb.group({
      partName: part.name,
      partNumber: part.code,
      customer: [],
      schedule: [],
      dispatched: [],
      balance: [],
      completed: []
      
    });

    (this.scheduleForm.controls['items'] as FormArray).push(item);
  }

  patchItem(data) {
    const item = this.fb.group({
      partName: data.partName,
      partNumber: data.partNumber,
      customer: data.customer,
      schedule: data.schedule,
      dispatched: data.dispatched,
      balance: data.balance,
      completed: data.completed
      
    });
    (this.scheduleForm.controls['items'] as FormArray).push(item);
    
  }




  // ONSUBMIT
  onButtonClicked(clickedButton) {
    console.log(this.scheduleForm.value)
    // this.scheduleForm.get("typeOfDocument").setValue("schedule");
    if (clickedButton === 'save') {
      this.db.addScheduleSheet(this.scheduleForm.value, this.selectedId)
        .then(() => {
          this.toast.success('Schedule updated succesfully')   
        });
    }
  }
}