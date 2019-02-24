import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    NativeScriptCommonModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule { }
