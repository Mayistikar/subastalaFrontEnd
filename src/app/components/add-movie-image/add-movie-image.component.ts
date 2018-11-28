import { Component, OnInit } from '@angular/core';
import { MoviesService  } from "../../services/movies.service";

@Component({
  selector: 'app-add-movie-image',
  templateUrl: './add-movie-image.component.html',
  styleUrls: ['./add-movie-image.component.css']
})

export class AddMovieImageComponent {

  constructor( private movies: MoviesService ) { 
    this.movies.getAllMovies();
  }
}
