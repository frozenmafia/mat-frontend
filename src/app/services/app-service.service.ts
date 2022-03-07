import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private serverUrl = "http://127.0.0.1:5000/";

  constructor(
    private http:HttpClient
  ) { }

  login(email: any,password: any){
    return this.http.post(
      this.serverUrl.concat('login'),
      JSON.stringify(
        {
          'email':email,
          'password':password
        }
      )
    )
  }


}
