import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { korvpallur } from './kossuvennad';
import { KorvpallurService } from './korvpallur.service';


@Component({
  selector: 'korvpalluri-info',
  templateUrl: 'app/korvpalluriinfo.component.html',
  styleUrls: ['app/korvpalluriinfo.component.css']
})


export class KorvpalluriinfoComponent implements OnInit {

  @Input() kossuvennad: korvpallur;

  constructor(
    private kossuvennadService: KorvpallurService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.kossuvennadService.getKorvpallur(id)
      .then(kossuvennad => this.kossuvennad = kossuvennad);
  }

  goBack() {
    window.history.back();
  }
}
