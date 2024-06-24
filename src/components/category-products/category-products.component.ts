import { Component, Input, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Category } from '../../utils/interfaces/Category';
import { Product } from '../../utils/interfaces/Product';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [RouterLink, ProductCardComponent,RouterOutlet],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent implements OnInit {

  private api = inject(ApiService);

  category: Category | null = null;

  @Input() categoryId : number = 0;

  products: Product[] = [];

  ngOnInit(): void {
    this.api.getCategoryById(this.categoryId)
    .then(category=>this.category = category);
    this.api.getProductsByCategory(this.categoryId).subscribe((products) => {
      this.products = products;
    })
  }

}
