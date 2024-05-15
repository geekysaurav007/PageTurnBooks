import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}
  base_url: string = `https://e-commerce-bookstore-iom7.onrender.com/api/`;

  placeOrder(data: any) {
    return this.http.post(
      `https://e-commerce-bookstore-iom7.onrender.com/api/order/placeorder`,
      data,
      { headers: this.getHeaders() }
    );
  }
  updateMyOrder( data: any) {
    return this.http.put(`${this.base_url}order/update/${data._id}`, data, {
      headers: this.getHeaders(),
    });
  }

  getHeaders(): HttpHeaders {
    const token: string | null = localStorage.getItem('token');
    console.log('Bearer ' + token);
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }
  getAllOrders(){
    return this.http.get(`${this.base_url}/order/allorders`)
  }

  getMyOrders() {
    return this.http.get(`${this.base_url}order/myorders`, {
      headers: this.getHeaders(),
    });
  }
}
