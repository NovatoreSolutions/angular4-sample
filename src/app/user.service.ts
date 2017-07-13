import { Injectable } from '@angular/core';
import { HEROES } from './user-mock';
import { Hero } from './hero';

@Injectable()
export class UserService {

  constructor() { }
  
  //  getHeroes(): void {}

  //    getHeroes(): Hero[] {
  //   return HEROES;
  // }


  getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
}

getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}


}
