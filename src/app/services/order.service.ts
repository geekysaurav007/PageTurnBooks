import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  placeOrder(data: any) {
    return this.http.post(
      `https://e-commerce-bookstore-iom7.onrender.com/api/order/placeorder`,
      data,
      { headers: this.getHeaders() }
    );
  }

  getHeaders(): HttpHeaders {
    const token: string | null = localStorage.getItem('token');
    console.log(token)
    console.log('Bearer ' + token)
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }
}
