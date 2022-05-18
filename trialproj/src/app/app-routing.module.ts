import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResetComponent } from './reset/reset.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes = [

  {
    path:'app',
    component:AppComponent,
  },
  {
    path:'signin',
    component:SigninComponent,
  },
  {
    path:'',
    component:SignupComponent,
  },
  {
  path:'home',
  component:HomeComponent
  },
  {
  path:'reset',
  component:ResetComponent
  },
  {
    path:'studentdetails/:id',
    component:StudentdetailsComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
