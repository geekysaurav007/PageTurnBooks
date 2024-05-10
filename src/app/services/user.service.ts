import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import Login from '../dataTypes/login';
import SignUp from '../dataTypes/signup';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public isUser: any;
  public isLoogedIn: any;
  public myCart: any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private cartService: CartService
  ) {}
  loginService(data: Login) {
    this.http
      .post(
        `https://e-commerce-bookstore-iom7.onrender.com/api/user/login`,
        data
      )
      .subscribe(
        (res: any) => {
          let data: any = jwt_decode.jwtDecode(res.token);
          console.warn(data);
          if (data?.isAdmin == 'false') {
            localStorage.setItem('user', 'true');
            localStorage.setItem('id', data.id);
            localStorage.setItem('isLoggedin', 'true');
            this.isUser = true;
            this.isLoogedIn = true;
            this.router.navigate(['/home']);
          }
        },
      );
  }
  reloadUser() {
    if (localStorage.getItem('isLoggedin') == 'true') {
      this.isUser = true;
      this.isLoogedIn = true;
      this.router.navigate(['/home']);
    }
  }
  singnUp(data: any) {
    return this.http.post(
      `https://e-commerce-bookstore-iom7.onrender.com/api/user/signup`,
      data
    );
  }
}
