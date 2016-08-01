import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Region } from './region.model.ts';

@Injectable()
export class RegionService {
  private regionsUrl: 'http://localhost:8000/region/';
  region: any;
  constructor(private http: Http) {
    this.region = http.get("http://localhost:8000/region/")
      .map(response => this.extractData(response));
   }

  getRegions(): any {
 /*   return this.http.get("http://localhost:8000/region/")
      .map(res => res.text())
      .subscribe(
        data => console.log(data),
        err => this.logError(err),
        () => console.log('Random Quote Complete')
      );*/
  }
  get() {}
  put() {}
  post() {}
  //delete() {}

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
  }

  
  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}