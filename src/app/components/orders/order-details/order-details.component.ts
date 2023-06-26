import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Order } from 'src/app/common/order';
import { OrderItem } from 'src/app/common/order-item';
import { User } from 'src/app/common/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order: Order = new Order;
  userList: User[] = [];
  itemList: OrderItem[] = [];

  constructor(private router: Router, private userService: UserService,
    private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit(): void {
    var orderId = this.route.snapshot.params[`orderId`];
    this.listAllUsers();
    this.getOrderDetails(orderId);
    this.listAllItems(orderId);
  }

  redirectAllOrders() {
    this.orderService.redirectAllOrders();
  }

  listAllUsers() {
    this.userService.listAllUsers()
      .then((response) => {
        setTimeout(() => this.userList = response.data);
      })
  }

  deleteOrder(orderId: any) {
    if (confirm(`Remove this order?`)) {
      this.orderService.deleteOrder(orderId)
        .then(() => {
          this.orderService.collectAllOrders();
          this.orderService.redirectAllOrders();
        }, function () {
          alert(`Failed!`);
        })
    }
  }

  getOrderDetails(tempOrderId: any) {
    this.orderService.getOrder(tempOrderId)
      .then((response) => {
        this.order = response.data;
      })
  }

  listAllItems(tempOrderId:any){
    this.orderService.collectAllItems(tempOrderId)
    .then((response) => {
      setTimeout(() => this.itemList = response.data);
    })
  }

}
