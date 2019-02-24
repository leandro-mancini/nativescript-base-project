import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    LoginModule,
    HomeModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class PagesModule { }
