import { Component, OnInit } from '@angular/core';
import{CommonModule} from'@angular/common'
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  providers:[CartService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  isAdmin:boolean=false
  cartLength!: number;
  constructor(private routerHelper:Router,public cartservice:CartService){}
  loginButton() {
    this.routerHelper.navigate(['/login'])
  }
  
}



