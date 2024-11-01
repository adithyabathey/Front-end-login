import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rockpaperscissor',
  templateUrl: './rockpaperscissor.component.html',
  styleUrls: ['./rockpaperscissor.component.scss']
})
export class RockpaperscissorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
      //for displaying the choices
  }

  back(){
    this.router.navigate(['homepage']);
  }

  userScore = 0;
  compScore = 0;
  userSelected: any;
  compSelected: any;
  action: any;
  status: any;
  compWeapons = [
    'rock',
    'paper',
    'scissors'
  ];
  userChoice: string | undefined;

  userPick(userWeapon: string): void {
    this.userSelected = userWeapon;
    console.log( this.userSelected);
    setTimeout( () => {
      const randomNum = Math.floor(Math.random() * 3);
      this.compSelected = this.compWeapons[randomNum];
      console.log(this.compSelected);
      this.checkResult();
    }, 1000);
  }

  clearField() {
    setTimeout(() => {
      this.status = '';
      this.userSelected = '';
      this.compSelected = '';
    }, 1500);
  }

  win(user: string | undefined, comp: string | undefined) {
    this.userScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'beats';
    this.status = '. You win!';
    this.clearField();
  }


  lose(user: string | undefined, comp: string | undefined) {
    this.compScore ++;
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'loses to';
    this.status = '. You lose!';
    this.clearField();
  }

  draw(user: string | undefined, comp: string | undefined) {
    this.userSelected = user;
    this.compSelected = comp;
    this.action = 'and';
    this.status = '. You draw!';
    this.clearField();
  }

  checkResult() {
    const userChoice = this.userSelected;
    const compChoice = this.compSelected;
    switch (userChoice + compChoice) {
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        this.win(userChoice, compChoice);
        break;
      case 'rockpaper':
      case 'scissorsrock':
      case 'paperscissors':
        this.lose(userChoice, compChoice);
        break;
      default:
        this.draw(userChoice, compChoice);
        break;
    }

  }
  

}

