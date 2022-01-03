import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  getQuantity() {
    throw new Error('Method not implemented.');
  }

  constructor(private firestore: AngularFirestore) { }
  // MATERIALS
  public addMaterial(data: any, id?: string) {
    const uid = id || this.firestore.createId();
    data.id = uid;
    return this.firestore.collection('materials').doc(uid).set(data);
  }
  public getMaterials() {
    return this.firestore.collection('materials').valueChanges();
  }
  public getMaterial(id: string) {
    return this.firestore.collection('materials').doc(id).valueChanges();
  }

  // PARTS
  public addPart(data: any, id?: string) {
    const uid = id || this.firestore.createId();
    data.id = uid;
    return this.firestore.collection('parts').doc(uid).set(data);
  }
  public getParts() {
    return this.firestore.collection('parts').valueChanges();
  }
  public getPart(id: string) {
    return this.firestore.collection('parts').doc(id).valueChanges();
  }

  // MACHINE
  public addMachine(data: any, id?: string) {
    const uid = id || this.firestore.createId();
    data.id = uid;
    return this.firestore.collection('machines').doc(uid).set(data);
  }
  public getMachines() {
    return this.firestore.collection('machines').valueChanges();
  }
  public getMachine(id: string) {
    return this.firestore.collection('machines').doc(id).valueChanges();
  }

  // MOULD
  public addMould(data: any, id?: string) {
    const uid = id || this.firestore.createId();
    data.id = uid;
    return this.firestore.collection('moulds').doc(uid).set(data);
  }
  public getMoulds() {
    return this.firestore.collection('moulds').valueChanges();
  }
  public getMould(id: string) {
    return this.firestore.collection('moulds').doc(id).valueChanges();
  }

  // EMPLOYEES
  public addEmployee(data: any, id?: string) {
    const uid = id || this.firestore.createId();
    data.id = uid;
    return this.firestore.collection('employees').doc(uid).set(data);
  }
  public getEmployees() {
    return this.firestore.collection('employees').valueChanges();
  }
  public getEmployee(id: string) {
    return this.firestore.collection('employees').doc(id).valueChanges();
  }

  // CUSTOMERS
  public addCustomer(data: any, id?: string) {
    const uid = id || this.firestore.createId();
    data.id = uid;
    return this.firestore.collection('customers').doc(uid).set(data);
  }
  public getCustomers() {
    return this.firestore.collection('customers').valueChanges();
  }
  public getCustomer(id: string) {
    return this.firestore.collection('customers').doc(id).valueChanges();
  }

  // VENDORS
  public addVendor(data: any, id?: string) {
    const uid = id || this.firestore.createId();
    data.id = uid;
    return this.firestore.collection('vendors').doc(uid).set(data);
  }
  public getVendors() {
    return this.firestore.collection('vendors').valueChanges();
  }
  public getVendor(id: string) {
    return this.firestore.collection('vendors').doc(id).valueChanges();
  }

  // Loading Sheet
  public addLoadingSheet(data: any, id?: string) {
    const uid = id || this.firestore.createId();
    data.id = uid;
    return this.firestore.collection('loading').doc(uid).set(data);
  }
  public getLoadingSheetList() {
    return this.firestore.collection('loading').valueChanges();
  }
  public getLoadingSheet(id: string) {
    return this.firestore.collection('loading').doc(id).valueChanges();
  }

  // Schedule Sheet
  public addScheduleSheet(data: any, id?:string){
    // const october_21= id || this.firestore.createId();
    // data.id = october_21;
    return this.firestore.collection('schedule').doc(id).set(data);
  }
  public getScheduleSheetList() {
    return this.firestore.collection('schedule').valueChanges();
  }
  public getScheduleSheet(id: string) {
    return this.firestore.collection('schedule').doc(id);
  }

  //INVOICE
  public addInvoice(data: any, id?: string) {
    const uid = id || this.firestore.createId();
    data.id = uid;
    return this.firestore.collection('invoice').doc(uid).set(data);
  }
  public getInvoiceList() {
    return this.firestore.collection('invoice').valueChanges();
  }
  public getInvoice(id: string) {
    return this.firestore.collection('invoice').doc(id).valueChanges();
  }

}