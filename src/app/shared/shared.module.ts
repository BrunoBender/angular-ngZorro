import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { DestaqueComponent } from './components/destaque/destaque.component';
import { DesignerDestaqueComponent } from './components/designer-destaque/designer-destaque.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzProgressModule } from 'ng-zorro-antd/progress';

const ZORROMODULES = [
  NzMenuModule,
  NzLayoutModule,
  NzSpaceModule,
  NzCardModule,
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzBreadCrumbModule,
  NzCarouselModule,
  NzStatisticModule,
  NzAvatarModule,
  NzBadgeModule,
  NzSliderModule,
  NzInputNumberModule,
  NzDatePickerModule,
  NzProgressModule,
];

const COMPONENTS = [
  DestaqueComponent,
  DesignerDestaqueComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ...ZORROMODULES,
  ],
  exports: [
    ...ZORROMODULES,
    ...COMPONENTS,
  ]
})
export class SharedModule { }
