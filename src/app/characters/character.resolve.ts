import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CharacterService } from './character.service';
import { Character } from './character';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CharacterResolve implements Resolve<Character> {

  constructor(private characterService: CharacterService) {}

  resolve(route: ActivatedRouteSnapshot):Observable<Character> {
    return this.characterService.getCharacter(route.params['url']);
  }
}
