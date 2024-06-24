import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Category } from '../../utils/interfaces/Category';
import { CategoryProductsComponent } from '../category-products/category-products.component';

@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [RouterLink,CategoryProductsComponent],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css'
})
export class CategoriesListComponent implements OnInit {

  constructor(private api: ApiService) { }

  categories : Category[] = [];

  ngOnInit(): void {
    this.api.getCategories().subscribe((categories) => {
      this.categories = categories
    })
  }

}
