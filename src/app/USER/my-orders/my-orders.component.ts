import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit{
  constructor(private route:ActivatedRoute,private orderservice:OrderService){}
  user_id!:string|null
  ngOnInit() {
   this.user_id=this.route.snapshot.paramMap.get('id')
   this.getMyOrders(this.user_id)
  }
 getMyOrders(id:string|null){
  this.orderservice.getMyOrders().subscribe((res:any)=>{
    console.warn(res)
    // store in array vand itertate
  })
  console.log(`my ordersssss ${id}`)
 }
}
