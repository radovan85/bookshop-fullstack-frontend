import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Book } from 'src/app/common/book';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BookService } from 'src/app/services/book.service';
import { MainService } from 'src/app/services/main.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: Book[] = [];
  hasAuthorityAdmin = false;
  hasAuthorityUser = false;

  constructor(private bookService: BookService, private authService: AuthenticationService,
    private router: Router, private mainService: MainService) {
  }

  ngOnInit(): void {
    this.listAllBooks();
    this.hasAuthorityUser = this.authService.isUser();
    this.hasAuthorityAdmin = this.authService.isAdmin();
  }

  listAllBooks() {
    this.bookService.collectAllBooks()
      .then((response) => {
        $('#listingTable').DataTable().destroy();
        setTimeout(function () {
          $('#listingTable').DataTable();
        }, 1)
        setTimeout(() => this.bookList = response.data);
      })
  }



  redirectBookDetails(bookId: any) {
    this.bookService.redirectBookDetails(bookId);
  }

  redirectUpdateBook(bookId: any) {
    this.bookService.redirectUpdateBook(bookId);
  }

  redirectAddBook() {
    this.bookService.redirectAddBook();
  }

  getNumber(value: any) {
    return this.mainService.getNumber(value);
  }

  deleteBook(bookId: any) {
    if (confirm(`Remove this book?`)) {
      this.bookService.deleteBook(bookId)
        .then(() => {
          this.listAllBooks();
          this.bookService.redirectAllBooks();
        }, function () {
          alert(`Failed!`);
        })
    }
  }

}
