import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { AuthenticationRequest } from 'src/app/common/authentication-request';
import { Role } from 'src/app/common/role';
import { User } from 'src/app/common/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

var target_url = 'http://localhost:8080/api/';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  authRequest: AuthenticationRequest = new AuthenticationRequest;
  authUser: User = new User;
  authToken: string[] = [];
  

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    var alertMessage = document.getElementById(`alertMessage`);
    await
      axios.post(`${target_url}login`, {
        username: this.authRequest.username,
        password: this.authRequest.password
      })
        .then((response) => {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.authUser = response.data;
          var tokenStr = this.authUser.authToken;
          var authToken = '';
          if (tokenStr) {
            authToken = `Bearer ${tokenStr}`;
            localStorage.setItem('authToken', authToken);
            var roleIdStr = this.authUser.rolesIds;
            if(roleIdStr){
              var roleId = JSON.parse(Object.values(roleIdStr)[0]);
              if(roleId == `1`){
                localStorage.setItem(`role`,`ADMIN`);
              }

              if(roleId == `2`){
                localStorage.setItem(`role`,`ROLE_USER`);
              }
            }

            
            
          }

          if(alertMessage){
            alertMessage.style.visibility = `hidden`;
          }
          
          this.router.navigate([`home`]);

        }, function () {
          if(alertMessage){
            alertMessage.style.visibility = `visible`;
          }
        })
  }

}
