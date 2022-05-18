import { Component, OnInit } from '@angular/core';
import { IohProduct } from 'src/app/clothes-shop/models/product/ioh-product';
import {ProductsState} from "../../../../clothes-shop/states/products/products.state";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  listProduct: IohProduct[] = [];

  constructor(private productsState: ProductsState) { }

  ngOnInit(): void {
    this.listenState();
  }

  listenState(): void{
    this.productsState.listProduct$.subscribe(res => this.listProductChange());
  }
  listProductChange(): void{
    const listProduct = this.productsState.getListProduct();
    if (listProduct){
      this.listProduct = listProduct;
      console.log(this.listProduct);
    }
  }
}
