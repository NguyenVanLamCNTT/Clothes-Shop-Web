import { Component, Input, OnInit } from '@angular/core';
import { IohImage } from 'src/app/clothes-shop/models/image/ioh-image';
import { IohProduct } from 'src/app/clothes-shop/models/product/ioh-product';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input('product') product!: IohProduct;
  constructor() { }

  ngOnInit(): void {
    console.log(this.product?.productDiscount);
  }


}
