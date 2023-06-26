import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-registration-completed',
  templateUrl: './registration-completed.component.html',
  styleUrls: ['./registration-completed.component.css']
})
export class RegistrationCompletedComponent implements OnInit {

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
  }

  redirectHome(){
    this.mainService.redirectHome();
  }

}
