import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Defi } from './../../global/models/defi.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class DefisService {

    constructor(private http: HttpClient) {}

  getDefis(){
    return this.http.get<Defi[]>('https://workshop-4b538.firebaseio.com/defis.json').pipe(map(responseData => {
        console.log(responseData)
      var usersArray: Defi[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          usersArray.push({...responseData[key], id: key})
        }
      }
      console.log(usersArray);
      return usersArray;
    }))
  }
}