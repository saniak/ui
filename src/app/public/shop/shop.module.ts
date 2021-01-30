import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductComponent } from './shop/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ShopRoutingModule,NgbModule],
  declarations: [ShopComponent, ProductComponent],
})
export class ShopModule {}
