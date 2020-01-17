import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
  }

  public logout() {
    this.auth.logout();
  }
}
