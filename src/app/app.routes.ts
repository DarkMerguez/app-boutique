import { Routes } from '@angular/router';
import { ProductsListComponent } from '../components/products-list/products-list.component';
import { CategoriesListComponent } from '../components/categories-list/categories-list.component';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { SearchResultsComponent } from '../components/search-results/search-results.component';
import { HomeComponent } from '../components/home/home.component';
import { PanierComponent } from '../components/panier/panier.component';
import { AdminComponent } from '../components/admin/admin.component';
import { CGUComponent } from '../components/cgu/cgu.component';
import { CategoryProductsComponent } from '../components/category-products/category-products.component';
import { PostProductComponent } from '../components/post-product/post-product.component';
import { UpdateProductComponent } from '../components/update-product/update-product.component';
import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [
    {path : "products",component:ProductsListComponent},
    {path : "categories",component:CategoriesListComponent},
    {path : "product/post",component:PostProductComponent},
    {path : "product/update/:productId",component:UpdateProductComponent},
    {path : "product/:id",component:ProductCardComponent},
    {path : "search-results/:text",component:SearchResultsComponent},
    {path : "home",component:HomeComponent},
    {path : "cart",component:PanierComponent},
    {path : "admin",component:AdminComponent,canActivate: [authGuard]},
    {path : "CGU",component:CGUComponent},
    {path : "products/category/:categoryId",component:CategoryProductsComponent}
];