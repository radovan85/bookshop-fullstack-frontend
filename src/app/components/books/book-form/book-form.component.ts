import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { Book } from 'src/app/common/book';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BookService } from 'src/app/services/book.service';
import { MainService } from 'src/app/services/main.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  book: Book = new Book

  constructor(private bookService: BookService,private router: Router,
     private mainService: MainService,private validationService:ValidationService) { }

  ngOnInit(): void {
  }

  addBook() {
    if (this.validateBook()) {
      this.bookService.setBook(this.book)
      this.bookService.addBook()
        .then(() => {
          this.bookService.collectAllBooks();
          this.bookService.redirectAllBooks();
        }, function () {
          alert(`Failed!`);
        })
    }
  }

  validateBook(){
    return this.validationService.validateBook();
  }


  validateNumber(e: any) {
    return this.mainService.validateNumber(e);
  }
}
