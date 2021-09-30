import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { HomeService } from "../../services/home.service";
import { ContaComponent } from "./components/conta/conta.component";
import { HomeComponent } from "./components/home/home.component";
import { ProdutosComponent } from "./components/produtos/produtos.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { MenuBarComponent } from "./menu-bar.component";
import { MenuBarRouting } from "./menu-bar.routing";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MenuBarRouting)
  ],
  exports:[
    MenuBarComponent
  ],
  declarations:[
    MenuBarComponent,
    ContaComponent,
    HomeComponent,
    ProdutosComponent,
    SobreComponent
  ],
  providers:[
    HomeService
  ]
})
export class MenuBarModel {}
