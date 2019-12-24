import { NgModule } from '@angular/core';
import { SingInComponent } from './sing-in/sing-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [SingInComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class FormModule {}
