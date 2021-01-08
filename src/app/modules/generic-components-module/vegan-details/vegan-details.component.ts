import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { FavoriteManagerService } from '../../../service/favorites-manager.services';
import { VeganDetailsService } from '../../../service/vegan-details.service';
import {CommonService} from '../../../apiServices/common.service';
import {RestaurantsService} from "../../../apiServices/restaurants.service";

@Component({
  selector: 'app-vegan-details',
  templateUrl: './vegan-details.component.html',
  styleUrls: ['./vegan-details.component.scss']
})

export class VeganDetailsComponent implements OnInit {
productDetailsArray: any[] = [];
public detailData: any [];

  constructor(private activatedRoute: ActivatedRoute,
              private favoriteManagerService: FavoriteManagerService,
              private veganDetailsService: VeganDetailsService,
              private commonService: CommonService,
              private restaurantService: RestaurantsService) { }

  ngOnInit(): void {
    this.onDisplayDetails();
    this.detailData = this.commonService.getItemDetail();
  }

  onDisplayDetails() {
    this.activatedRoute.paramMap
    .subscribe((res: any) => {
      this.productDetailsArray = [];
       const currentDetailsResult = this.getCurrentDetails(res.params.id, res.params.title);
       this.productDetailsArray.push(currentDetailsResult);
    });
  }

  getCurrentDetails(id: string, title: string): Observable<any> {
  const newTitle = this.veganDetailsService.changeTitle(title);
  const productDetailsList = this.veganDetailsService.getProductDetailsList();
    for(const product of productDetailsList) {
        const idNumber = this.convertStringToInt(id);
      console.log('veganif', newTitle, product.productDetails);
      if(newTitle === product.productDetails) {

        return product[newTitle].find(p => p.id == idNumber);
      }
    }
  }

  //convert the values of type string in int
  convertStringToInt(value: string) {
        if (value < '1') {
            return parseFloat(value);
        } else {
            return parseInt(value, 10);
        }
    }


    favoriteManager(id: number, title: string, favoriteState: boolean) {
      favoriteState = true;
      const changeTitleResult = this.veganDetailsService.changeTitle(title).replace(/ /g, '');
      this.veganDetailsService.changeStateFavorite(changeTitleResult, id, favoriteState)
      this.favoriteManagerService.setFavoriteStorage({id: id, title: title, favoriteState: true});
    }

    favoriteState(productDetailsCurrent: any) {
      const newTitle = this.veganDetailsService.changeTitle(productDetailsCurrent.title).replace(/ /g, '');
      productDetailsCurrent.favoriteState = !productDetailsCurrent.favoriteState
      if(productDetailsCurrent.favoriteState === true) {
        this.favoriteManagerService.setFavoriteStorage({
          id: productDetailsCurrent.id,
          title: productDetailsCurrent.title,
          favoriteState: productDetailsCurrent.favoriteState
        });
      } else {
        this.favoriteManagerService.setFavoriteStorage({
          id: productDetailsCurrent.id,
          title: productDetailsCurrent.title,
          favoriteState: productDetailsCurrent.favoriteState
        });
        this.veganDetailsService.favoritesListResult.splice(productDetailsCurrent.id, 1);
      }
    }

    printPage() {
      window.print();
    }
}
