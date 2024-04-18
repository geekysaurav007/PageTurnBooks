
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[   ],
    imports: [
      CommonModule,
      BrowserModule,HttpClientModule
  ],providers:[HttpClientModule,HttpClient],
  bootstrap:[]
})
export class AppModule { }
