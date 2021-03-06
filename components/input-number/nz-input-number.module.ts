import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { NzInputNumberComponent } from './nz-input-number.component';

@NgModule({
  imports: [CommonModule, FormsModule, NzIconModule],
  declarations: [NzInputNumberComponent],
  exports: [NzInputNumberComponent]
})
export class NzInputNumberModule {}
