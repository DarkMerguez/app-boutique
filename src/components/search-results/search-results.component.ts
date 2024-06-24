import { Component, Input, inject } from '@angular/core';
import { AppComponent } from '../../app/app.component';
import { RouterLink } from '@angular/router';
import { Product } from '../../utils/interfaces/Product';
import { ApiService } from '../../services/api.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [AppComponent,RouterLink,ProductCardComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

  private api = inject(ApiService);

  @Input() text !: string;

  searchedProducts: Product[] = [];


  ngOnInit(): void {
    if (this.text) {
      this.api.searchProducts(this.text).subscribe((searchedProducts) => {
        this.searchedProducts = searchedProducts
      })
    }
  }


}
