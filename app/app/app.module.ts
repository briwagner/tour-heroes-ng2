import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent }  from '../heroes/heroes.component';
import { HeroDetailComponent }  from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero/hero.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GetFavePipe } from '../shared/get-fave.pipe';
import { SortIdPipe } from '../shared/sort-id.pipe';

import { routing } from '../app.routing';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    routing 
    ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroesComponent, 
    HeroDetailComponent,
    GetFavePipe,
    SortIdPipe
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
