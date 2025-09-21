import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(data => this.movies= data);
  }

  showDetails(idMovie: number): void {
    console.log('your movies est :', idMovie);
  }

  reformatDuration(minutes: number): string {
    return `${Math.floor(minutes/60)}h ${minutes%60}min`
  }
}