import { Component, OnInit ,Input} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { UserService } from '../user.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  constructor(private userService: UserService,
  private route: ActivatedRoute,
  private location: Location) { }


  @Input() hero: Hero;


  goBack(): void {
  this.location.back();
}

  ngOnInit() {

     this.route.paramMap
    .switchMap((params: ParamMap) => this.userService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
  }

}
