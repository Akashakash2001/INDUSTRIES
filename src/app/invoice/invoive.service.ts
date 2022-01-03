import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { parts } from "./invoice-parts/parts";

@Injectable({
    providedIn: 'root',
  })
  
export class InvoiveNumberService{
    private messagesource = new BehaviorSubject<string>("DefaultMessage");
    currentMessage = this.messagesource.asObservable();
    
    private invoiceSource = new BehaviorSubject<string>("DefaultMessage");
    currentInvoice = this.invoiceSource.asObservable();

    private partSource = new BehaviorSubject<parts>(new parts);
    currentPart = this.partSource.asObservable();
    
    constructor(){}
    changeMessage(message: string){
        this.messagesource.next(message);
    }
    changeInvoice(message: string){
        this.invoiceSource.next(message);
    }

    addPart(part: parts){
        console.log(part);
        this.partSource.next(part);
    }
}