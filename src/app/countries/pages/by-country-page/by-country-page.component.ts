import { Component } from '@angular/core';
import { Country } from '../../interfaces/countryInterface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent {
  public contries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  public searchByCountry(term: string): void {
    this.countriesService.search(term, 'country').subscribe((countries) => {
      this.contries = countries;
    });
    console.log('Country Page the term emited is:', { term });
  }
}
