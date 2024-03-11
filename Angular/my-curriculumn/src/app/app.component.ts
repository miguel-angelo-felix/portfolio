import { ThemeService } from './core/services/theme/theme.service';
import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-curriculumn';

  items: MenuItem[] | undefined;
  constructor(
    private themeService: ThemeService
  ){}

  ngOnInit(): void {
    this.items = [
      {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
      },
      {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
      }
    ];
  }

  changeTheme(themeName: string): void {
    this.themeService.switchTheme(themeName);
  }

}
