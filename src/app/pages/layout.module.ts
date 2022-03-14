import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './_layout/layout.component';
import { TopbarComponent } from './_layout/components/topbar/topbar.component';
import { FooterComponent } from './_layout/components/footer/footer.component';


@NgModule({
  declarations: [LayoutComponent, TopbarComponent, FooterComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class LayoutModule { }
