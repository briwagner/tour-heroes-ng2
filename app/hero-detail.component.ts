import { Component } from '@angular/core';
// import { Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/hero-detail.component.html',
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