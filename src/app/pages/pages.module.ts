import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { Error404Component } from './components/error404/error404.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LoginService } from './services/login.service';
import { SharedModule } from '../shared/shared.module';
import { MenuBarModel } from './components/menu-bar/menu-bar.module';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    Error404Component,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    MenuBarModel
  ],
  exports:[
    MenuBarComponent,
    LoginComponent
  ],
  providers:[
    LoginService
  ]
})
export class PagesModule { }
