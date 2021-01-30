import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from 'src/app/public/cart/types/cart.model';
import { ProductItem } from 'src/app/public/shop/types/product.model';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public cartItems$ = new BehaviorSubject([]);
  cartTotal$ = 0;
  listProd:any = []

  constructor(private _http : HttpClient) {}


  getAllProduct(){
    return this._http.get("https://www.mocky.io/v2/5eda4003330000740079ea60").pipe(map((data : ProductItem[]) =>{
        return data;
    }))
  }


  getCartItems(): Observable<CartItem[]> {
    return this.cartItems$.asObservable();
  }

  setCartItems(items: CartItem[]): void {
    this.cartItems$.next(items);
  }

  get cartTotal(): number {
    return this.cartTotal$;
  }

  set cartTotal(value: number) {
    this.cartTotal$ = value;
  }
}
