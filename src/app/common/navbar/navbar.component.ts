import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  providers: [CartService, UserService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isAdmin: boolean = false;
  cartLength!: number;
  constructor(private routerHelper: Router, public cartservice: CartService) {}
  loginButton() {
    this.routerHelper.navigate(['/login']);
  }
  signUpButton() {
    this.routerHelper.navigate(['/home']);
  }
  signOut() {
    localStorage.clear();
    this.isUserLoggedIn();
    this.routerHelper.navigate(['/login']);
  }
  isUserLoggedIn(): boolean {
    if (localStorage.getItem('user') == 'true') {
      return true;
    } else {
      return false;
    }
  }
  myCart() {
    let cartLength = localStorage.getItem('cart');
    let length = cartLength ? JSON.parse(cartLength).length : 0;
    if (length) {
      this.routerHelper.navigate(['my-cart']);
    } else {
      alert(`No Items in Cart`);
    }
  }
  myOrders() {
    let id = localStorage.getItem('id');
    this.routerHelper.navigate([`myorder/${id}`]);
  }
  isAdminLoggedIn(): boolean {
    if (localStorage.getItem('admin') == 'true') {
      return true;
    } else {
      return false;
    }
  }
  getAllOrders(){
    this.routerHelper.navigate(['/allorder'])
  }
  createOrder(){
    this.routerHelper.navigate(['/addbook'])
  }
}
