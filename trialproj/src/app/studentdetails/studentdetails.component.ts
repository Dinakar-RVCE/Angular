import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute) { }

  // sudentid:Number=10;
  individualstudent:any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("ID",id)
    

    let user = this.getfromstorage();
    let newuser = user.find((t:any)=>t.id == id);
    this.individualstudent = newuser;
    console.log(newuser);
    console.log(this.individualstudent);
  }

  getfromstorage():any{
    let users = localStorage.getItem("employee_user");
    return (users === null ? [] :JSON.parse(users));
  }

  
  
  

}
