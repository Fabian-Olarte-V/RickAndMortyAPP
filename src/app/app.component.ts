import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RickAndMortyApiService } from './services/rick-and-morty-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'rickAndMorty';
}
