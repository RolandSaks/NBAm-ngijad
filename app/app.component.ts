import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { MinuVaadeComponent } from './MangijateVaade.component';
import { MangijaComponent } from './koss.component';
import { KorvpalluriinfoComponent } from './korvpalluriinfo.component';
import { KorvpallurService }     from './korvpallur.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{ pealkiri }}</h1>
  <nav>
    <a [routerLink]="['Mangijatevaade']">Parimad korvpallurid</a>
    <a [routerLink]="['Korvpallurid']">Kogu korvpallurite nimekiri</a>
  </nav>
  <router-outlet></router-outlet>
`,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    KorvpallurService
  ]
})
@RouteConfig([
  {
    path: '/mangijateVaade',
    name: 'Mangijatevaade',
    component: MinuVaadeComponent,
    useAsDefault: true
},
{
    path: '/detail/:id',
    name: 'KorvpalluriInfo',
    component: KorvpalluriinfoComponent
  },
  {
    path: '/koss',
    name: 'Korvpallurid',
    component: MangijaComponent
  }
])


export class AppComponent {
  pealkiri = 'NBA 2016 Warriorsi ja Clevelandi korvpallurid';
}
