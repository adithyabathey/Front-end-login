import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName: any;
  pass: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  createaccount(){
    let user=this.firstName;
    let password=this.pass;
    console.log(this.firstName);
    // user.push_back(user);
    
    // let work=0;
    // if()
    this.router.navigate(['login']);
  }
  back(){
    this.router.navigate(['login']);
  }
}
