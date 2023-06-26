import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User;

  constructor(private userService: UserService, private validationService: ValidationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addUser() {
    if (this.validateUser()) {
      this.userService.setUser(this.user);
      this.userService.addUser()
        .then(() => {
          this.router.navigate([`registrationCompleted`]);
        })
        .catch(() => {
          alert(`Email already in use!`);
        })
    }
  }

  validateUser() {
    return this.validationService.validateUser();
  }
}
