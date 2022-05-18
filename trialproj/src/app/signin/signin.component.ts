import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getfromstorage():any{
    let users = localStorage.getItem("employee");
    return (users === null ? [] :JSON.parse(users));
  }

  login(username:any,password:any):any{
    let user = this.getfromstorage();
    let newuser = user.find((t:any)=>t.username == username.value && t.password==password.value);
    console.log(newuser);
    if(newuser){
      this.router.navigate(['/home']);
    }
  }

  mysigninform = new FormGroup({
    "username": new FormControl("", Validators.compose([Validators.required,Validators.minLength(3)])),
    "password": new FormControl("", Validators.compose([Validators.required, Validators.minLength(8)])),
    });
    
    
    onSubmit() {
    console.log("reactive form submitted");
    console.log(this.mysigninform.value);
    console.log(this.mysigninform.get('username')?.value);
    console.log(this.mysigninform.controls['username'].value);
    console.log(this.mysigninform.controls['password'].value);

    let user = this.getfromstorage();
    let newuser = user.find((t:any)=>t.username == this.mysigninform.controls['username'].value && t.password==this.mysigninform.controls['password'].value);
    console.log(newuser);
    if(newuser){
      this.router.navigate(['/home']);
    }
}

}