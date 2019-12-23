import { NgModule } from '@angular/core';
import { SingInComponent } from './sing-in/sing-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [SingInComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class FormModule {}
