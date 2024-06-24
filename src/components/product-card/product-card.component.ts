import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../utils/interfaces/Product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  constructor(private api: ApiService) { }

  product : Product | null = null;


  @Input() set id(productId : number){
    this.api.getProductById(productId).then(product=>this.product = product)
    .catch(error=>console.log(error));
  }

}
