import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  validateBook(): boolean {
    var title = (<HTMLInputElement>document.getElementById('title')).value;
    var description = (<HTMLInputElement>document.getElementById('description')).value;
    var author = (<HTMLInputElement>document.getElementById('author')).value;
    var price = (<HTMLInputElement>document.getElementById('price')).value;

    var titleError = document.getElementById('titleError');
    var descriptionError = document.getElementById('descriptionError');
    var authorError = document.getElementById('authorError');
    var priceError = document.getElementById('priceError');

    var priceNum = Number(price);
    var returnValue = true;

    if (titleError) {
      if (title === "" || title.length > 50) {
        titleError.style.visibility = "visible";
        returnValue = false;
      } else {
        titleError.style.visibility = "hidden";
      }
    }

    if (descriptionError) {
      if (description === "" || description.length > 100) {
        descriptionError.style.visibility = "visible";
        returnValue = false;
      } else {
        descriptionError.style.visibility = "hidden";
      }
    }

    if (authorError) {
      if (author === "" || author.length > 50) {
        authorError.style.visibility = "visible";
        returnValue = false;
      } else {
        authorError.style.visibility = "hidden";
      }
    }

    if (priceError) {
      if (price === "" || priceNum <= 0) {
        priceError.style.visibility = "visible";
        returnValue = false;
      } else {
        priceError.style.visibility = "hidden";
      }
    }

    return returnValue;

  }

  validateUser():boolean {
    var firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    var lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    var confirmpass = (<HTMLInputElement>document.getElementById("confirmpass")).value;

    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var returnValue = true;

    if (password != confirmpass) {
      alert("Password does Not Match.");
      return false;
    }

    if (firstNameError) {
      if (firstName === "" || firstName.length > 30) {
        returnValue = false;
        firstNameError.style.visibility = "visible";
      } else {
        firstNameError.style.visibility = "hidden";
      }
    }

    if (lastNameError) {
      if (lastName === "" || lastName.length > 30) {
        returnValue = false;
        lastNameError.style.visibility = "visible";
      } else {
        lastNameError.style.visibility = "hidden";
      }
    }

    if (emailError) {
      if (email === "" || email.length > 40 || !regEmail.test(email)) {
        emailError.style.visibility = "visible";
        returnValue = false;
      } else {
        emailError.style.visibility = "hidden";
      }
    }

    if (passwordError) {
      if (password.length < 6 || password.length > 30) {
        passwordError.style.visibility = "visible";
        returnValue = false;
      } else {
        passwordError.style.visibility = "hidden";
      }
    }

    return returnValue;
  }
}
