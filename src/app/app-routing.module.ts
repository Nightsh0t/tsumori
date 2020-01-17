import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuilderComponent } from './builder/builder.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthGuard } from './auth.guard';


const routes: Routes = [
  // { path: '/yourComponent', component: YourComponent }

  // Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // Builder
  { path: 'builder', component: BuilderComponent, canActivate: [AuthGuard] },

  // Login/Register
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // 404
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
