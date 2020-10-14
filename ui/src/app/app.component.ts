import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private product:ProductService){
    console.log(this.bestsellers);
    console.log(this.products);
  }
  bestsellers = this.product.getBestsellers();
  products = this.product.getProducts();
}
