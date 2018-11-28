import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  moviesUrl: string = 'http://54.152.85.116:8080/get_movies';

  constructor( private http: HttpClient) { }

  getAllMovies(){
    this.http.get( this.moviesUrl )
        .subscribe( data => {
          console.log(data);
        });
  }
}
