import { Component } from '@angular/core';

import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
    pageTitle: string = 'Movie List';
    errorMessage: string;
    showImage: boolean = false;

    get movies(): IMovie[] {
        return this.movieService.movies;
    }

    constructor(private movieService: MovieService) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
