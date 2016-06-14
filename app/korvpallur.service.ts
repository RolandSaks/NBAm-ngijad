import { Injectable } from 'angular2/core';

import { korvpallur } from './kossuvennad';
import { KORVPALLURITELIST } from './listkorvpallurid';

@Injectable()
export class KorvpallurService {
  getKorvpallurid() {
    return Promise.resolve(KORVPALLURITELIST);
  }

  getHeroesSlowly() {
    return new Promise<korvpallur[]>(resolve =>
      setTimeout(()=>resolve(KORVPALLURITELIST), 2000) // 2 seconds
    );
  }

  getKorvpallur(id: number) {
    return Promise.resolve(KORVPALLURITELIST).then(
      korvpallurid => korvpallurid.filter(kossuvennad => kossuvennad.id === id)[0]
    );
  }
}
