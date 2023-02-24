import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent, ContactUsComponent, HomeComponent } from "./others.components";

@Component({
  template: `<h1>404 Not found</h1><p>Try one of these:</p><a href="/pokedex">Pokedex</a><br /><a href="/">Home</a>`
})
class FourOhFourComponent { }

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  // A lazy-loaded route. All of this is in a separate module that's not loaded until navigated to.
  { path: 'pokedex', loadChildren: () => import('./pokedex/pokemon.module').then(m => m.PokemonModule) },
  { path: '**', component: FourOhFourComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
