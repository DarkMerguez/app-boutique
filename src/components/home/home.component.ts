import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SearchResultsComponent } from '../search-results/search-results.component';
import { Product } from '../../utils/interfaces/Product';
import { ApiService } from '../../services/api.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, SearchResultsComponent, ProductCardComponent, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  text: string = "";
  private api = inject(ApiService);


  router = inject(Router)
  onSubmit() {
    this.router.navigateByUrl(("/search-results/" + this.text));
  }

  products: Product[] = [];
  randomProducts: Product[] = [];

  private index1: number = 0;
  private index2: number = 0;
  private index3: number = 0;

  ngOnInit(): void {
    this.api.getProducts().subscribe((products) => {
      this.products = products;
      if (products.length >= 3) {
        this.index1 = Math.round(Math.random() * (products.length - 1));

        do { this.index2 = Math.round(Math.random() * (products.length - 1)) }
        while (this.index1 == this.index2);

        do { this.index3 = Math.round(Math.random() * (products.length - 1)) }
        while ((this.index3 == this.index2) || (this.index3 == this.index1));

        this.randomProducts.push(products[this.index1], products[this.index2], products[this.index3]);
      }
    })
  }

}