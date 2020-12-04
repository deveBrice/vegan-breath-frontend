import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './apiServices/auth.service';
import { LogInComponent } from './modules/registration/log-in/log-in.component';
import { SignupComponent } from './modules/registration/signup/signup.component';
import { ShopListComponent } from './modules/shop/shop-list/shop-list.component';
import { VeganDetailsComponent } from '../app/modules/generic-components-module/vegan-details/vegan-details.component';



const routes: Routes = [

  {
    path:'signup',
    component: SignupComponent
  },

  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'lazyRegistration',
    loadChildren: './modules/registration/registration-routing.module#RegistrationRoutingModule'
  },
  {
    path: 'recepeList',
    loadChildren: () => import('./modules/recepee/recepee.module')
    .then(mod => mod.RecepeeModule),
    canActivate: [AuthGuard]
  },
  {
    path:'shopList',
    loadChildren: () => import('./modules/shop/shop.module')
    .then(mod => mod.ShopModule),
  },
  {
    path:'restaurantsList',
    loadChildren: () => import('./modules/restaurants/restaurants.module')
    .then(mod => mod.RestaurantsModule),
    canActivate: [AuthGuard]
  },
  {
    path:'resteurants',
    loadChildren: './modules/restaurants/restaurants-routing.module#RestaurantsRoutingModule'
  },

  {
    path: 'details/:id', 
    component: VeganDetailsComponent
  }
];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers:[]
})

export class AppRoutingModule { }
