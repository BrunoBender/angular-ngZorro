import { Component, Input, OnInit } from '@angular/core';
import { DesignerModel } from './models/designer.model';

@Component({
  selector: 'app-designer-destaque',
  templateUrl: './designer-destaque.component.html',
  styleUrls: ['./designer-destaque.component.css']
})
export class DesignerDestaqueComponent implements OnInit {

  @Input() designerModel: DesignerModel = new DesignerModel;

  constructor() { }

  ngOnInit(): void {
  }

}
