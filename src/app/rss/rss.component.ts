/*
 * Angular 2 decorators and services
 */
import { Component, OnInit, Input } from '@angular/core';
import { Rss } from './rss.model';
import { RssService } from './rss.service';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'rss',
  styleUrls: [
    './rss.style.css'
  ],
  templateUrl: './rss.template.html',
  //providers:['RssService']
})
export class RssComponent {
  @Input()  rssUrl = 'http://www.lemonde.fr/m-actu/rss_full.xml';
  title = 'Rss component';
  tRss: Rss[];

  error: any;

  constructor() { this.getRss(); }
  getRss() {
  this.tRss = [
    {
      linked: 'http://www.lemonde.fr/m-moyen-format/article/2016/07/19/roland-emmerich-de-godzilla-a-independance-day-resurgence-le-maitre-du-desastre_4971676_4497271.html',
      title: 'Roland Emmerich, de « Godzilla » à « Independence Day : Resurgence », le maître du désastre',
      description: 'Le réalisateur allemand exilé à Hollywood sort le 20 juillet la suite de son blockbuster à base d’envahisseurs extraterrestres, vingt ans après le premier opus.',
      pubDate: new Date('Tue, 19 Jul 2016 10:13:38 +0200')
    }
  ];
    //this.rssService
        //.getRss(this.rssUrl);
        //.then(rsss => this.tRss = rsss)
        //.catch(error => this.error = error);
  }

  ngOnInit() {
    console.log('Component started : ' + this.title);
  }
}
