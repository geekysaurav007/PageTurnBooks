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
export class NavbarComponent  {
  isAdmin: boolean = false;
  cartLength!: number;
  constructor(
    private routerHelper: Router,
    public cartservice: CartService,
    public userService: UserService
  ) {}
  loginButton() {
    this.routerHelper.navigate(['/login']);
  }
  signOut(){
    localStorage.clear()
    this.isUserLoggedIn()
    this.routerHelper.navigate(['/login'])
  }
  isUserLoggedIn():boolean{
    if(localStorage.getItem('isLoggedin')=="true"){
      return true
    }
    else{
      return false
    }
  }
}
