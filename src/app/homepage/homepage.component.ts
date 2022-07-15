import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  loggedIn = false;
  user: string | undefined;
  username: any;
  title: any;
  view:any;
  // constructor(private authService: AuthService, private router: Router) { 
  //   this.loggedIn = this.authService.isLoggedIn();
  //   this.user = this.authService.getUser();
  // }
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=>{
      console.log(result);
      this.username = result
      var name = result.filter((e:any)=> e.username == 'Delphine')
      console.log(name);
      for(let i=0; i<result.length; i++){
        
        console.log(result[i].username);
     
      }
    })
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((res:any)=>{
      console.log(res);
      this.title=res;
      res=res.filter((e:any)=>e.id<=3);
      this.view=res;
      for(let i=0; i<10; i++){
        console.log(res[i].title);
      }
    })
  }
  logout(){
    this.router.navigate(['login']);
    localStorage.removeItem('user');
  }
  learn(){
    // this.router.navigate(['register']);
    let myDialog:any = <any>document.getElementById("myDialog");
    myDialog.showModal();
  }
  game1(){
    this.router.navigate(['homepage/stock']);
  }
  game2(){
    this.router.navigate(['homepage/rock-paper-scissor']);
  }
  game3(){
    this.router.navigate(['homepage/whack-mole']);
  }
  game4(){
    this.router.navigate(['homepage/quiz']);
  }
}

