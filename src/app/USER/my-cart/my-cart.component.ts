import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { BookService } from '../../services/book.service'
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-cart.component.html',
  styleUrl: './my-cart.component.css',
})
export class MyCartComponent implements OnInit {
  cart: any = [];
  productObject: any = {};
  productCart: any = [];
  constructor(
    private cartservice: CartService,
    public bookservice: BookService,
    private orderservice: OrderService,
    private router:Router
  ) {}
  ngOnInit() {
    this.cart = this.cartservice.getCartItems();
    this.cart.forEach((element: any) => {
      element.quantity = 1;
    });
    console.warn(this.cart);
  }
  upDateQuantity(event: any, product: any) {
    this.cart.filter((data: any) => {
      if (data._id === product) {
        data.quantity = event.target.value;
        data.book = product;
        data.user = localStorage.getItem('id');
        data.address = 'ABCD';
      }
    });
  }
  placeOrder() {
    let data:any = [];
    this.cart.forEach((ele: any) => {
      let { name, price, quantity, address, user, book } = ele;
      let obj = {
        name: name,
        price: price,
        user: user,
        book: book,
        quantity: quantity,
        address: address,
      };
      data.push(obj);
    });
    this.orderservice.placeOrder(data).subscribe((res:any)=>{
      if(res.success){
        this.router.navigate(['/confirm'])
      }
    })

  }
}
