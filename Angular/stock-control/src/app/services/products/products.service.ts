import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, map } from 'rxjs';
import { enviroment } from 'src/app/environments/enviroments';
import { CreateProductRequest } from 'src/app/models/interfaces/products/request/CreateProductRequest';
import { EditProductRequest } from 'src/app/models/interfaces/products/request/EditProductRequest';
import { CreateProductResponse } from 'src/app/models/interfaces/products/response/CreateProductResponse';
import { DeleteProductResponse } from 'src/app/models/interfaces/products/response/DeleteProductResponse';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProductsResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = enviroment.API_URL;
  private JWT_TOKEN = this.cookie.get('USER_INFO');
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.JWT_TOKEN}`
    })
  }

  constructor(
    private http: HttpClient,
    private cookie: CookieService
  ) { }


  getAllProducts(): Observable<Array<GetAllProductsResponse>> {
    return this.http.get<Array<GetAllProductsResponse>>(
      `${this.API_URL}/products`,
      this.httpOption
    ).pipe(
      map((product) => product.filter((data) => data?.amount > 0))
    );
  }

  createProduct(requestDatas: CreateProductRequest): Observable<CreateProductResponse> {
    return this.http.post<CreateProductResponse>(
      `${this.API_URL}/product`,
      requestDatas,
      this.httpOption
    )
  }

  editProduct(requestDatas: EditProductRequest): Observable<void> {
    return this.http.put<void>(
      `${this.API_URL}/product/edit`,
      requestDatas,
      this.httpOption
    )
  }

  deleteProduct(product_id: string): Observable<DeleteProductResponse> {
    return this.http.delete<DeleteProductResponse>(`${this.API_URL}/product/delete`,
    {
      ...this.httpOption, params: {
        product_id: product_id
      }
    })
  }

}
