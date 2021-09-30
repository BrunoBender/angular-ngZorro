import { Component, Input, OnInit } from '@angular/core';
import { DestaqueModel } from './models/destaque.model';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {

  @Input() destaqueModel: DestaqueModel = new DestaqueModel;

  constructor() { }

  ngOnInit(): void {
  }

}
