import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whack-mole',
  templateUrl: './whack-mole.component.html',
  styleUrls: ['./whack-mole.component.scss']
})
export class WhackMoleComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['homepage'])
  }

}




  
//   const squares=document.querySelectorAll(".square");
//   const mole=document.querySelector(".mole");
//   const timeLeft=document.querySelector("#time-left");
//   const score=document.querySelector("#score");

//   result=0;
//   hitPosition: any;
//   currentTime=60;
//   timerId: any;

//   //css add/remove in array
//   randomSquare(){
//       this.squares.forEach((square: { classList: { remove: (arg0: string) => void; }; })=>{
//           square.classList.remove('mole');
//       })

//       let randomSquare=this.squares[Math.floor(Math.random()*9)];
//       randomSquare.classList.add("mole");
//       this.hitPosition=randomSquare.id;
//   }


//   //score
//   squares.forEach((square: { addEventListener: (arg0: string, arg1: () => void) => void; id: any; })=>{
//       square.addEventListener("mousedown",()=>{
//           if(square.id===hitPosition){
//               result++;
//               score.innerHTML=result;
//               hitPosition=null;
//           }
//       })
//   })

//   //generating mole randomly using setInterval
//   function moleMove(){
//       const timerId=setInterval(randomSquare,500);
//   }

//   moleMove()


//   //Timer
//   function countDown(){
//       currentTime--;
//       timeLeft.innerHTML=let currentTime;
//       if(currentTime==0){
//           clearInterval(countDownTimerId);
//           clearInterval(timerId);
//           alert("the time is over, YOUR SCORE = " + result);
//       }
//   }

//   let countDownTimerId=setInterval(countDown,1000);

// }
// function randomSquare(randomSquare: any, arg1: number) {
//   throw new Error('Function not implemented.');
// }

// function timerId(timerId: any) {
//   throw new Error('Function not implemented.');
// }
