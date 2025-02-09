import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countryInterface';

@Component({
  selector: 'countries-by-capital-page',
  standalone: false,
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public contries : Country[] = [];

  constructor(private countriesService: CountriesService){

  }

  public searchByCapital(term : string): void{
    this.countriesService.search(term, 'capital')
    .subscribe(countries =>{
      this.contries = countries;
    });
    console.log('Capital Page the term emited is:', {term});
  }
}
