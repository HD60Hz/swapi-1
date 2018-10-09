import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';


@Component({
  selector: 'sw-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];
  selectedCharacter: Character;

  constructor(
    private characterService: CharacterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCharacters();
  }

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }

  showCharacter(c:Character):void{
    console.log("show ", c);
    this.router.navigate(['/character'], { queryParams: { name: c.name } });
  }

  getCharacters(): void {
    this.characterService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }



}
