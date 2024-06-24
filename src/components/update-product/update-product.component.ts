import { Component, Input, OnChanges, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Product } from '../../utils/interfaces/Product';
import { RouterLink } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../../utils/interfaces/Category';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [RouterLink,AdminComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit {

  private api = inject(ApiService);

  product: Product | null = null;

  productGroup = new FormGroup({
    name : new FormControl<string>(""),
    price : new FormControl<number>(0),
    description : new FormControl<string>(""),
    categoryId : new FormControl<number>(0)
  });

  @Input() set productId(productId : number){

    this.api.getProductById2(productId).subscribe((product) => { 
      this.product = product
      this.productGroup.patchValue(this.product);
    })
  }

  



  onSubmit(){

    if(this.product){
      this.product.name = String(this.productGroup.value.name);
      this.product.price = Number(this.productGroup.value.price);
      this.product.description = String(this.productGroup.value.description);
      this.product.categoryId = Number(this.productGroup.value.categoryId);

      this.api.updateProduct(this.product).subscribe(response=>{
      console.log("produit modifié" + response);
      })
    }
  }

  categories : Category[] = [];

  ngOnInit(): void {
    this.api.getCategories().subscribe((categories) => {
      this.categories = categories
    })
  }

}
