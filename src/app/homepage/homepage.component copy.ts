import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  learn(){
    // this.router.navigate(['homepage/register']);
  }
  logout(){
    this.router.navigate(['login']);
    localStorage.removeItem('user');
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
