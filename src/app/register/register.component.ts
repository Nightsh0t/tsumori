import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public alert: boolean = false;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Tsumori » Register");
  }

}
