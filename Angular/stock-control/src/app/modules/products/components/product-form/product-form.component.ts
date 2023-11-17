import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, take, takeUntil } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { GetCategoriesResponse } from 'src/app/models/interfaces/categories/responses/GetCategoriesResponse';
import { Option } from 'src/app/shared/interfaces/option';
import { CreateProductRequest } from 'src/app/models/interfaces/products/request/CreateProductRequest';
import { ProductsService } from 'src/app/services/products/products.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EventAction } from 'src/app/models/interfaces/products/event/EventAction';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProductsResponse';
import { ProductsDataTransferService } from 'src/app/shared/services/products/products-data-transfer.service';
import { ProductEvent } from 'src/app/models/enums/products/ProductEvent';
import { EditProductRequest } from 'src/app/models/interfaces/products/request/EditProductRequest';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {


  private readonly destroy$: Subject<void> = new Subject();

  public addProductForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    category_id: ['', Validators.required],
    amount: [0, Validators.required]
  });

  public editProductForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    amount: [0, Validators.required]
  });

  public categoriesDatas: Array<GetCategoriesResponse> = [];
  public selectedCategory: Array<Option> =[]
  public productSelectedDatas!: GetAllProductsResponse;
  public productDatas: Array<GetAllProductsResponse> = [];
  public productAction!: {
    event: EventAction;
    productDatas: Array<GetAllProductsResponse>
  }

  public addProductAction = ProductEvent.ADD_PRODUCT_EVENT;
  public editProductAction = ProductEvent.EDIT_PRODUCT_EVENT;
  public saleProductAction = ProductEvent.SALE_PRODUCT_EVENT;

  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductsService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private ref: DynamicDialogConfig,
    private productDtService: ProductsDataTransferService
  ) { }
 
  ngOnInit() {
    this.productAction = this.ref.data;
    if (
      this.productAction?.event?.action === this.editProductAction && 
      this.productAction?.productDatas
    ) {
      this.getProductSelectedDatas(this.productAction?.event?.id as string);
    }

    if (this.productAction?.event?.action === this.saleProductAction) {
      this.getProductDatas();
    }

    this.getAllCategories();
  }

  getAllCategories() {
    this.categoriesService.getAllCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.length > 0) {
            this.categoriesDatas = response
          }
        },
        error: (err) => {

        }
      });
  }

  handleSubmitAddProduct() {
    if (this.addProductForm?.value && this.addProductForm.valid) {
      const requestCreateProduct: CreateProductRequest = {
        name: this.addProductForm.value.name as string,
        price: this.addProductForm.value.price as string,
        description: this.addProductForm.value.description as string,
        category_id: this.addProductForm.value.category_id as string,
        amount: Number(this.addProductForm.value.amount)
      };

      this.productService.createProduct(requestCreateProduct)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            if (response) {
              this.messageService.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: 'Produto criado com sucesso!',
                life: 2500
              });
            }
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Erro ao criar produto!',
              life: 2500
            });
          }
        });
    }

    this.addProductForm.reset();
  }

  handleSubmitEditProduct(): void {
   
    if ( 
      this.editProductForm.value &&
      this.editProductForm.valid &&
      this.productAction.event.id
    ) { 
    
      const requestEditProduct: EditProductRequest = {
        name: this.editProductForm.value.name as string,
        price: this.editProductForm.value.price as string,
        description: this.editProductForm.value.description as string,
        product_id: this.productAction.event.id as string,
        amount: this.editProductForm.value.amount as number
      }

      this.productService.editProduct(requestEditProduct)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Produto editado com sucesso!',
              life: 2500,
            });
            this.editProductForm.reset();
          },
          error: (err) => {
            console.log(err)
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Erro ao editar Produto!',
              life: 2500
            });
            this.editProductForm.reset();
          }
        })
    }
  }


  getProductSelectedDatas(productId: string): void {
    const allProducts = this.productAction?.productDatas;

    if (allProducts.length > 0) {
      const productFiltered = allProducts.filter(
        (elem) => elem?.id === productId
      );

      if (productFiltered) {
        this.productSelectedDatas = productFiltered[0];
        this.editProductForm.setValue({
          name: this.productSelectedDatas?.name,
          price: this.productSelectedDatas?.price,
          amount: this.productSelectedDatas?.amount,
          description: this.productSelectedDatas?.description,
        });
      }
    }
  }

  getProductDatas(): void {
    this.productService.getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.length > 0) {
            this.productDatas =response;
            this.productDatas && 
            this.productDtService.setProductsDatas(this.productDatas)
          }
        },
        error: (err) => {}
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
