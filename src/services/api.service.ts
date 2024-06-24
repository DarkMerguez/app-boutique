import { Injectable } from '@angular/core';
import { Product } from '../utils/interfaces/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../utils/interfaces/Category';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /*   public async getProducts() : Promise<Product[]>{
      // Ma fonction asyncrone renvoie une promesse de Product[]
      return fetch("http://localhost:8066/products")
      .then(res=>res.json());
    } */

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8066/products");
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:8066/categories");
  }

public getProductById2(id : number | string): Observable<Product> {
    return this.http.get<Product>("http://localhost:8066/product/"+id);
  }

  public async getProductById(id : number) : Promise<Product> {
    return fetch("http://localhost:8066/product/" + id)
    .then(res=>res.json());
  }

  public async getCategoryById(id: number) : Promise<Category> {
    return fetch("http://localhost:8066/category/" + id)
    .then(res=>res.json());
  }

  public getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8066/products/category/" + categoryId);
  }

  private searchUrl = 'http://localhost:8066/products/search';
  public searchProducts(text: string): Observable<any> {
    return this.http.get<any>(`${this.searchUrl}/${text}`);
  }

  public addProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>("http://localhost:8066/product", product);
  }

  public deleteProduct(id: number) : Observable<Product> {
    return this.http.delete<Product>("http://localhost:8066/product/" + id);
  }

  public updateProduct(product: Product) : Observable<Product> {
    return this.http.put<Product>("http://localhost:8066/product/", product);
  }
  

}
