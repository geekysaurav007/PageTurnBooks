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
  allBooks: any = [];
  public myCart: any = [];
  constructor(
    private bookservice: BookService,
    public cartservice: CartService,
    public userService: UserService
  ) {}
  ngOnInit(): void {
    this.getAllBooks();
    this.userService.reloadUser();
  }
  getAllBooks() {
    this.bookservice.getAllBooks().subscribe((result: any) => {
      this.allBooks = result.result;
    }),
      (error: any) => {
        console.warn(error);
      };
  }
  sendDetails(data: any) {
    this.myCart.push(data)
  }
}
