import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Team } from './team.model.ts';

@Injectable()
export class TeamService {
  private teamsUrl: 'http://localhost:8000/team/';
  private _http: Http;
  team: any;
  constructor(private http: Http) {
    this._http = http;
  }

  getTeams(): any {
    this.team = this._http.get(this.teamsUrl)
      .map(response => this.extractData(response));
  }
  
  get() {}
  put() {}
  post() {}
  //delete() {}

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}