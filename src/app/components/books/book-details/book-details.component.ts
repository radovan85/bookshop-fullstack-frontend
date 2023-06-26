import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import axios from 'axios';
import { Book } from 'src/app/common/book';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BookService } from 'src/app/services/book.service';
import { MainService } from 'src/app/services/main.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book = new Book;
  hasAuthorityUser = false;

  constructor(private bookService: BookService,private authService:AuthenticationService,
    private router: Router, private route: ActivatedRoute, private orderService: OrderService,
    private mainService:MainService) { }

  ngOnInit(): void {
    var bookId = this.route.snapshot.params["bookId"];
    this.hasAuthorityUser = this.authService.isUser();
    this.getBookDetails(bookId);
  }

  getBookDetails(tempBookId:any){
    this.bookService.getBook(tempBookId)
    .then((response) => {
      this.book = response.data;
    })
  }

  redirectAllBooks() {
    this.bookService.redirectAllBooks();
  }

  getNumber(e: any) {
    return this.mainService.getNumber(e);
  }

  addOrder(bookId: any) {
    return this.orderService.addOrder(bookId)
    .then(() => {
      this.router.navigate([`orders/orderCompleted`]);
    }, function(){
      alert(`Failed!`);
    })
  }

}
