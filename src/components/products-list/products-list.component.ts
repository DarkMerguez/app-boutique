import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../utils/interfaces/Product';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [RouterLink, AsyncPipe, ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

  constructor(private api: ApiService) { }

  products: Product[] = [];


  ngOnInit(): void {
    this.api.getProducts().subscribe((products) => {
      this.products = products
    })
  }
  
}

  /*     // ngOnInit est appelée par Angular une fois à l'initialisation du composant
    ngOnInit(): void {
  
      this.api.getProducts().then(products=>{
          // Je fetch tout mes products et les place dans l'état products.
          this.products = products
      });
    } */


