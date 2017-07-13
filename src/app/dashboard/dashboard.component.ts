import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { UserService } from '../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  heroes: Hero[] = [];
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
