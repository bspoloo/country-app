import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  @Input()
  public placeHolder: string;
  @Input()
  public initialValue : String;

  private debouncerSubscription? : Subscription;
  private debouncer : Subject<string> = new Subject<string>();

  @Output()
  onValue : EventEmitter<string> = new EventEmitter();

  constructor(){
    this.placeHolder = '';
    this.initialValue = '';
  }

  public ngOnInit(): void {
    console.log('the initial value: ', this.initialValue);

    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(value => {
      this.onValue.emit(value)
    });
  }
  public ngOnDestroy(): void {
    console.log('SearchBox destroyed');
    this.debouncerSubscription?.unsubscribe();
  }
  public onKeyPress(searchTerm : string): void{
    this.debouncer.next(searchTerm);
  }

  // public emitValue(value : string) : void{
  //   this.onValue.emit(value);
  // }
}
