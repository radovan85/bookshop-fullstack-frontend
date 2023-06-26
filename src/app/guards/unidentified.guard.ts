import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UnidentifiedGuard implements CanActivate {

  isAuthenticated: boolean = false;

  constructor(private router: Router, private authenticationService:AuthenticationService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authenticationService.isAuthenticated()){
        this.router.navigate(['home']);
        return false;
      }

      return true;
  }

}
