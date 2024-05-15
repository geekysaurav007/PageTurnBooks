import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonEngine } from '@angular/ssr';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-all-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-order.component.html',
  styleUrl: './all-order.component.css'
})
export class AllOrderComponent implements OnInit {
  all_orders:any=[]
  constructor(private orderservice:OrderService){}
  ngOnInit(): void {
    this.getAllOrders()
  }
  getAllOrders(){
    this.orderservice.getAllOrders().subscribe((res:any)=>{
      this.all_orders=res
      console.warn(this.all_orders)
    })
  }
}
