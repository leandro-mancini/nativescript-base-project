import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'ns-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  moduleId: module.id,
})
export class BaseComponent implements OnInit, AfterViewInit {

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;

  private drawer: RadSideDrawer;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
  }

  openMenu() {
    this.drawer.showDrawer();
  }

}
