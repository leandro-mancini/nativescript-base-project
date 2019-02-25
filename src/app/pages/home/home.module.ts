import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
