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
  public isAdmin:any
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
      .subscribe((res: any) => {
        let data: any = jwt_decode.jwtDecode(res.token);
        if (data?.isAdmin == 'false') {
          localStorage.setItem('user', 'true');
          localStorage.setItem('id', data.id);
          localStorage.setItem('isLoggedin', 'true');
          localStorage.setItem('token', res.token);
          this.isUser = true;
          this.isLoogedIn = true;
          this.router.navigate(['/home']);
        }
        if(data?.isAdmin=='true'){
          localStorage.setItem('admin', 'true');
          localStorage.setItem('id', data.id);
          localStorage.setItem('isLoggedin', 'true');
          localStorage.setItem('token', res.token);
          this.isAdmin=true
          this.router.navigate(['/addbook'])
        }
      });
  }
  reloadUser() {
    if (localStorage.getItem('isLoggedin') == 'true') {
      this.isUser = true;
      this.isLoogedIn = true;
      this.router.navigate(['/home']);
    }
  }
  reloadAdmin(){
    if(localStorage.getItem('admin')=='true'){
      this.isAdmin=true
      this.isLoogedIn=true
      this.router.navigate(['/addbook'])
    }
  }
  singnUp(data: SignUp) {
    return this.http.post(
      `https://e-commerce-bookstore-iom7.onrender.com/api/user/signup`,
      data
    );
  }
  getHeaders(): HttpHeaders {
    const token: string | null = localStorage.getItem('auth');
    return new HttpHeaders().set('Authorization', 'Bearer ' + token);
  }
}
