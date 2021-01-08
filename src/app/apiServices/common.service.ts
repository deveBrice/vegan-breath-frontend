import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  KEY = 'AIzaSyAABqwkqj04XsQ01mQ2X7m-GYDmjtoPLqk';
  public listData = [];
  public element: string;
  public itemDetail: object;
  public searchInput: string;
  public  idResto;

  constructor(private httpClient: HttpClient) { }

  getIdResto() {
    return this.idResto;
  }

  setIdResto(idResto){
    this.idResto = idResto;
  }
  getListData() {
    return this.listData;
  }

  setListData(listData: any){
    this.listData = listData;
  }

   getElement(): string{
    return this.element;
  }

  setElement(element: string): void{
    this.element = element;
  }

  getItemDetail(): any{
    return this.itemDetail;
  }

  setItemDetail(itemDetail: object): void{
    this.itemDetail = itemDetail;
  }

  getSearchText(): any {
    return this.searchInput;
  }
  setSearchText(searchInput: string): void{
    this.searchInput = searchInput;
  }

  getPlaces(){
    return this.httpClient.get(`http://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=vegan&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&${this.KEY}
`);
  }
}
