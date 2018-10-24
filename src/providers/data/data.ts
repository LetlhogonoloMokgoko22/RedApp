import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

 
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
getRemoteData(){
return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=pretoria&APPID=465e416c78cdc906280085750e30721d')
  
}
}
