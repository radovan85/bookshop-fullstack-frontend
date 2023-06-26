import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UnidentifiedGuard } from './guards/unidentified.guard';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookFormComponent } from './components/books/book-form/book-form.component';
import { AdminGuard } from './guards/admin.guard';
import { BookDetailsComponent } from './components/books/book-details/book-details.component';
import { BookUpdateFormComponent } from './components/books/book-update-form/book-update-form.component';
import { OrderCompletedComponent } from './components/orders/order-completed/order-completed.component';
import { UserGuard } from './guards/user.guard';
import { OrderListComponent } from './components/orders/order-list/order-list.component';
import { OrderDetailsComponent } from './components/orders/order-details/order-details.component';
import { RegistrationComponent } from './components/registration/registration/registration.component';
import { RegistrationCompletedComponent } from './components/registration/registration-completed/registration-completed.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnidentifiedGuard]
  },
  {
    path: 'books',
    component: BookListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'books/addBook',
    component: BookFormComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `books/bookDetails/:bookId`,
    component: BookDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: `books/updateBook/:bookId`,
    component: BookUpdateFormComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `orders/orderCompleted`,
    component: OrderCompletedComponent,
    canActivate: [UserGuard]
  },
  {
    path: `orders`,
    component: OrderListComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `orders/orderDetails/:orderId`,
    component: OrderDetailsComponent,
    canActivate: [AdminGuard]
  },
  {
    path: `register`,
    component: RegistrationComponent,
    canActivate: [UnidentifiedGuard]
  },
  {
    path: `registrationCompleted`,
    component: RegistrationCompletedComponent,
    canActivate: [UnidentifiedGuard]
  },
  {
    path: `unauthorized`,
    component: UnauthorizedComponent
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


