import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CharacterService } from '../character.service';
import { Character } from '../character';

@Component({
  selector: 'sw-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})

//<sw-character-detail [character]="selectedCharacter"></sw-character-detail>

export class CharacterDetailComponent implements OnInit {

  @Input() character:Character;
  characters: Character[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CharacterService
  ) {}

  ngOnInit() {
    /*this.characters = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getCharacter(params.get('name'))
      )
    );*/
    console.log("Get Films for ", this.character);
    console.log("Get Films for ", this.characters);
  }

  gotoCharacters() {
    this.router.navigate(['/characters']);
  }
}
