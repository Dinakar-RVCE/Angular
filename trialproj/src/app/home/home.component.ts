import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  ngOnInit(): void {
  }


  constructor(private router:Router){

  }

  user: any = JSON.parse(localStorage.getItem('employee_user') as string);
  
  getfromstorage() {
    let users = localStorage.getItem("employee_user");
    return (users === null ? [] :JSON.parse(users));
  }

  deletestorage(id:any){
    let user = this.getfromstorage();
    let newuser = user.filter((ele:any)=>{
      if(ele.id != id){
        return ele;
      }
    });

    localStorage.setItem('employee_user',JSON.stringify(newuser));
    this.router.navigate(['/home']);
  }
  

}
