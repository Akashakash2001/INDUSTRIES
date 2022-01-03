import { Component } from '@angular/core';
import { PagesComponent } from './pages/pages.component';
import { NbMenuItem } from '@nebular/theme';
import { RouterOutlet } from '@angular/router';
import { fader } from './ui/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent {
  title = 'Angle';

  showSidenav: boolean;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  toggleSidenav(status) {
    this.showSidenav = status;
  }
}
