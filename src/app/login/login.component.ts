import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username=""
  password=""
  loginmessage=""

  constructor(private http: HttpClient){}

  login(){
    const loginData = {
      username: this.username,
      password: this.password
    }
    try {
        this.http.post('http://localhost:5000/login', loginData)
      .subscribe({
        next: (response: any) =>{
          this.loginmessage = response.message;
        },
        error: (error) =>{
          this.loginmessage = error.error.message
          console.log("Network error")
        }
      })
    } catch (error) {
      this.loginmessage = "Could not reach backend"
      console.log("Could not reach backend")
    }
    
  }

  
}
