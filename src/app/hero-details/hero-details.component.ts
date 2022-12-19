import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})

export class HeroDetailsComponent implements OnInit {

  hero!: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private HeroService: HeroService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.HeroService.getHero(params['id']).subscribe(hero => this.hero = hero);
    })
  }

  goBack(): void {
    this.location.back();
  }

}
