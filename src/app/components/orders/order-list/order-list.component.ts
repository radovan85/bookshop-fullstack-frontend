import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Order } from 'src/app/common/order';
import { User } from 'src/app/common/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  userList: User[] = [];
  orderList: Order[] = [];

  constructor(private orderService: OrderService, private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.listAllUsers();
    this.listAllOrders();
  }
  listAllUsers() {
    this.userService.listAllUsers()
      .then((response) => {
        setTimeout(() => this.userList = response.data);
      })
  }

  listAllOrders() {
    this.orderService.collectAllOrders()
      .then((response) => {
        $('#listingTable').DataTable().destroy();
        setTimeout(function () {
          $('#listingTable').DataTable();
        }, 5)
        setTimeout(() => this.orderList = response.data);
      })
  }

  redirectOrderDetails(orderId: any) {
    this.orderService.redirectOrderDetails(orderId);
  }

  deleteOrder(tempOrderId: any) {
    if (confirm(`Remove this order?`)) {
      this.orderService.deleteOrder(tempOrderId)
        .then(() => {
          this.listAllOrders();
          this.orderService.redirectAllOrders();
        }, function () {
          alert(`Failed!`);
        })
    }
  }

}
