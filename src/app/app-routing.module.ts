import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OrderPlacementComponent } from './order-placement/order-placement.component';
import { AuthGuard } from './auth/auth.guard';
import { ModalComponent } from './modal/modal.component';

// Lazy load the  feature modules
const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes.module').then((m) => m.RecipesModule),
  },
  {
    path: 'shoppinglist',
    loadChildren: () =>
      import('./shopping-list/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'order',
    component: OrderPlacementComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'modal',
    component: ModalComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), // Preloading the lazy load bundles to avoid delay
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
