import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-master';

  ngOnInit(){
    const scriptExtrato = document.createElement('script');
    scriptExtrato.src = 'http://localhost:8080/extrato/main.js';
    document.body.appendChild(scriptExtrato);

    const scriptPagamento = document.createElement('script');
    scriptPagamento.src = 'http://localhost:8080/pagamento/main.js';
    document.body.appendChild(scriptPagamento);
  }
}
