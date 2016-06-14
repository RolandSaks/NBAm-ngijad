import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { korvpallur } from './kossuvennad';
import { KorvpalluriinfoComponent } from './korvpalluriinfo.component';
import { KorvpallurService } from './korvpallur.service';

@Component({
  selector: 'minu-mangija',
  templateUrl: 'app/koss.component.html',
  styleUrls:  ['app/koss.component.css'],
  directives: [KorvpalluriinfoComponent],
})
export class MangijaComponent implements OnInit {
  korvpallurid: korvpallur[];
valitudkorvpallur: korvpallur;

  constructor(
    private router: Router,
    private kossuvennadService: KorvpallurService) { }

  getKorvpallurid() {
    this.kossuvennadService.getKorvpallurid().then(korvpallurid => this.korvpallurid = korvpallurid);
  }

  ngOnInit() {
    this.getKorvpallurid();
  }

onSelect(kossuvennad: korvpallur) {
    this.valitudkorvpallur = kossuvennad; }

    gotoDetail() {
      this.router.navigate(['KorvpalluriInfo', { id: this.valitudkorvpallur.id }]);
    }
  }
