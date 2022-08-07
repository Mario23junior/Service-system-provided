import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgbCollapse, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



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
    SidebarComponent,
    NgbCollapseModule
  ]
})
export class TemplatesModule { }
