import { ThemeService } from './core/services/theme/theme.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-curriculumn';

  constructor(
    private themeService: ThemeService
  ){}

  changeTheme(themeName: string): void {
    this.themeService.switchTheme(themeName);
  }

}
