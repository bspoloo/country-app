import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Input()
  public placeHolder: string;

  @Output()
  onValue : EventEmitter<string> = new EventEmitter();

  constructor(){
    this.placeHolder = '';
  }

  public emitValue(value : string) : void{
    this.onValue.emit(value);
  }
}
