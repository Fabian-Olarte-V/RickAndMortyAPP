import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterViewComponent } from './character-view/character-view.component';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {path: '', redirectTo:'characters', pathMatch: 'full'},
  {path: 'characters', component: CharactersComponent},
  {path: 'characters/:id', component: CharacterViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
