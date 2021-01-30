import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product-service/product.service';
import { ProductItem } from '../../shop/types/product.model';
import { CartItem } from '../types/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartTotal: number;
  cartItems: CartItem[];
  total = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getCartItems()
      .subscribe((items) => (this.cartItems = items));
    this.cartTotal = this.productService.cartTotal;
  }

  updateCartTotal(): void {
    let total = 0;
    this.cartItems.map((elem) => (total = total + elem.quantity * elem.price));
    this.cartTotal = total;

    this.productService.setCartItems(this.cartItems);
    this.productService.cartTotal = total;
  }

  onDeleteCartItem(item: ProductItem): void {
    const index = this.cartItems.findIndex((elem) => elem.id === item.id);
    this.cartItems.splice(index, 1);
    this.updateCartTotal();
  }
}
