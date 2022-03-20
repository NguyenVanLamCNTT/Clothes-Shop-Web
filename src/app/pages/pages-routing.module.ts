import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'welcome',
        loadChildren: () => import('../modules/welcome/welcome.module').then((m) => m.WelcomeModule)
      },
      {
        path: '',
        redirectTo: 'welcome/intro',
        pathMatch: 'full'
      },
      {
        path: 'shop-product',
        loadChildren: () => import('../modules/product-shop/product-shop.module').then((m) => m.ProductShopModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
