import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {


  @Output() hero: EventEmitter<Hero> = new EventEmitter<Hero>();
  

  
  constructor() { }

  ngOnInit() {
  }
 

 powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
 
  model = new Hero(21, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
 
  submitted = false;
 
  onSubmit() { this.submitted = true; 
    
    console.log("my data",this.model)
     this.hero.emit(this.model);
  }
 
  newHero() {
    this.model = new Hero(42, '', '');
  }
}
