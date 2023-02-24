import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PokemonRetrieveService } from './pokemon-retrieve.service';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  foo: boolean = false;
  id!: number;
  pokemon$!: Observable<any>;
  constructor(private _prs: PokemonRetrieveService,
    private _ar: ActivatedRoute) { }
  ngOnInit() {
    setInterval(() => this.foo = !this.foo, 2000)
    // Get the pokemon for "id"
    this.id = this._ar.snapshot.params['id'];
    console.log("The id is ", this.id)
    this.pokemon$ = this._prs.getPokemon(this.id);
  }

}
