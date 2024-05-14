import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { BookService } from '../../services/book.service';
import { File } from 'buffer';
import { publish } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [NgIf],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent implements OnInit {
  constructor(
    private userservice: UserService,
    private bookservice: BookService,
    private route:Router
  ) {}
  ngOnInit(): void {
    this.userservice.reloadAdmin();
  }
  imagePath!: any;
  createBook = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    publishDate: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  addBook(data: any) {
   const formdata=new FormData()
   let{price,quantity,publishDate,name,category}=data
   formdata.append('image',this.imagePath),
   formdata.append('price',price)
   formdata.append('category',category),
   formdata.append('name',name)
   formdata.append('quantity',quantity)
   formdata.append('publishDate',publishDate)
   console.log(formdata)
   this.bookservice.addBook(formdata).subscribe((res:any)=>{
    if(res.message){
      alert(`${res.message}`)
      this.route.navigate(['/home'])
    }
   })
    // call service with login credentials
  }
  onFileSelect(event: any) {
    if(event.target.files.length>0){
      const file=event.target.files[0]
      this.imagePath=file
    }
   
    

  }
}
