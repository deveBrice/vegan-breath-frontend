import { Component, OnInit } from '@angular/core';
import {ShopsService} from '../../apiServices/shops.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  storeList: Object;
  constructor(private shopsService: ShopsService) { }

  ngOnInit(): void {
    this.shopsService.getAllShops().subscribe(
      (data) => {
        this.storeList = data;
      },
      (error) => {
        window.alert('you must be connected to see restaurants');
      }
    );
  }

}
