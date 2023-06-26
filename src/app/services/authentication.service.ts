import { Injectable, OnInit } from '@angular/core';
import axios from 'axios';
import { User } from '../common/user';
import { Router } from '@angular/router';
import { Role } from '../common/role';

var target_url = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements OnInit {

  constructor(private router: Router) {
   }

  private hasAuthorityAdmin = false;
  private hasAuthorityUser = false;

  ngOnInit(): void {
    this.hasAuthorityAdmin = this.isAdmin();
    this.hasAuthorityUser = this.isUser();
  }

  isAdmin(): boolean {
    var role = localStorage.getItem(`role`);
    if(role){
      if(role == 'ADMIN'){
        return true;
      }else{
        return false;
      }
    }

    return false;
  }


  isUser(): boolean {
    var role = localStorage.getItem(`role`);
    if(role){
      if(role == 'ROLE_USER'){
        return true;
      }else{
        return false;
      }
    }

    return false;
  }

  





  isAuthenticated() {
    var returnValue = false;
    var authUser = localStorage.getItem('currentUser');
    var authToken = localStorage.getItem('authToken');
    if (authUser) {
      if (authToken) {
        returnValue = true;
      }
    }

    return returnValue;
  }

  getUserRoles() {
    if (this.isAuthenticated()) {
      var currentUser = localStorage.getItem('currentUser');
      var rolesIds: string[] = [];
      if (currentUser) {
        var userModel = JSON.parse(currentUser) as User;
        var user = Object.values(userModel)[0];

        Object.entries(user).forEach(([key, value]) => {
          if (key === `rolesIds`) {
            if (value) {
              rolesIds.push(String(value));
            }
          }
        })

        if (rolesIds) {
          var headers = this.getHeaders()
          rolesIds.forEach((roleId) => {
            axios.get(`${target_url}roleId/${roleId}`, {
              headers
            })
              .then((response) => {
                var role: Role = response.data;
                console.log(role);
                if (role.role === `ADMIN`) {
                  localStorage.setItem(`adminRole`, role.role);
                  console.log('Admin found');
                }

                if (role.role === `ROLE_USER`) {
                  localStorage.setItem(`userRole`, role.role);
                }
              })
          })
        }

      }
    }
  }



  getHeaders() {
    var authToken = localStorage.getItem('authToken');
    if (authToken) {
      return {
        authorization: authToken,
        'Content-Type': "application/json; charset=UTF-8"
      }
    }

    return {};

  }

  logOut() {
    var authToken = localStorage.getItem('authToken');
    if (authToken) {
      var data = {}
      var headers = this.getHeaders();
      axios.post(`${target_url}loggedout`, data, {
        headers
      })
        .then(() => {
          localStorage.clear();
          this.router.navigate([`login`]);
        }, function (error) {
          console.log(error);
        })
    }
  }

}

