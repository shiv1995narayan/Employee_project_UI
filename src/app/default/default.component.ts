import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  opened = false;
  constructor(private router: Router) { }

  ngOnInit(): void {}

  Triggered($event: any)
  {
    this.opened = !this.opened;
  }
  ticketChange()
  {
    this.router.navigate(['ticketStatus']);
  }


}
