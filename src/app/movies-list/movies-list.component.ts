import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { FormatDuration } from '../utils/format-duration';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent implements OnInit {
  // Movies fetched from the API
  movies: Movie[] = [];
  // Reactive form control used for filtering
  titleFilters: FormControl = new FormControl<string>('');
  releaseYearFilters: FormControl = new FormControl<string>('');
  formatDuration = FormatDuration;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((data) => (this.movies = data));
  }

  /**
   * Filters the movie list based on title and release year.
   * @returns list of movies filtred
   */
  moviesFiltered(): Movie[] {
    const title = this.titleFilters.value.trim().toLowerCase();
    const releaseYear = this.releaseYearFilters.value.trim();
    return this.movies.filter((m) => {
      return (
        m.title.toLowerCase().includes(title) &&
        m.release_date.includes(releaseYear)
      );
    });
  }
}