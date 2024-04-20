import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public myCartArray: any = [];
  public currentCartLength:any
  constructor() {}
  addToCart(data: any) {
    let cart=this.getCartItems()
    cart.push(data)
    this.updateCart(cart)
  }
  getCartItems(): any[] {
    const cartItems = localStorage.getItem('cart');
    return cartItems ? JSON.parse(cartItems) : [];
  }
  updateCart(cart:any[]){
    localStorage.setItem('cart',JSON.stringify(cart))
  }
  clearCart(){
    localStorage.removeItem('cart')
  }
}
