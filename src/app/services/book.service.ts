import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { AuthenticationService } from './authentication.service';
import { ValidationService } from './validation.service';
import { Book } from '../common/book';

var target_url = 'http://localhost:8080/api/books/';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  book: Book = new Book;

  constructor(private router: Router, private authService: AuthenticationService,
    private validationService: ValidationService) { }

  redirectBookDetails(bookId: any) {
    this.router.navigate([`books/bookDetails/${bookId}`]);
  }

  redirectUpdateBook(bookId: any) {
    this.router.navigate([`books/updateBook/${bookId}`]);
  }

  redirectAllBooks() {
    this.router.navigate(['books']);
  }

  redirectAddBook() {
    this.router.navigate([`books/addBook`]);
  }

  async addBook() {
    var headers = this.authService.getHeaders();
    return await
      axios.post(`${target_url}storeBook`, {
        title: this.book.title,
        description: this.book.description,
        author: this.book.author,
        price: this.book.price
      }, {
        headers
      })
  }

  async updateBook() {
    var headers = this.authService.getHeaders();
    return await
      axios.put(`${target_url}updateBook/${this.book.bookId}`, {
        title: this.book.title,
        description: this.book.description,
        author: this.book.author,
        price: this.book.price
      }, {
        headers
      })
  }

  collectAllBooks() {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}allBooks`, {
      headers
    })
  }

  async deleteBook(bookId: any) {
    var headers = this.authService.getHeaders();
    return await
      axios.delete(`${target_url}deleteBook/${bookId}`, {
        headers
      })
  }

  getTargetUrl() {
    return target_url;
  }

  getBook(bookId: any) {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}bookDetails/${bookId}`, {
      headers
    })
  }

  setBook(book:Book){
    this.book = book;
  }



}
