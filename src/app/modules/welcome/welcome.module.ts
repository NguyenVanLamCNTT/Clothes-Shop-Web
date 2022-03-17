import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { IntroComponent } from './components/intro/intro.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [IntroComponent, TestComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
