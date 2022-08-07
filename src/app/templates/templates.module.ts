import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    SidebarComponent
  ]
})
export class TemplatesModule { }
