import { HelpdeskService } from './../helpdesk.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  tickets: [];

  constructor(private _hdaService: HelpdeskService) {}

  ngOnInit() {
    this.getTickets();
  }

  getTickets() {
    this._hdaService
      .getOpenTickets()
      .subscribe(resEventsData => (this.tickets = resEventsData));
  }
}
