import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from './home.component';
import { Route } from '~/app/core/route.service';

const routes: Routes = [
  Route.withShell([
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
  ])
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
  providers: []
})
export class HomeRoutingModule { }
