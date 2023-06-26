import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { Book } from '../common/book';
import axios from 'axios';

var target_url = 'http://localhost:8080/api/orders/';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  book: Book = new Book;

  constructor(private authService: AuthenticationService, private router: Router) { }

  async addOrder(bookId: any) {
    var headers = this.authService.getHeaders();
    return await
      axios.post(`${target_url}addOrder/${bookId}`, {}, {
        headers
      })
  }

  redirectAllOrders() {
    this.router.navigate([`orders`]);
  }

  redirectOrderDetails(orderId: any) {
    this.router.navigate([`orders/orderDetails/${orderId}`]);
  }

  async deleteOrder(orderId: any) {
    var headers = this.authService.getHeaders();
    return await
      axios.delete(`${target_url}deleteOrder/${orderId}`, {
        headers
      })
  }

  getTargetUrl() {
    return target_url;
  }

  getOrder(orderId: any) {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}orderDetails/${orderId}`, {
      headers
    })
  }

  collectAllOrders(){
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}allOrders`, {
      headers
    })
  }

  collectAllItems(orderId:any){
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}allItems/${orderId}`, {
      headers
    })
  }

}
