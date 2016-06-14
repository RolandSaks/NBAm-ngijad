import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { korvpallur } from './kossuvennad';
import { KorvpallurService } from './korvpallur.service';

@Component({
  selector: 'minu-vaade',
  templateUrl: 'app/MangijateVaade.component.html',
  styleUrls: ['app/MangijateVaade.component.css']
})
export class MinuVaadeComponent implements OnInit {

  korvpallurid: korvpallur[] = [];

constructor(
  private router: Router,
  private kossuvennadService: KorvpallurService) {
  }

ngOnInit() {
  this.kossuvennadService.getKorvpallurid()
    .then(korvpallurid => this.korvpallurid = korvpallurid.slice(0,4));
}

gotoDetail(kossuvennad: korvpallur){
let link = ['KorvpalluriInfo', { id: kossuvennad.id }];
    this.router.navigate(link);
}

}
