import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  loggedIn = true;

  ngOnInit(): void {
  }

  isLoggedIn(){
    return !this.loggedIn;
  }

  logout(){
    console.log("Log out");
  }

  getCurrentUserName(){
    if(this.isLoggedIn()){
      // console.log(this.app.currentUser)
      return "Shivank Anchal"
    }
    else{
      return "Account"
    }
  }
}
