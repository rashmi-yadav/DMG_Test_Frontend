import { Component, Input, OnInit } from '@angular/core';
import  {product} from '../product.service'

interface product1 {
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
  @Input() bestseller: product;
  constructor() {
    
  }


  increase(){
    this.bestseller.qty = this.bestseller.qty + 1;
  }

  decrease(){
    this.bestseller.qty = this.bestseller.qty - 1;
    if(this.bestseller.qty <=0)
    this.bestseller.qty = 0;
  }

  ngOnInit(): void {
  }
  

  

}
