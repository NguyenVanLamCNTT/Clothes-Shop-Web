import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductShopRoutingModule } from './product-shop-routing.module';
import { AsideProductComponent } from './components/aside-product/aside-product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [AsideProductComponent, ProductsComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductShopRoutingModule
  ]
})
export class ProductShopModule { }
