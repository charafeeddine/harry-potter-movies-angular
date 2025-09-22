import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormatDuration } from '../utils/format-duration';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  // Movies fetched
  movie: Movie | null = null;
  formatDuration = FormatDuration;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // get Movie
    const id = this.route.snapshot.paramMap.get('id')?.toString() ?? '';
    this.moviesService.getMovie(id).subscribe((data) => (this.movie = data));
  }
}
