import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FactComponent } from './fact.component';

@NgModule({
  declarations: [FactComponent],
  exports: [FactComponent],
  imports: [CommonModule],
})
export class FactModule {}
