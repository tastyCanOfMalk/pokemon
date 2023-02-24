import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonRetrieveService {
  baseUrl: string = `https://pokeapi.co/api/v2`;

  constructor(private _http: HttpClient) { }

  getPokemonsList() {
    const url = `${this.baseUrl}/pokemon?limit=1100`;
    return this._http.get<any>(url)
  }

  getPokemon(id: number) {
    const url = `${this.baseUrl}/pokemon/${id}`
    return this._http.get<any>(url)
  }
}
