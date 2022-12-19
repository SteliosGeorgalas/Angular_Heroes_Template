import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes!: Hero[];
  showDetail: boolean = false;
  heroSelected!: Hero;

  constructor(private router: Router, private HeroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.HeroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.router.navigate(['/details', hero.id])
    this.messageService.add(`HeroesComponent:
Selected hero id=${hero.id}`);
  }

  showDetailFunction(heroSelected: Hero) {
    this.showDetail = true;
    this.heroSelected = heroSelected;
  }
}
