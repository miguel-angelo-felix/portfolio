import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrls: ['./toolbar-navigation.component.css']
})
export class ToolbarNavigationComponent implements OnInit {

  constructor(
    private router: Router,
    private cookie: CookieService
  ) { }

  ngOnInit() {
  }

  handlelogout(): void {
    this.cookie.delete('USER_INFO');
    void this.router.navigate(['/home'])
  }

}
