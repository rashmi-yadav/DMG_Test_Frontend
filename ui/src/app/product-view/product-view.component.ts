import { Component, OnInit } from '@angular/core';

interface product {
  title:string;
  no:string;
  carType:string;
  qty:number;
  price:number;
  total:number;
  stock:string;
}

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  products:product[];
  constructor() { 
    this.products = [
      {
        title:"Continental PremiumContact",
        no:"195/55 R15 85V",
        carType:"SUV",
        qty:4,
        price:340,
        total:1350,
        stock:"in",
      },
      {
        title:"Continental PremiumContact",
        no:"195/55 R15 85V",
        carType:"SUV",
        qty:4,
        price:340,
        total:1350,
        stock:"few",
      },
      {
        title:"Continental PremiumContact",
        no:"195/55 R15 85V",
        carType:"SUV",
        qty:4,
        price:340,
        total:1350,
        stock:"out",
      }
    ]
  }
  decrease(i:number){
    this.products[i].qty = this.products[i].qty - 1;
    if(this.products[i].qty <=0)
    this.products[i].qty = 0;
  }
  increase(i:number){
    this.products[i].qty = this.products[i].qty + 1;
    
  }
  ngOnInit(): void {
  }

}
