import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather = {
    humidity:0,
    temp:0,
    mintemp: 0,
    maxtemp: 0,
    clouds:''
  }
  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.getDataByCity('burbank').subscribe(
      (data) => {
        console.log(data);
        // console.log( data['main']['temp_min']);
        this.weather.humidity = data['main']['humidity'];
        this.weather.mintemp = data['main']['temp_min'];
        this.weather.mintemp = Math.floor(this.weather.mintemp * (9/5) - 459.67);
        this.weather.maxtemp = data['main']['temp_max'];
        this.weather.maxtemp = Math.floor(this.weather.maxtemp * (9/5) - 459.67);
        this.weather.temp = data['main']['temp'];
        this.weather.temp= Math.floor(this.weather.temp * (9/5) - 459.67);
        this.weather.clouds = data['weather'][0]['description'];
    });
  }

}
