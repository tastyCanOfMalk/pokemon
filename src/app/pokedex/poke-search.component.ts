import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.css']
})
export class PokeSearchComponent {
  @Input("input") searchBoxInitialValue!: string;
  @Output("inputChange") eventEmitter = new EventEmitter()
  fg!: FormGroup;
  ngOnInit() {
    this.fg = new FormGroup({
      searchBoxInput: new FormControl(this.searchBoxInitialValue, Validators.pattern("^[A-Za-z]+$"))
    })
  }

  setInput() {
    this.eventEmitter.emit(this.fg.value.searchBoxInput)
  }
}
