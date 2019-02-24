import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    LoginModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule { }
