import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public alert: boolean = true;
  public form: FormGroup;
  public loginInvalid: boolean;

  constructor(private title: Title, private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    // Title
    this.title.setTitle("Tsumori » Login");

    // Form
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.loginInvalid = false;
    if (this.form.valid) {
      try {
        await this.authService.login(this.form.value);      
      } catch (err) {
        this.loginInvalid = true;
        
      }
    }
  }

}
