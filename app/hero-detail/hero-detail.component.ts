import { Component } from '@angular/core';
// import { Input } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css'],
    inputs: ['hero']
})

export class HeroDetailComponent {
    // @Input()
    hero: Hero;
}

// two ways to use imports
// 1. import Input module from ng core; 
// declare @Input decorator above variables.
// 2. OR just add the inputs: array inside the @component 
// and declare the variables as needed, with 'quotes'