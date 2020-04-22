import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FactDetailComponent } from './fact-list.component';

@NgModule({
  declarations: [FactDetailComponent],
  exports: [FactDetailComponent],
  imports: [CommonModule],
})
export class FactModule {}
