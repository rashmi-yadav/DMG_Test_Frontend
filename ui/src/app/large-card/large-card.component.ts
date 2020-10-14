import { Component, Input, OnInit } from '@angular/core';
import { product } from '../product.service';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.css']
})
export class LargeCardComponent implements OnInit {
  @Input() product:product;
  constructor() { }

  ngOnInit(): void {
  }
  increase(){
    this.product.qty = this.product.qty + 1;
  }

  decrease(){
    this.product.qty = this.product.qty - 1;
    if(this.product.qty <=0)
    this.product.qty = 0;
  }
}
