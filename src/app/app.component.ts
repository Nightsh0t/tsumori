import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Version } from './version';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Instance Variables
  title = 'Tsumori';
  version = Version;

  // Constructor
  constructor(private titleService: Title) {}

  ngOnInit() {
    // Set initial page title
    this.titleService.setTitle(this.title);
  }
}
