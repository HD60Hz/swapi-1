import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'sw-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})

export class CharacterListComponent implements OnInit {

  public characters$: Observable<Character[]>;
  public useWeb:Boolean = false;
  public loading = false;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getCharacters('local');
  }

  getCharacters(loc:string): void {
    switch(loc){
      case "local":
      this.useWeb = false;
      break;

      case "web":
      this.useWeb = true;
      break;
    }
    this.characters$ = this.characterService.getCharacters(this.useWeb);
  }

  showCharacter(c:Character):void{
    this.loading = true;
    this.router.navigate(['/character', c.url]).catch(e => {
      let msg = e.status === 404 ? "Page Not Found" : "Unknown Error";
      this.snackBar.open(msg, 'OK', {
        duration: 3000
      });
      this.loading = false;
    });
  }
}
