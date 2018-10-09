import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';

@Injectable({
  providedIn: 'root',
})

export class CharacterService {

  constructor(){}

  getCharacters(): Observable<Character[]> {
    console.log("Characters", CHARACTERS);
    return of(CHARACTERS);
  }
}
