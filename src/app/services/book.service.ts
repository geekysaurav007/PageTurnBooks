import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}
  public baseUrl='https://e-commerce-bookstore-iom7.onrender.com/api'
  getAllBooks() {
    return this.http.get(
      'https://e-commerce-bookstore-iom7.onrender.com/api/books/allbooks'
    );
  }
  getImage(data:string){
    return this.http.get(`https://e-commerce-bookstore-iom7.onrender.com/api/images/${data}`)
  }
}
