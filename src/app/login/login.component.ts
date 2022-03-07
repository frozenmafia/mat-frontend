import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private appservice:AppServiceService
  ) { }

  email="";
  password="";

  ngOnInit(): void {
  }
  signIn(){
    console.log(this.email);
    console.log(this.password);
    this.appservice.login(this.email,this.password).subscribe();


  }

}
