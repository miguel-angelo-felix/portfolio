import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Layouts - Components
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/menu/menu.component';

// Shared
import { ButtonComponent } from './shared/button/button.component';
import { InputTextComponent } from './shared/input-text/input-text.component';
import { SelectInputComponent } from './shared/select-input/select-input.component';
import { FeedbackComponent } from './shared/feedback/feedback.component';

// Components
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendasComponent } from './vendas/vendas.component';
import { ManterClienteComponent } from './cliente/manter-cliente/manter-cliente.component';
import { ManterProdutoComponent } from './produto/manter-produto/manter-produto.component';
import { ManterVendasComponent } from './vendas/manter-vendas/manter-vendas.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    MenuComponent,
    ClienteComponent,
    ProdutoComponent,
    ManterClienteComponent,
    ButtonComponent,
    InputTextComponent,
    SelectInputComponent,
    ManterProdutoComponent,
    FeedbackComponent,
    VendasComponent,
    ManterVendasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
