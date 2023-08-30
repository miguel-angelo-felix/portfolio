import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
 

  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(){
    this.themeService.setThemeLocalStorage(this.themeService.getThemeLocalStorage())
  }

  onClickTheme(event: any): void {
    console.log(event)
    this.themeService.setThemeLocalStorage(event)
  }

  isDarkModeTheme(): boolean {
    return this.themeService.getThemeLocalStorage();
  }
}
