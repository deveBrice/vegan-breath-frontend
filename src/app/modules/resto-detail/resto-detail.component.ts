import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../apiServices/restaurants.service';
import {CommonService} from '../../apiServices/common.service';

@Component({
  selector: 'app-resto-detail',
  templateUrl: './resto-detail.component.html',
  styleUrls: ['./resto-detail.component.css']
})
export class RestoDetailComponent implements OnInit {

  detailRestaurant: Object;
  constructor(private restaurantService: RestaurantsService,
              private commonService: CommonService) {}

  ngOnInit(): void {
    this.restaurantService.getById(this.commonService.getIdResto()).subscribe(
      (data) => {
        this.detailRestaurant = data;
      },
      (error) => {
        window.alert('You must be logged in to see details');
      }
    );
  }

  printPage() {
    window.print();
  }

}
