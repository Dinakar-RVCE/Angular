import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getfromstorage() {
    let users = localStorage.getItem("employee");
    return (users === null ? [] :JSON.parse(users));
  }

  signup(username:any,password:any):any{

  //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username.value))
  // {
  //   console.log("correct email");
  // }
  // else{
  //   console.log("You have entered an invalid email address!");
  // }

    let user = this.getfromstorage();
    localStorage.setItem('employee', JSON.stringify(
      [...user, {"id":(user.length === 0 ? 1 : user[user.length - 1].id + 1),"username":username.value,"password":password.value}]
    ));
    console.log(localStorage.getItem('student_user'));
    this.router.navigate(['/signin']);
  };


  reg:any={
    username:'',
    password:'',
    email:'',
    phone:''

    };
    

  

  onSubmitTemplateBasedsignup(reg:any){
    let user = this.getfromstorage();
    let checkusername = user.find((t:any)=>t.username==reg.username && t.email==reg.email);
    if(checkusername){
      this.snackBar.open("Username exist","cancel",{duration: 1000});
      
    }
    else
    {
      console.log(reg);
      console.log(reg.username);
      console.log(reg.password);
      console.log(user);
      localStorage.setItem('employee', JSON.stringify(
        [...user, {"id":(user.length === 0 ? 1 : user[user.length - 1].id + 1),"email":reg.email,"username":reg.username,"password":reg.password,"phone":reg.phone}]
      ));
      console.log(localStorage.getItem('employee'));
      this.snackBar.open("Registered Successfully","cancel",{duration: 2000});
      this.router.navigate(['/signin']);
    }
  }

}
