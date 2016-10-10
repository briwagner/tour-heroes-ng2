import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
// import { Input } from '@angular/core';

import { Hero } from '../hero/hero';
import { HeroService } from '../hero/hero.service';

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css'],
    inputs: ['hero']
})

export class HeroDetailComponent implements OnInit {
    // @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.heroService.update(this.hero)
                        .then( () => this.goBack() );
    }
    addFave() {
        this.hero.faves += 1;
        this.heroService.update(this.hero)
                        .then( () => this.goBack());
    }
}

// two ways to use imports
// 1. import Input module from ng core; 
// declare @Input decorator above variables.
// 2. OR just add the inputs: array inside the @component 
// and declare the variables as needed, with 'quotes'