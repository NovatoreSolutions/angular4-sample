import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../user-mock';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

getHeroes(): void {
  this.userService.getHeroes().then(heroes => this.heroes = heroes);
}

constructor(private userService: UserService, private router: Router){}
ngOnInit(): void {
  this.getHeroes();
}
       title = 'Tour of Heroes';
  hero: Hero = {
  id: 1,
  name: 'Windstorm',
  power:'Super Flexible'
};

heroes: Hero[];
// heroes = HEROES;
selectedHero: Hero;



onSelect(hero: Hero): void {
  this.selectedHero = hero;
}


 gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  addHero(hero: Hero):void{

    this.heroes.push(hero)

  }

}
