import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes!: Hero[];
  showDetail: boolean = false;
  heroSelected!: Hero;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.heroes = Heroes
  }

  onSelect(hero: Hero) {
    this.router.navigate(['/details', hero.id])
  }

  showDetailFunction(heroSelected: Hero) {
    this.showDetail = true;
    this.heroSelected = heroSelected;
  }
}
