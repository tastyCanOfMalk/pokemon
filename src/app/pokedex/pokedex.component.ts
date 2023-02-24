import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PokemonRetrieveService } from './pokemon-retrieve.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  pokemonSearchFilter: string = ""
  pokemons: any[] = [];
  pokemonsToShow: any[] = [];

  constructor(private _title: Title, private _prs: PokemonRetrieveService) { }

  ngOnInit() {
    this._title.setTitle("Pokedex")
    this._prs.getPokemonsList()
      .subscribe({
        next: res => { this.pokemons = res.results; this.pokemonsToShow = res.results },
        error: err => console.error("Problem fetching Pokemon: ", err)
      })
  }

}
