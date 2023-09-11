import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from './../../services/weather.service';
import { WeatherDatas } from '../../interfaces/Weather';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  
  initialCityName = 'Pernambuco';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) { }
  
  ngOnInit() {
    this.getWeartherDatas(this.initialCityName);
  }

  ngOnDestroy(): void {
   this.destroy$.next();
   this.destroy$.complete();
  }


  onSubmit(): void {
    this.getWeartherDatas(this.initialCityName);
  }

  getWeartherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response)
      },
      error: (error) => console.log(error)
    });
  }

}
