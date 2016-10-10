import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';
import { GetFavePipe } from '../shared/get-fave.pipe';

@Component({
    moduleId: module.id,
    // setting moduleId allows up to load template without app/...
    // relative path loading for html template
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  gotoDetail(hero: Hero): void { 
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}