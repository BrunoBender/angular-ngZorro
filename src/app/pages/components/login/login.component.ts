import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  title: string;
  userlogin = new UsuarioModel;



  constructor(private fb: FormBuilder, private service: LoginService) {}

  ngOnInit(): void {
    this.service.hideMenu();
    this.validateForm = this.fb.group({
      login: [null, [Validators.required]],
      senha: [null, [Validators.required]],
      nome: ['Pedro'],
      tipoUsuario: [1]
    });

    this.title = "Login";
  }

  fazerLogin(){
    this.userlogin = this.validateForm.value
    console.log(this.userlogin)
    this.service.fazerLogin(this.userlogin);
  }

  goToRegister(){
    this.service.goToRegister();
  };

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }
}
