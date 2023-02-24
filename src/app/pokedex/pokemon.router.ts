import { RouterModule, Routes } from "@angular/router";

import { PokedexComponent } from "./pokedex.component";
import { PokemonDetailsComponent } from "./pokemon-details.component";

const routes = [
  { path: '', component: PokedexComponent },
  { path: ':id', component: PokemonDetailsComponent },
];

export const pokemonRouting = RouterModule.forChild(routes);
