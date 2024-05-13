import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { CommonModule, NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [NgIf],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css',
})
export class MyOrdersComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private orderservice: OrderService
  ) {}
  user_id!: string | null;
  myOrders: any = [];
  update_flag: boolean = false;
  address!: string;
  quantity!: number;
  updated_obj: any;
  updateForm = new FormGroup({
    address: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });
  ngOnInit() {
    this.user_id = this.route.snapshot.paramMap.get('id');
    this.getMyOrders(this.user_id);
  }
  getMyOrders(id: string | null) {
    this.orderservice.getMyOrders().subscribe((res: any) => {
      this.myOrders = res.data;
      console.warn(this.myOrders);
    });
  }

  updateOrder(data: any) {
    this.update_flag = true;
    let resp = JSON.parse(JSON.stringify(data));
    this.updated_obj = resp;
  }
  getFormValue(data: any) {
    let { address, quantity } = data;
    this.quantity = Number(quantity);
    this.updated_obj.address = address;
    this.updated_obj.quantity = quantity;
    this.orderservice.updateMyOrder(this.updated_obj).subscribe((res: any) => {
      if (res.success) {
        alert(`updated record`);
        this.myOrders = this.getMyOrders(this.user_id);
        this.update_flag = false;
      }
    });
  }
}
