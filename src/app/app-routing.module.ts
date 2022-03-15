import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketStatusComponent } from './ticket-status/ticket-status.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { EmployeeListComponent } from './shared/employee-list/employee-list.component';


const routes: Routes = [
  {
    path: '' ,
    redirectTo:'login',
    pathMatch:'full'

  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'default' , component:DefaultComponent , children: [
      {
        path:'' , component:DashboardComponent
      }
    ]
  },
  {
    path:'ticketStatus' , component:TicketStatusComponent
  },
  {
    path: 'register' , component: RegisterComponent
  },
  {
    path: 'employeeList' , component:EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
