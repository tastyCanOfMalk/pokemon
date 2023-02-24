import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-sprites',
  templateUrl: './pokemon-sprites.component.html',
  styleUrls: ['./pokemon-sprites.component.css']
})
export class PokemonSpritesComponent {
  @Input() sprites: Array<object> = [];

  ngOnInit() {
    // sprites are key/value pairs. Sometimes they're objects within objects within objects. Should prolly flatten those at some point. But for now, just ignore the sub-objects.
    for (let o in this.sprites) {
      if (typeof this.sprites[o] === 'object') {
        delete (this.sprites[o])
      }
    }
  }
}
