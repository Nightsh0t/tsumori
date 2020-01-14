import { Component, OnInit } from '@angular/core';
import { Version } from '../version';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version = Version;

  constructor() { }

  ngOnInit() {
  }

}
