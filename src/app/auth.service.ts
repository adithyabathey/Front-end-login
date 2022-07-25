import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions: any;
  public profile: any;
  public username: any;
  public password : any;
  public usr :any;

  constructor(private http: HttpClient, private router: Router) { }
  
  login(user: string, password: string): boolean{
    // if(user==='admin' && password==='angular'){
    //   localStorage.setItem('user', user);
    //   return true;
    // }
    // return false; 
    console.log(user, password);  
    let users: Array<string>;
    users = ['apple', 'orange', 'banana','grape']; 
    let pass: Array<string>;
    pass = ['taste1', 'taste2', 'taste3','taste4']; 
    let help=0;
    for(let i=0;i<4;i++){
      if(users[i]=== user && pass[i]===password){
        console.log(users[i]=== user)
        localStorage.setItem('user', user);
        help=1;
        this.router.navigate(['/homepage']);
           return true;
    }

    if(help==0){
      alert("incorrect password")
      return false;
    }
    } 
    return false; 
  }
  logout(){
    localStorage.removeItem('user');
  }

  getUser(): any{
    return localStorage.getItem('user');
  }

  isLoggedIn(): boolean{
    return localStorage.getItem('user') !== null;
  }
}