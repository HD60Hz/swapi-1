import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';

import { FilmsRoutingModule } from './films-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FilmsRoutingModule
  ],
  declarations: [
    FilmListComponent,
    FilmDetailComponent
  ]
})
export class FilmsModule { }
