import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Subscription} from 'rxjs';
import {IohProduct} from "../../models/product/ioh-product";
import {ProductsService} from "../../services/products/products.service";
import {catchError, finalize, tap} from "rxjs/operators";


@Injectable()
export class ProductsState implements OnDestroy{
  private isReadySubject = new BehaviorSubject<boolean>(false);
  public isReady$ = this.isReadySubject.asObservable();
  private listProductSub = new BehaviorSubject<IohProduct[]>( []);
  public listProduct$ = this.isReadySubject.asObservable();

  subscription: Subscription = new Subscription();
  constructor(private productService: ProductsService) {
    this.loadData();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  getListProduct(): IohProduct[]{
    return this.listProductSub.getValue();
  }
  setListProduct(listProduct: IohProduct[]): void{
    this.listProductSub.next(listProduct);
  }
  setIsReady(isReady: boolean): void{
    this.isReadySubject.next(isReady);
  }
  getIsReady(): boolean{
    return this.isReadySubject.getValue();
  }
  loadData(): void{
    const sb = this.productService
      .getProducts()
      .pipe(
        tap((listProduct: IohProduct[]) => this.setListProduct(listProduct)),
        catchError(async (err) => console.log(err)),
        finalize(() => this.setIsReady(true))
      )
      .subscribe();
    this.subscription.add(sb);
  }
}
