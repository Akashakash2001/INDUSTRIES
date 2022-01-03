import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() sidenavStatus: EventEmitter<boolean> = new EventEmitter();
  showSidenav=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.sidenavStatus.emit(false);
  }

  onSettingsClicked() {

  }

  sidenavToggle(){
    this.showSidenav = !this.showSidenav
    this.sidenavStatus.emit(this.showSidenav);
  }
}
