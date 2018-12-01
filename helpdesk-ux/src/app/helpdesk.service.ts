import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HelpdeskService {
  _hdaUrl = 'http://hda.api.dev.lsnj.org/api/v1/';

  constructor(private _http: HttpClient) {}

  getOpenTickets() {
    return this._http
      .get(this._hdaUrl + 'tickets');
  }

  getTicket(id) {
    return this._http
      .get(this._hdaUrl + 'tickets/' + id);
  }
}
