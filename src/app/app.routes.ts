import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { AddMovieImageComponent } from './components/add-movie-image/add-movie-image.component';

const APP_ROUTES: Routes = [
	{ path: 'inicio', component: MenuComponent },
	{ path: 'movie', component: AddMovieComponent },
	{ path: 'addImage', component: AddMovieImageComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });