import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./movies-list/movies-list.component').then(m => m.MoviesListComponent) },
    { path: 'movies/:id', loadComponent: () => import('./movie-details/movie-details.component').then(m => m.MovieDetailsComponent) }
];