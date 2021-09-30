import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ContaComponent } from "./components/conta/conta.component";
import { HomeComponent } from "./components/home/home.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { MenuBarComponent } from "./menu-bar.component";

const ROTES = [ {path: 'menu', component: MenuBarComponent, children: [
  {path: 'home', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'conta', component: ContaComponent},
]}
];
export const MenuBarRouting = ROTES;
