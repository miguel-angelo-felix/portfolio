import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements OnInit {

  private apiKey = '3bf2c8bc70c108e0212a8a5b6617bc78';

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getWeatherDatas('Pernambuco');
  }

  getWeatherDatas(cityName: string): Observable<any> {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {});
  }
}
