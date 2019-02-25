import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from '../app-routing.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { BaseComponent } from '../core/base/base.component';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    NativeScriptCommonModule,
    NativeScriptUISideDrawerModule,
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
