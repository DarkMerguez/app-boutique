import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Product } from '../utils/interfaces/Product';
import { SearchResultsComponent } from '../components/search-results/search-results.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule,SearchResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

auth = inject(AuthService);
isAdmin = this.auth.isAdmin();

  title = 'app-boutique';

  text: string = "";


  router = inject(Router)
  onSubmit(){
    this.router.navigateByUrl(("/search-results/"+this.text));
}



ngOnInit() {
  document.body.style.backgroundColor = '#fdf8e5';
}

}
