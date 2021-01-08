import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VeganDetailsService } from '../../../service/vegan-details.service';
import { FavoriteManagerService } from '../../../service/favorites-manager.services';
import {RestaurantsService} from "../../../apiServices/restaurants.service";
import {CommonService} from "../../../apiServices/common.service";

@Component({
  selector: 'app-vegan-cards',
  templateUrl: './vegan-cards.component.html',
  styleUrls: ['./vegan-cards.component.scss']
})
export class VeganCardsComponent implements OnInit {

@Input() veganInformations;
favoriteSetting: any;
favoriteState: boolean;
itemDetail: object;

  constructor(private router: Router,
              private veganDetailsService: VeganDetailsService,
              private favoriteManagerService: FavoriteManagerService,
              private restaurantService: RestaurantsService,
              private commonService: CommonService) {}

  ngOnInit(): void {

  }

  showDetails(vegan): void {
    this.router.navigate(['/restaurantDetails']);
    this.commonService.setIdResto(vegan.id);

   /* this.restaurantService.getById(vegan.id).subscribe(
      (data) => {
        this.itemDetail = data;
        this.commonService.setItemDetail(this.itemDetail);
        console.log('data', data);
        console.log('veganinformation', this.veganInformations);
      },
    (error) => {
        console.log('erreur sur details', error);
        window.alert('impossible de renvoyer les details pour ce restaurant');
    });*/
    // this.router.navigate([`/details`, vegan.id, vegan.title.replace(/ /g, '')]);
  }

  getSettingsFavoris(){
    this.veganDetailsService.favoritesListResult;
  }

  changeFavoriteState(veganProductCurrent: any): void {
    console.log(veganProductCurrent);
    veganProductCurrent.favoriteState = !veganProductCurrent.favoriteState;
    const newTitle = this.veganDetailsService.changeTitle(veganProductCurrent.title).replace(/ /g, '');
    this.veganDetailsService.changeStateFavorite(newTitle, veganProductCurrent.id, veganProductCurrent.favoriteState);
    // tslint:disable-next-line:max-line-length
    this.favoriteManagerService.setFavoriteStorage({id: veganProductCurrent.id, title: veganProductCurrent.title, favoriteState: veganProductCurrent.favoriteState});
    if (!veganProductCurrent.favoriteState) {
      const newTitle = this.veganDetailsService.changeTitle(veganProductCurrent.title).replace(/ /g, '');
      this.veganDetailsService.changeStateFavorite(newTitle, veganProductCurrent.id, veganProductCurrent.favoriteState);
      this.veganDetailsService.favoritesListResult.splice(veganProductCurrent.id, 1);
    }
  }
}
