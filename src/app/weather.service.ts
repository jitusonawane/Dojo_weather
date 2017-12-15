import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
// import{BehaviorSubject} from 'rxjs';
import 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private _http:HttpClient) {} 
getDataByCity(city){
return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=e01a10f917a2cf8cfa48e412157ec880');
}

}
