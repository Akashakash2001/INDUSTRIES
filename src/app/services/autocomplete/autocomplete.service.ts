import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  inputValue:string="";
  queryResult: any;
  constructor() { }
}
