import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    moduleId: module.id,
    selector: 'heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css'],
    providers: [HeroService]
})


export class HeroesComponent implements OnInit {
    title = "Here is the Title, so Cool";
    heroes: Hero[];
    selectedHero: Hero;

  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

