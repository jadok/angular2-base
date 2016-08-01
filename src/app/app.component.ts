import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ApiService } from './shared';
import { RegionService } from './lcs_api/region/region.service.ts';

import { RegionComponent } from './lcs_api/region/region.component.ts';
import { RssComponent } from './rss/rss.component.ts';


import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ ApiService, RegionService ],
  directives: [...ROUTER_DIRECTIVES, RegionComponent, RssComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
  }
}
