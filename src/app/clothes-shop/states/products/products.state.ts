import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable()
export class ProductsState implements OnDestroy{
  private isReadySubject = new BehaviorSubject<boolean>(false);
  public isReady$ = this.isReadySubject.asObservable();
  ngOnDestroy(): void {
  }
}
