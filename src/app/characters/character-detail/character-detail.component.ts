import { Component, Inject, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Character } from '../character';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'sw-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})

export class CharacterDetailComponent implements OnInit {

  character: Character;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _sanitizer: DomSanitizer
  ) {}

  getSafeUrl(film){
    return this._sanitizer.bypassSecurityTrustResourceUrl(film);
  }

  ngOnInit() {
    this.character = this.route.snapshot.data['character'];
  }

  gotoCharacters() {
    this.router.navigate(['/characters']);
  }
}
