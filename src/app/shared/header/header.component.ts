import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() TriggeredForme: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {}

  clicked()
  {
    this.TriggeredForme.emit();
  }

  login()
  {
    this.router.navigate(['login']);
  }
  register()
  {
    this.router.navigate(['register']);
  }
  EmployeeData()
  {
    this.router.navigate(['employeeList']);
  }

}
