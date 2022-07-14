import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'test';
  role:any;
  constructor(private router:Router){
  this.role=localStorage.getItem('user');
  if(! this.role){
    this.router.navigate(['/login'])
  }
  else{
  this.router.navigate(['/homepage'])
  }
}
}
