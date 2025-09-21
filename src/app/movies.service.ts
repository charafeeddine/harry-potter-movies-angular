import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  /**
   * Get All movies
   * @returns Movies
   */
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('/movies');
  }
}