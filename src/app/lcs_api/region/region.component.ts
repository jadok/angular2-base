import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from './region.model.ts';

import { RegionService } from './region.service.ts';

@Component({
  selector: 'region',
  styleUrls: [ './region.style.scss' ],
  templateUrl: './region.template.html',
})
export class RegionComponent {
  lRegion: Region[];
  private _service: RegionService;
  error: any;

  constructor(
    private router: Router,
    private region_service: RegionService) {
      //this._service = region_service;
      region_service.region.subscribe(
        region =>this.lRegion = region,
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
    }

  getRegions() {
    this._service.getRegions();
    this._service.region.subscribe(
        region => this.lRegion = region,
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      )
  }

  ngOnInit() {
    //this.getRegions();
  }

}