import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  setThemeLocalStorage(isDarkMode: boolean): void {
    if (isDarkMode) {
      localStorage.setItem('theme', 'darkMode');
    } else {
      localStorage.setItem('theme', 'lightMode');
    }
  }

  getThemeLocalStorage(): boolean {
    return localStorage.getItem('theme') === 'darkMode';
  }
}
