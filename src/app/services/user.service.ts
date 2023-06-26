import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import axios from 'axios';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user:User = new User;

  constructor(private authService:AuthenticationService) { }

  listAllUsers(){
    var headers = this.authService.getHeaders();
    return axios.get(`http://localhost:8080/api/allUsers`, {
      headers
    })
  }

  async addUser(){
    var headers = this.authService.getHeaders();
    return await axios.post(`http://localhost:8080/api/register`, {
      firstName : this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: this.user.password
    }, {
      headers
    })
  }

  setUser(user:User){
    this.user = user;
  }

  getCurrentUser(){
    var headers = this.authService.getHeaders();
    return axios.get(`http://localhost:8080/api/currentUser`, {
      headers
    })
  }
  
}
