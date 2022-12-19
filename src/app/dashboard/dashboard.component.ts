import { Component,OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  heroes!: Hero[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.heroes = Heroes.slice(0, 4)
  }

  onSelect(hero: Hero) {
    this.router.navigate(['/details', hero.id])
  }

}
