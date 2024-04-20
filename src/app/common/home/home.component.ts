import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { CommonModule, NgFor } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  providers: [BookService, CartService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
[x: string]: any;
  allBooks: any = [];
  public myCart: any = [];
  constructor(
    public bookservice: BookService,
    public cartservice: CartService,
    public userService: UserService
  ) {}
  ngOnInit(): void {
    this.getAllBooks();
    this.loadCart();
    this.userService.reloadUser();
  }
  getAllBooks() {
    this.bookservice.getAllBooks().subscribe((result: any) => {
      this.allBooks = result.result;
      console.log(this.allBooks)

    }),
      (error: any) => {
        console.warn(error);
      };
  }
  loadCart() {
    this.myCart = this.cartservice.getCartItems();
  }
  clearCart() {
    this.cartservice.clearCart();
    this.loadCart();
  }
  addToCart(data: any) {
    this.cartservice.addToCart(data);
    this.loadCart();
    this.cartservice.currentCartLength = this.myCart.length;
  }
  getImage(data:any){
    this.bookservice.getImage(data).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
