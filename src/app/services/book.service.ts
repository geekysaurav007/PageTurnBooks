import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}
  public baseUrl = 'https://e-commerce-bookstore-iom7.onrender.com/api';
  getAllBooks() {
    return this.http.get(`${this.baseUrl}/books/allbooks`);
  }
  getAllBook() {
    this.http.get(`${this.baseUrl}/books/allbooks`);
  }
  getImage(data: string) {
    return this.http.get(
      `https://e-commerce-bookstore-iom7.onrender.com/api/images/${data}`
    );
  }
  addBook(data: any) {
    return this.http.post(`${this.baseUrl}/books/addbook`, data);
  }
  getHeaders(): HttpHeaders {
    const token: string | null = localStorage.getItem('token');
    console.log('Bearer ' + token);
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }
}
