import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  user:any = JSON.parse(localStorage.getItem('employee') as string);

  getfromstorage() {
    let users = localStorage.getItem("employee");
    return (users === null ? [] :JSON.parse(users));
  }
  
  resetpassword(id:any,username:any,password:any,repassword:any):any{
    let user = this.getfromstorage();
    let newuser = user.map(
      (t:any)=>{
        if(t.username==username.value){
          
          return {"id":id,"username":username.value,"password":password.value};
        }
        else{
          return t;
          
        }
      }
      );
      localStorage.setItem('employee',JSON.stringify([...newuser]));
      this.router.navigate(['/signin']);

  }
  

}
