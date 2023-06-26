import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookFormComponent } from './components/books/book-form/book-form.component';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';
import { BookUpdateFormComponent } from './components/books/book-update-form/book-update-form.component';
import { OrderCompletedComponent } from './components/orders/order-completed/order-completed.component';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';
import { RegistrationCompletedComponent } from './components/registration/registration-completed/registration-completed.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    BookListComponent,
    BookFormComponent,
    BookDetailsComponent,
    BookUpdateFormComponent,
    OrderCompletedComponent,
    OrderListComponent,
    OrderDetailsComponent,
    RegistrationComponent,
    RegistrationCompletedComponent,
    UnauthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
