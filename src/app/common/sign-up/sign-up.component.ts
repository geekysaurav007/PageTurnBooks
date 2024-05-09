import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import SignUp from '../../dataTypes/signup';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  providers:[NgIf,UserService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private Router:Router,private userService:UserService){}
  signUpForm=new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.email),
    phone:new FormControl('',[Validators.required]),
    password:new FormControl('',Validators.required),
    repassword:new FormControl('',Validators.required)
  })
  signUp(data:any){
    data.phone=Number(data.phone)
   this.userService.singnUp(data).subscribe((res:any)=>{
      console.log(res)
      this.Router.navigate(['/home'])
   },(error)=>{
    alert(`you have error: ${error.error.message}`)
   })
  }
  signIn(){
    this.Router.navigate(['/login'])
  }
}
