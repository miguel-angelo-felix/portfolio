import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'micro-frontend-blog';
  ngOnInit(){
      const scriptExtrato = document.createElement('script');
      scriptExtrato.src = 'http://localhost:8080/home-page/main.js';
      document.body.appendChild(scriptExtrato);

  }
}
