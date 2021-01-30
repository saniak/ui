import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  {
    path: 'shop',
    loadChildren: () =>
      import('./public/shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./public/cart/cart.module').then((m) => m.CartModule),
  },
  { path: '**', redirectTo: '/shop' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
