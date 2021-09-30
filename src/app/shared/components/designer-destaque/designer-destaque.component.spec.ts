import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignerDestaqueComponent } from './designer-destaque.component';

describe('DesignerDestaqueComponent', () => {
  let component: DesignerDestaqueComponent;
  let fixture: ComponentFixture<DesignerDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignerDestaqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignerDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
