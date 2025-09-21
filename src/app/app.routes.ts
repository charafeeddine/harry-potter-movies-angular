import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./movies-list/movies-list.component').then(m => m.MoviesListComponent) }
];