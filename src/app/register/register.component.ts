import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public alert: boolean = true;
  public form: FormGroup;

  constructor(private title: Title, private fb: FormBuilder, private server: ServerService, private router: Router) { }

  ngOnInit() {
    // Title
    this.title.setTitle("Tsumori » Register");

    // Form
    this.form = this.fb.group({
      email: ['', Validators.email],
      name: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  public onSubmit() {
    // Invalid Form
    if (!this.form.valid) {
      return;
    }

    const request = this.server.request('POST', '/register', {
      email: this.form.get('email').value,
      name: this.form.get('name').value,
      password: this.form.get('password').value
    });

    request.subscribe(() => {
      this.router.navigateByUrl('/login')
    });
  }

}
