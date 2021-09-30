import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/components/login/login.component';
import { Error404Component } from './pages/components/error404/error404.component';
import { HomeComponent } from './pages/components/menu-bar/components/home/home.component';
import { SobreComponent } from './pages/components/menu-bar/components/sobre/sobre.component';
import { ProdutosComponent } from './pages/components/menu-bar/components/produtos/produtos.component';
import { ContaComponent } from './pages/components/menu-bar/components/conta/conta.component';
import { RegisterComponent } from './pages/components/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register/:aprov', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'conta', component: ContaComponent},
  {path: '**', component: Error404Component},
];

@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule {

}
