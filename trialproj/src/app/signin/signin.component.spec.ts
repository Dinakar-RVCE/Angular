import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });


  // it('should create', () => {
  //   let buttonElement = fixture.debugElement.nativeElement.querySelector('#loginbutton');
  //   console.log("Button Elemenet",buttonElement)
  //   expect(buttonElement.innerHTML).toBe('Login');
  //   // buttonElement.
  //   // expect(buttonElement.query).toContain('home works!');
  //   });
  
});
