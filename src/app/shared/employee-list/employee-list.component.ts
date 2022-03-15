import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../register/emp-service.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 allEmployeeData:any;
 displayedColumns = ['id','name','email','role','experiance'];
empId: number;
count: number=0;
errorMessage = false;
clicked = false;

  constructor(private empService: EmpServiceService , 
              private router: Router,
              private dailog: MatDialog) { }

  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe((data)=>{

      this.allEmployeeData = data;
       console.log(this.allEmployeeData);
       })
       console.log(this.empId)
       
  }
  default()
  {
    this.router.navigate(['default']);
  }
  visible()
  {
    this.clicked = !this.clicked;
  }
  checkEmpID(empId)
  {
    for(var i=0 ; i < this.allEmployeeData.length ; i++)
    {
      if(empId === this.allEmployeeData[i].id)
      {
         this.empService.deleteEmployee(empId).subscribe((response)=>{
           console.log(response);
         })
          this.count=1;
          break;
      }
    }
    if(this.count!= 1)
    {
      this.errorMessage = true;
    }
    else
    {
      this.errorMessage = false;
      window.location.reload();
    }
  }
  openEmployPopup(empData)
  {
    this.dailog.open(RegisterComponent,{
      data: empData
    });
  }
  
}
