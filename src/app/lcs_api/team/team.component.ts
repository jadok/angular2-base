import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from './team.model.ts';

import { TeamService } from './team.service.ts';

@Component({
  selector: 'team',
  styleUrls: [ './team.style.scss' ],
  templateUrl: './team.template.html',
})
export class TeamComponent {
  lTeam: Team[];
  error: any;

  constructor(
    private router: Router,
    private team_service: TeamService) {
      team_service.team.subscribe(
        team => this.lTeam = team,
        error => console.error('Error: ' + error),
        () => console.log('Completed!')
      );
    }

  getTeams() {
    this.team_service
        .getTeams()
        .then(teams => this.lTeam = teams)
        .catch(error => this.error = error);
  }

  ngOnInit() {
    //this.getTeams();
  }

}