
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RegistrationModule } from './modules/registration/registration.module';
import { HomeModule } from './modules/home/home.module';
import { ShopModule } from './modules/shop/shop.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Routes, RouterModule } from '@angular/router';
import { NavigationModule } from '../shared/browser/navigation.module';
import { GenericComponentsModule } from '../app/modules/generic-components-module/generic-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { VeganCardsComponent } from './modules/generic-components-module/vegan-cards/vegan-cards.component';
import { BodyComponent } from './modules/home/body/body.component';
import { ShopServiceService } from './apiServices/shop-service.service';
import { FormControlService } from './apiServices/form-control.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
//Material

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AgmCoreModule } from '@agm/core';
import { AuthGuard, AuthInterceptor, AuthService } from './apiServices/auth.service';
import { ApimapComponent } from './apimap/apimap.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { from } from 'rxjs';
import { PopUpComponent } from './modules/popup/pop-up/pop-up.component';
import {RestaurantsListComponent} from "./modules/restaurants/restaurants-list/restaurants-list.component";
import { StoreComponent } from './modules/store/store.component';


// import { BodyComponent } from './body/body.component';
 const routes: Routes = [
  // { path: '', redirectTo: '/first', pathMatch: 'full' },
  {
    path: '',
    component: BodyComponent
  },
 /* { path: 'first', component: Component1Component } ,
  { path: 'second', component: Component2Component },
  { path: 'third', component: Component3Component }*/
];

@NgModule({
  declarations: [
    AppComponent,
    ApimapComponent,
    VeganCardsComponent,
    PopUpComponent,
    BodyComponent,
    RestaurantsListComponent,
    StoreComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    RegistrationModule,
    HomeModule,
    ShopModule,
    MatToolbarModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAABqwkqj04XsQ01mQ2X7m-GYDmjtoPLqk',
      libraries: ['places']
    }),
    MatDialogModule,
    HomeModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    GenericComponentsModule,
    NavigationModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    ShopServiceService,
    AuthService,
    AuthGuard,
    FormControlService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [PopUpComponent]

})
export class AppModule { }
