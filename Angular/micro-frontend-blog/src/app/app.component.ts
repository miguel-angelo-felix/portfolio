import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-frontend-blog';


  constructor(private themeService: ThemeService) { }

  ngOnInit(){
      const scriptHomePage= document.createElement('script');
      scriptHomePage.src = 'http://localhost:8080/home-page/main.js';
      document.body.appendChild(scriptHomePage);

  }

  isDarkModeTheme(): boolean {
    return this.themeService.getThemeLocalStorage();
  }
}
