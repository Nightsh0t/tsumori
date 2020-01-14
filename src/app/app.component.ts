import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Instance Variables
  title = 'Tsumori';

  // Constructor
  constructor(private titleService: Title) {}

  ngOnInit() {
    // Set initial page title
    this.titleService.setTitle(this.title);
  }
}
