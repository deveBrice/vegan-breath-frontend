import {Component, OnChanges, OnInit} from '@angular/core';
import {CommonService} from '../../../apiServices/common.service';
import {RestaurantModel} from '../../../models/restaurant.interface';
import {FormControlService} from '../../../apiServices/form-control.service';
import {RestaurantsService} from '../../../apiServices/restaurants.service';
import {ShopsService} from '../../../apiServices/shops.service';
import {ShopModel} from '../../../models/shop.interface';
import {RecepeeService} from '../../../apiServices/recepee.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit, OnChanges{


  content = this.commonService.getListData();
  element: any;
  elementCreation: RestaurantModel = new RestaurantModel();
  shopCreation: ShopModel;

  constructor(private commonService: CommonService,
              public formControlService: FormControlService,
              private restaurantService: RestaurantsService,
              private shopService: ShopsService,
              private recepeeService: RecepeeService) { }

  ngOnInit(): void {
    this.element = this.commonService.getElement();
  }

  ngOnChanges(): void{
    this.element = this.commonService.getElement();
  }

  createElement(): void{
    if (this.commonService.getElement() === 'un restaurant'){
      this.createRestaurant();
    }
    if (this.commonService.getElement() === 'un magasin'){
      this.createShop();
    }
    if (this.commonService.getElement() === 'une recette'){
      this.createRecette();
    }
  }

  createRestaurant(): void {
   // this.elementCreation.picture = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/vegetarian_diet_slideshow/getty_rf_photo_of_veggie_stir-fry.jpg';
    this.elementCreation.email = 'dd@admin.com';
    if (this.formControlService.addingItemForm.valid) {
        // tslint:disable-next-line:max-line-length
        this.restaurantService.addRestaurant(this.elementCreation.title, this.elementCreation.email, this.elementCreation.picture, this.elementCreation.description).subscribe(
          (data: RestaurantModel) => {
            this.elementCreation = data;
            window.alert('votre restaurant sera ajouté après validation admin');
            console.log('createdData', data);
          },
          (error) => {
           // window.alert('Ajout imposible du  magasin, essayer encore');
            console.log(error);
          }
        );
      }
  }

  createShop(): void {
    this.elementCreation.email = 'user@user.com';
    if (this.formControlService.addingItemForm.valid) {
      // tslint:disable-next-line:max-line-length
      this.shopService.addShops(this.elementCreation.title, this.elementCreation.email, this.elementCreation.picture, this.elementCreation.description).subscribe(
        (data: ShopModel) => {
          this.shopCreation = data;
          window.alert('votre magasin sera ajouté après validation admin');
          console.log('createdData', data);
        },
        (error) => {
          // window.alert('Ajout imposible du  magasin, essayer encore');
          console.log(error);
        }
      );
    }
  }


  discard(): void {
    console.log('close pop up');
  }

  addTitle(event: any): void{
    const value = event.target.value;
    if (value || ''){
      this.elementCreation.title = value;
    }
  }

  addImage(event: any): void{
    const value = event.target.value;
    if (value || ''){
      this.elementCreation.picture = value;
    }
  }
  addDescription(event: any): void {
    const value = event.target.value;
    if (value || ''){
      this.elementCreation.description = value;
    }
    console.log('rightValue', value);
  }

  createRecette(): void {
    this.elementCreation.email = 'dd@admina.com';
    if (this.formControlService.addingItemForm.valid) {
      // tslint:disable-next-line:max-line-length
      this.recepeeService.addRecepee(this.elementCreation.title, this.elementCreation.email, this.elementCreation.picture, this.elementCreation.description).subscribe(
        (data: RestaurantModel) => {
          this.elementCreation = data;
          window.alert('votre recette sera ajouté après validation admin');
          console.log('createdData', data);
        },
        (error) => {
          // window.alert('Ajout imposible du  magasin, essayer encore');
          console.log(error);
        }
      );
    }
  }
}
