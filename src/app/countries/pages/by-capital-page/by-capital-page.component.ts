import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countryInterface';
import { delay, tap } from 'rxjs';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit{

  public contries : Country[] = [];
  public isLoading : boolean = false;
  public initialValue : string = '';

  constructor(private countriesService: CountriesService){

  }
  ngOnInit(): void {
    this.contries = this.countriesService.cacheStorage.byCapital.countries;
    this.initialValue = this.countriesService.cacheStorage.byCapital.term;
  }

  public searchByCapital(term : string): void{
    this.isLoading= true;
    this.countriesService.search(term, 'capital')
    .pipe(
      tap(countries => this.countriesService.cacheStorage.byCapital = {term, countries})
    )
    .subscribe(countries =>{
      delay(2000)
      this.contries = countries;
      this.isLoading = false;
    });
    console.log('Capital Page the term emited is:', {term});
  }
}
