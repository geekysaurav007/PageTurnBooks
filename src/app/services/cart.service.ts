import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public myCartArray: any = [];
  constructor() {}
  addToCart(data: any) {
    this.myCartArray.push({
      name: data.name,
      publishDate: data.publishDate,
      price: data.price,
      category: data.category,
    });
  }
}
