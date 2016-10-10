import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

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
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
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
