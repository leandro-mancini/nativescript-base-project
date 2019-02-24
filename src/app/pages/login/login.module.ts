import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    NativeScriptCommonModule,
    LoginRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
