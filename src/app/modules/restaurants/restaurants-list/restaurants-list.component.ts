import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../../apiServices/restaurants.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {


  restaurantList: Object;
  constructor(private restaurantService: RestaurantsService) { }


  ngOnInit(): void {
    this.restaurantService.getAllRestaurants().subscribe(
      (data) => {
        this.restaurantList = data;
        console.log(this.restaurantList);
      },
      (error) => {
      console.log(error);
      window.alert('You must be connected to see restaurants');
      });
  }

}
