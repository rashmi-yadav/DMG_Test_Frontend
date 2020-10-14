import { Injectable } from '@angular/core';
export interface product {
  title:string;
  no:string;
  carType:string;
  qty:number;
  price:number;
  total:number;
  stock:string;
  type?:String;
  bestseller:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:product[] = [
    {
      title:"Continental PremiumContact",
      no:"195/55 R15 85V",
      carType:"SUV",
      qty:4,
      price:340,
      total:1350,
      stock:"in",
      type: "Premium",
      bestseller:true
    },
    {
      title:"Continental PremiumContact",
      no:"195/55 R15 85V",
      carType:"SUV",
      qty:4,
      price:340,
      total:1350,
      stock:"in",
      type:"Economic",
      bestseller:true
    },
    {
      title:"Continental PremiumContact",
      no:"195/55 R15 85V",
      carType:"SUV",
      qty:4,
      price:340,
      total:1350,
      stock:"in",
      bestseller:false
    },
    {
      title:"Continental PremiumContact",
      no:"195/55 R15 85V",
      carType:"SUV",
      qty:4,
      price:340,
      total:1350,
      stock:"few",
      bestseller:false
    },
    {
      title:"Continental PremiumContact",
      no:"195/55 R15 85V",
      carType:"SUV",
      qty:4,
      price:340,
      total:1350,
      stock:"out",
      bestseller:false
    }
  ]
  getProducts(){
    return this.products.filter(p => p.bestseller ===false)  }
  getBestsellers(){
    return this.products.filter(p => p.bestseller ===true)
  }
}
