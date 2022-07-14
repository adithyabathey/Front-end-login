import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {
  username: any;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api2.binance.com/api/v3/ticker/24hr').subscribe((result:any)=>{
      console.log(result);
      this.username = result
      // var name = result.filter((e:any)=> e.username == 'Delphine')
      // console.log(name);
      for(let i=0; i<result.length; i++){
        
        console.log(result[i].symbol);
     
      }
    })
  }
  back(){
    this.router.navigate(['homepage']);
  }
}
