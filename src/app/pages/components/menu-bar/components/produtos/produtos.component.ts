import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  gridStyle = {
    width: '300px',
    textAlign: 'center'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
