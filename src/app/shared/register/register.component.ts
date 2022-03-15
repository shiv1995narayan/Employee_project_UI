import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmpServiceService } from './emp-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

regForm : FormGroup;
public message;
public allEmployeeData;
public submitData = false;
public spinner=false;

  constructor(private fb: FormBuilder ,
              private empService: EmpServiceService,
              private router: Router,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<RegisterComponent>,
             @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {

    this.regForm = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      role: ['',[Validators.required]],
      experiance: ['',[Validators.required]],
      password: ['', [Validators.required]]
    })
    if(this.data !== null) {
      this.regForm.patchValue({
      id: this.data?.id,
      name: this.data?.name,
      email: this.data?.email,
      role: this.data?.role,
      experiance: this.data?.experiance,
      password: this.data?.password
      });
    }
     }




   onSubmit(submitForm: FormGroup)
   {
     this.spinner= true;
     setTimeout(() => {
       this.spinner = false
     },3000);

    const emp = submitForm.value;
    const formData = new FormData();
    formData.append('emp',JSON.stringify(emp));
    if(this.data !== null) {
      submitForm.value.id = this.data.id;;
   const formData = new FormData();
    formData.append('emp',JSON.stringify(emp));
      this.empService.sendDateTODatabaseUpdate(submitForm.value).subscribe((response)=>{
        if(response != null)
        {
          let refresh = this.snackBar.open(response , 'Dismiss');
          refresh.afterDismissed().subscribe(()=>{
            window.location.reload();
          })
  
  
        }
      },(err)=>{
        let refresh = this.snackBar.open(err.error.text , 'Dismiss');
        refresh.afterDismissed().subscribe(()=>{
          window.location.reload();
        })
      })
    }else {
    this.empService.sendDateTODatabase(formData).subscribe((response)=>{
      this.message = response.name;
      if(this.message != null)
      {
        let refresh = this.snackBar.open('Data Submitted Successfully' , 'Dismiss');
        refresh.afterDismissed().subscribe(()=>{
          window.location.reload();
        })


      }
    })
  }

   }

}
