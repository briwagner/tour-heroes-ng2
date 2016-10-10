import { Component } from '@angular/core';
import { HeroService } from '../hero/hero.service';

@Component({
    moduleId: module.id,
    selector: 'app-main',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [HeroService]  
})

export class AppComponent {
    title = "Tour of Heroes";
}