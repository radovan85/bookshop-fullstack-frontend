import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-completed',
  templateUrl: './order-completed.component.html',
  styleUrls: ['./order-completed.component.css']
})
export class OrderCompletedComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectHome(){
    this.router.navigate([`home`]);
  }

}
