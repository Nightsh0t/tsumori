import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  alert: boolean = false;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Tsumori » Login");
  }

}
