import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupUsers: any[]=[];
  signupObj: any={
    userName:'',
    email: '',  
    password: ''
  };
  loginObj : any={
    userName:'',  
    password: ''
  }
  constructor(private router: Router) {}
  ngOnInit(): void {
    const localData=localStorage.getItem('signupUsers')
    if(localData !=null){
      this.signupUsers=JSON.parse(localData);
    }
    console.log(this.signupUsers);
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers)); 
    this.signupObj={
      
        userName:'',
        email: '',  
        password: ''
      };
      console.log(this.signupUsers);
  }
  isLoggedIn = false; // Set to true after successful login

  onLogin() {
    const isUserExist = this.signupUsers.find(
      m => m.userName === this.loginObj.userName && m.password === this.loginObj.password
    );
  
    if (isUserExist !== undefined) {
      alert("User Login Successfully");
      this.isLoggedIn = true;
      this.router.navigate(['/dashboard']); // Navigate after successful login.
    } else {
      alert('Wrong Credentials');
    }
    
  }

  }


