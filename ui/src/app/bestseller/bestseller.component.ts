import { Component, OnInit } from '@angular/core';

interface product {
  title:string;
  no:string;
  carType:string;
  qty:number;
  price:number;
  total:number;
  stock:string;
  type:String;
}

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {
  products:product[];
  no:number = 4;
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
        type: "Premium"
      },
      {
        title:"Continental PremiumContact",
        no:"195/55 R15 85V",
        carType:"SUV",
        qty:4,
        price:340,
        total:1350,
        stock:"few",
        type:"Economic"
      },
    ]
  }


  increase(i){
    this.products[i].qty = this.products[i].qty + 1;
  }

  decrease(i){
    this.products[i].qty = this.products[i].qty - 1;
    if(this.products[i].qty <=0)
    this.products[i].qty = 0;
  }

  ngOnInit(): void {
  }
  

  

}
