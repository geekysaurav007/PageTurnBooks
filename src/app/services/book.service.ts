import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getAllBooks() {
    return this.http.get('https://e-commerce-bookstore-iom7.onrender.com/api/books/allbooks')
}
}


