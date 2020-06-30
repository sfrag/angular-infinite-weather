import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'weatherAngularApp';

  showMenu: boolean = false;
  darkModeActive: boolean;

  userEmail = undefined;

  constructor(public router: Router) {}
  loggedIn;
  ngOnInit() {}
  ngOnDestroy() {}
  toggleMenu() {}
  modeToggleSwitch() {}
  logout() {}
}
