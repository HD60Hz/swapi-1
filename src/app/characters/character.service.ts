import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { forkJoin } from "rxjs/observable/forkJoin";
import { _ } from 'underscore';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {

  private TMDB_path = 'https://api.themoviedb.org/3/search/movie?api_key=d2149f1fc326d34e85428a4c3d701aad&query=';

  constructor(
    private http: HttpClient
  ) {}

  private handleError(error: HttpErrorResponse) {

    let msg = "An error occured";
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      let msg = 'An error occurred:' + error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      if(error.status === 404){
        let msg = 'Page not found';
      }else{
        let msg = 'Server Error (${error.status}). Try again later';
      }
    }
    return Observable.of([false]);
  }

  getCharacters(useWeb:Boolean): Observable<any> {
    if(!useWeb){
      return Observable.of(CHARACTERS);
    }else{
      return this.http.get('https://swapi.co/api/people/').pipe(
        map((res: any) => res.results),
        catchError(this.handleError)
      );
    }
  }

  getCharacter(character_url:string): Observable<any>{
    return this.http.get(character_url)
    .map((res: any) => res)
    .flatMap((character: any) => {
     return Observable.forkJoin(
        Observable.of(character),
        this.http.get(character.homeworld).map((res: any) => {
          character.homeworld = res.name;
          return character.homeworld;
        }),
        Observable.forkJoin(
          character.films.map((film: any) => {
            return this.http.get(film)
              .map((res: any) => {
                let theFilm: any = {};
                theFilm.title = res.title;
                theFilm.release_date = res.release_date;
                theFilm.opening_crawl = res.opening_crawl;
                return theFilm;
              }).flatMap((film: any) => {
                return this.http.get(this.TMDB_path+film.title)
                  .map((res: any) => {
                    let imageFromTMDB = res.results[0].poster_path;
                    film.poster = 'https://image.tmdb.org/t/p/original/'+ imageFromTMDB;
                    film.TMDB_ID = res.results[0].id;
                    return film;
                  })
                  .flatMap((film: any) => {
                    let filmID = film.TMDB_ID.toString();
                    return this.http.get('https://api.themoviedb.org/3/movie/'+filmID+'/videos?api_key=d2149f1fc326d34e85428a4c3d701aad&language=en-US')
                      .map((res: any) => {
                        if(res.results.length>0){
                          let videoFromTMDB = res.results[0].key;
                          film.video = 'https://www.youtube.com/embed/'+ videoFromTMDB;
                        }
                        return film;
                      });
                    })

                  ;
                })
            })
        )
      )
      .map((data: any[]) => {
        let character = data[0];
        let homeworld = data[1];
        let films = data[2];
        character.homeworld = homeworld;
        character.films =  _.sortBy( films, 'release_date');
        return character;
      });
    })

  }
}
