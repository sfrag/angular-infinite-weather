import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities = [{ name: 'roma' }, { name: 'japan' }, { name: 'spain' }];

  constructor() {}

  ngOnInit(): void {}
}
