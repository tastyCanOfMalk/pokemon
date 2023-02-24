import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { pokemonRouting } from './pokemon.router';
import { PokedexComponent } from './pokedex.component';
import { PokeSearchComponent } from './poke-search.component';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonSpritesComponent } from './pokemon-sprites.component';



@NgModule({
  declarations: [
    PokedexComponent,
    PokeSearchComponent,
    FilterByNamePipe,
    PokemonDetailsComponent,
    PokemonSpritesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    pokemonRouting,
  ]
})
export class PokemonModule { }
