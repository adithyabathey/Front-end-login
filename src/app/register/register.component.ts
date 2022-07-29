import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Name: any;
  email: any;
  pass:any;
  employees: any;
  help:any;
  constructor(private router: Router,private http:HttpClient) { }

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
  createaccount(){
    let user=this.Name;
    // let password=this.pass;
    console.log(this.Name);
    console.log(this.email);
    console.log(this.pass);
    let record = {
      Name: this.Name,
      Password: this.pass
    }
    this.help=0;
      if(this.Name==undefined && this.pass==undefined){
        alert("fill out the name and password");
        this.help=1; 
    }
    console.log(record);
    this.http.post('http://localhost:3000/post',record).subscribe(res=>{
      if(!this.help){
        alert("Create Succesfully");
        console.log(res);
        this.router.navigate(['login']);
      }
    })
    // user.push_back(user);
    
    // let work=0;
    // if()
  }
  back(){
    this.router.navigate(['login']);
  }
}
