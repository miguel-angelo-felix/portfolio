import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { DeleteProductAction } from 'src/app/models/interfaces/products/event/DeleteProductAction';
import { EventAction } from 'src/app/models/interfaces/products/event/EventAction';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProductsResponse';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductsDataTransferService } from 'src/app/shared/services/products/products-data-transfer.service';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  public productsDatas: Array<GetAllProductsResponse> = [];

  constructor(
    private productsService: ProductsService,
    private productsDtService: ProductsDataTransferService,
    private route: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.getServieProductsDatas();
  }

  getServieProductsDatas() {
    const productsLoaded: any = this.productsService.getAllProducts();

    if (productsLoaded.length > 0) {
      this.productsDatas = productsLoaded;
    } else this.getApiProductsDatas();
  }

  getApiProductsDatas() {
    this.productsService.getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.productsDatas = response;
        },
        error: (err) => {
          console.log(err);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao buscar Produtos',
            life: 2500
          })
          this.route.navigate(['/dashboard'])
          
        }
      })
  }

  handleProductAction(event: EventAction): void {
    if (event) {
      console.log('Dados do evento recebido: ', event)
    }
  }

  handleDeleteProductAction(event: DeleteProductAction): void {
    if (event) {
      console.log('Dados recebidos do deletar produtos: ', event)
      this.confirmationService.confirm({
        message: `Confirma a exclusão do produto: ${event.productName}`,
        header: 'Confirmação de exclusão',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sim',
        rejectLabel: 'Não',
        accept: () => this.deleteProduct(event?.product_id),
      });
    }
  }

  deleteProduct(product_id: string) {
    if(product_id) {
      this.productsService.deleteProduct(product_id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response) {
            this.messageService.add({
              severity: 'sucess',
              summary: 'Sucesso',
              detail: 'Produto removido com sucesso!',
              life: 2500
            });

            this.getApiProductsDatas();
          }
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao remover produto!',
            life: 2500
          });
        }
      })
    }
  }

  

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
