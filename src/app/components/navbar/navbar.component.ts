import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BookService } from 'src/app/services/book.service';
import { MainService } from 'src/app/services/main.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAuthenticated: boolean = false;
  hasAuthorityAdmin = false;
  authUser: User = new User;

  constructor(private authService: AuthenticationService, private bookService: BookService,
    private orderService: OrderService, private mainService: MainService,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.hasAuthorityAdmin = this.authService.isAdmin();
    if (this.isAuthenticated) {
      this.getCurrentUser();
    }
  }

  logout() {
    this.authService.logOut();
  }

  redirectAllBooks() {
    this.bookService.redirectAllBooks();
  }

  redirectHome() {
    this.mainService.redirectHome();
  }

  redirectAllOrders() {
    this.orderService.redirectAllOrders();
  }

  redirectRegister() {
    this.mainService.redirectRegister();
  }

  getCurrentUser() {
    this.userService.getCurrentUser()
      .then((response) => {
        this.authUser = response.data;
      })
      .catch(() => {
        localStorage.clear();
        window.location.reload();
      })
  }

}
