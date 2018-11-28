import { Component } from '@angular/core';
import { NgForm  } from "@angular/forms";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'] 
})
export class AddMovieComponent {

  movie:Object = {
    code: null,
    name: null,
    desc: null,
    genere: null    
  }

  alert: Boolean = false;

  constructor() { }

  guardar( forma:NgForm ) {
    console.log("FOrmulario posteado!");
    console.log(forma);
    if ( this.movie['code'] == null || this.movie['name'] == null ) {
      this.alert = true;
    }
  }
}
