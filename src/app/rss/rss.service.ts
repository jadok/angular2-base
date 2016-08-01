import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Rss } from './rss.model.ts';


@Injectable()
export class RssService {
  constructor(private http: Http) { }

  getRss(urlRss: string): any {
    console.log('getRss');
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

} 