import { Component } from '@angular/core';
import{CommonModule} from'@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  constructor(private routerHelper:Router){}
  isAdmin:boolean=false
  loginButton() {
    this.routerHelper.navigate(['/login'])
  }
}



