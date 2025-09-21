import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  titleFilters: FormControl = new FormControl<string>('');
  releaseYearFilters: FormControl = new FormControl<string>('');
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(data => this.movies= data);
  }

  moviesFiltered(): Movie[] {
    const title = this.titleFilters.value.trim().toLowerCase();
    const releaseYear  = this.releaseYearFilters.value.trim();
    return this.movies.filter(m => {
      return m.title.toLowerCase().includes(title) && m.release_date.includes(releaseYear);
    });
  }

  showDetails(idMovie: number): void {
    console.log('your movies est :', idMovie);
  }

  reformatDuration(minutes: number): string {
    return `${Math.floor(minutes/60)}h ${minutes%60}min`
  }
}