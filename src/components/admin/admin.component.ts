import { Component, Input, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from '../../utils/interfaces/Product';
import { ApiService } from '../../services/api.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PostProductComponent } from '../post-product/post-product.component';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, ProductCardComponent, PostProductComponent, UpdateProductComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {

  products: Product[] = [];
  newProducts: Product[] = [];
  product: Product | null = null;
  private api = inject(ApiService);

/*   @Input() set productId(productId : number) {
    this.api.getProductById2(productId).subscribe((product) => {
      this.product = product
    })
  } */

  router = inject(Router);

  delete(product: Product) {
      this.api.deleteProduct(product.id).subscribe((product) => {
        console.log("produit supprimé");
        this.newProducts = this.products.filter(product => {
          return product != product
        })
        this.products = this.newProducts;
      });
  }

  ngOnInit(): void {
    this.api.getProducts().subscribe((products) => {
      this.products = products;
    })
  }

}
