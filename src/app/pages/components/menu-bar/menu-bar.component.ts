import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  mostrarMenu: boolean = false;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.mostrarMenuEmitter.subscribe(mostrar => this.mostrarMenu = mostrar);
  }

}
