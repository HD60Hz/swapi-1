import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

import { CharacterResolve } from './character.resolve';

const routes: Routes = [
  { path:'characters', component: CharacterListComponent },
  {
    path: 'character/:url',
    component: CharacterDetailComponent,
    resolve: {
      character: CharacterResolve
    }
  }
];
//{ path:'character/:char', component: CharacterDetailComponent }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CharactersRoutingModule { }
