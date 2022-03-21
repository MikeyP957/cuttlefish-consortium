import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from '../components/auth-form/auth-form.component';
import { AuthRememberComponent } from '../components/auth-remember/auth-remember.component';

@NgModule({
  declarations: [
    AuthFormComponent,
    AuthRememberComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent,
    AuthRememberComponent
  ]
})
export class AuthFormModule { }
