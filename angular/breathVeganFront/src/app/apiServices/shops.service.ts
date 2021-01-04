import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {

  private apiRoot = 'http://localhost:90/';

  constructor(
    private httpClient: HttpClient) { }

  getShops(){
    return this.httpClient.get(this.apiRoot.concat('api/vegan/shops'));
  }

  /*createRestaurants(title: string, description: string, email: string, created_at: Date) {
    return this.httpClient.post(
      this.apiRoot.concat('addRestaurants/'),
      { title, description, email, created_at }
    );
  }*/
}