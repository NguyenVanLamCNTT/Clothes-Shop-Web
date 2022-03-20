import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductShopComponent} from './product-shop.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductShopComponent,
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'detail',
        component: ProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductShopRoutingModule { }
