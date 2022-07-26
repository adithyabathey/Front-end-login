import { HttpClient } from '@angular/common/http';
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
  passwor:any;
  user:any=[];
  employees: any;
  constructor(private authService: AuthService, private router: Router,private http:HttpClient) { this.message = '';
  // this.loggedIn = this.authService.isLoggedIn();
}



  ngOnInit(): void {
    this.http.get('http://localhost:3000/getemployees').subscribe((result:any)=>{
      console.log(result);
      this.employees = result;
      // this.username = result
    //   for(let i=0; i<result.length; i++){
    //     JSON.stringify(result[i].Name);
    //     console.log(result[i].Name);
    //     this.user.push(result[i].Name);
    //   }
    })
  }
  register(){
    this.router.navigate(['register']);
  }
  login(){
    console.log(this.username, this.passwor);
    let help=1;
    for(var i=0;i<this.employees.length;i++){
      if((this.employees[i].Name).toLowerCase() == this.username.toLowerCase() && 
      (this.employees[i].password).toLowerCase() == this.passwor.toLowerCase()){
        help=0;
        localStorage.setItem('user', this.user);
        localStorage.setItem('user', this.passwor);
        this.router.navigate(['/homepage']);
      }
    }
    if(help){
      this.username='';
      this.passwor='';
      alert('invalid username or password');
    }
    // this.authService.login(this.username, this.password)
    // if(!this.authService.login(this.username, this.password)){
    //   this.message = 'User Name or Password is incorrect';
    //   return false;
    // }else{
    //   this.router.navigate(['/homepage']);
    // }
    // let user: Array<string>;
    // this.user = ['apple', 'orange', 'banana','grape' ]; 
    // let pass: Array<string>;
    // pass = ['taste1', 'taste2', 'taste3','taste4','taste5','taste6']; 
    // for(let i=0;i<this.user.length;i++){
    //   console.log(this.user[i]);
    // }
    // for(let i=0;i<pass.length;i++){
    //   console.log(pass[i]);
    // }
    // let help=0;
    // for(let i=0;i<this.user.length;i++){
    //   if(this.user[i]==this.username && pass[i]==this.password){
    //     // this.router.navigate(['homepage']);
    //     help=1;
    //   }
    // }
    // if(help==0){
    //     if(this.username!=="" || this.password!==""){
    //       alert('username or password is incorrect')
    //     }
    //     // let help=document.getElementById("pas");
    //     // help:String.innerHTML="";
    //   } 
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