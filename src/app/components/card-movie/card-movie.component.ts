import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  @Input('movie') movie: any;

  constructor(){}


  ngOnInit():void{
    console.log(this.movie)
  }

  getImagen(){
    if(this.movie.Poster === 'N/A' 
    ){
      return 'https://via.placeholder.com/600' 
    }
    else{
     return this.movie.Poster
    }
  }

}
