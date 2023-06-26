import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private authService:AuthenticationService,private router:Router) { }

  getNumber(value: any) {
    var returnValue = Number(value).toFixed(2);
    return returnValue;
  }

  validateNumber(e: any) {
    var pattern = /^\d{0,4}(\.\d{0,4})?$/g;
    return pattern.test(e.key);
  }

  redirectHome() {
    this.router.navigate([`home`]);
  }

  redirectRegister(){
    this.router.navigate([`register`]);
  }
}
