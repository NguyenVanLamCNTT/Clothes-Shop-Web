import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { IntroComponent } from './components/intro/intro.component';
import {CardProductComponent} from '../../core-ui/card-product/card-product.component';
import {ProductsState} from '../../clothes-shop/states/products/products.state';


@NgModule({
  declarations: [IntroComponent, CardProductComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
  ],
  providers: [
    ProductsState
  ]
})
export class WelcomeModule { }
