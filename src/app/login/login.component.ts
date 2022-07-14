import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  message: string;
  loggedIn = false;
  username:any;
  password:any;
  constructor(private authService: AuthService, private router: Router) { this.message = '';
  this.loggedIn = this.authService.isLoggedIn();
}



  ngOnInit(): void {
  }
  register(){
    this.router.navigate(['register']);
  }
  login(){
    console.log(this.username, this.password);
    this.authService.login(this.username, this.password)
    // if(!this.authService.login(this.username, this.password)){
    //   this.message = 'User Name or Password is incorrect';
    //   return false;
    // }else{
    //   this.router.navigate(['/homepage']);
    // }
    let user: Array<string>;
    user = ['apple', 'orange', 'banana','grape']; 
    let pass: Array<string>;
    pass = ['taste1', 'taste2', 'taste3','taste4']; 
    let help=0;
    for(let i=0;i<4;i++){
      if(user[i]==this.username && pass[i]==this.password){
        // this.router.navigate(['homepage']);
        help=1;
      }
    }
    if(help==0){
        if(this.username!=="" || this.password!==""){
          alert('username or password is incorrect')
        }
        // let help=document.getElementById("pas");
        // help:String.innerHTML="";
      } 
  }
  
  // login(){
    // let user: Array<string>;
    // user = ['apple', 'orange', 'banana','grape']; 
    // let pass: Array<string>;
    // pass = ['taste1', 'taste2', 'taste3','taste4']; 
    // let help=0;
    // for(let i=0;i<4;i++){
    //   if(user[i]==this.username && pass[i]==this.password){
    //     this.router.navigate(['homepage']);
    //     help=1;
    //   }
    // } 
  //   if(help==0){
  //     alert('username or password is incorrect')
  //   }
  // }
  
}