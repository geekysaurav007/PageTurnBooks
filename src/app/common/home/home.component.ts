import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgFor } from '@angular/common';
import { error } from 'console';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  providers:[BookService,CartService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  allBooks:any=[]
  myCart:any=[]
  constructor(private bookservice:BookService,public cartservice:CartService){}
  ngOnInit(): void {
    this.getAllBooks()
  }
  getAllBooks(){
    this.bookservice.getAllBooks().subscribe((result:any)=>{
     this.allBooks=result.result
    }
  ),(error:any)=>{
    console.warn(error)
  }
  };
  sendDetails(data:any){
   this.cartservice.addToCart(data)
  }
  
}


 