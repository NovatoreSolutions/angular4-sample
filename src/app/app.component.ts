import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Hero } from './hero';
import { HEROES } from './user-mock';

// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
   title = 'Tour of Heroes';
//   hero: Hero = {
//   id: 1,
//   name: 'Windstorm'
// };

// heroes: Hero[];
// // heroes = HEROES;
// selectedHero: Hero;


// onSelect(hero: Hero): void {
//   this.selectedHero = hero;
// }

// getHeroes(): void {
//   console.log("called")
//   this.heroes = this.userService.getHeroes();
//   console.log(this.heroes)
// }

// getHeroes(): void {
//   this.userService.getHeroes().then(heroes => this.heroes = heroes);
// }

// constructor(private userService: UserService){}
// ngOnInit(): void {
//   this.getHeroes();
// }
    

}


