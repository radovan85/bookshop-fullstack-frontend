import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { Book } from 'src/app/common/book';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BookService } from 'src/app/services/book.service';
import { MainService } from 'src/app/services/main.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-book-update-form',
  templateUrl: './book-update-form.component.html',
  styleUrls: ['./book-update-form.component.css']
})
export class BookUpdateFormComponent implements OnInit {

  book: Book = new Book

  constructor(private bookService: BookService, private router: Router,
    private route: ActivatedRoute, private mainService: MainService,
    private validationService: ValidationService) { }

  ngOnInit(): void {
    var bookId = this.route.snapshot.params["bookId"];
    this.getBookDetails(bookId);
  }

  async updateBook() {
    if (this.validateBook()) {
      this.bookService.setBook(this.book);
      this.bookService.updateBook()
        .then(() => {
          this.bookService.collectAllBooks();
          this.bookService.redirectAllBooks();
        }, function () {
          alert(`Failed`);
        })
    }
  }

  getBookDetails(tempBookId: any) {
    this.bookService.getBook(tempBookId)
      .then((response) => {
        this.book = response.data;
      })
  }

  validateNumber(e: any) {
    return this.mainService.validateNumber(e);
  }

  validateBook() {
    return this.validationService.validateBook();
  }

}
