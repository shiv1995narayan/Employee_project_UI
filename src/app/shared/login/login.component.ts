import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  public match = false;
  public adminData;
  loginForm:FormGroup;

  constructor(private admin: AdminService , private router: Router , private fb:FormBuilder) { }

  ngOnInit(): void
  {

  this.loginForm = this.fb.group({
   userName: ['',[Validators.required,Validators.email]],
   password: ['',[Validators.required]]
  })
   this.admin.getAdminData().subscribe(data =>
      {
        this.adminData = data

      });

  }


  check()
  {
    if(this.adminData.username === this.loginForm.value.userName &&
      this.adminData.password === this.loginForm.value.password)
    {

      this.router.navigate(['employeeList']);

    }
    else
    {
      this.match= true;
    }

  }





}
