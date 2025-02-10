import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countryInterface';
import { CountriesService } from '../../services/countries.service';
import { tap } from 'rxjs';

@Component({
  selector: 'countries-by-country-page',
  standalone: false,
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css',
})
export class ByCountryPageComponent implements OnInit {
  public contries: Country[] = [];
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.contries = this.countriesService.cacheStorage.byCountry.countries;
    this.initialValue = this.countriesService.cacheStorage.byCountry.term;
  }

  public searchByCountry(term: string): void {
    this.countriesService
      .search(term, 'country')
      .pipe(
        tap(
          (countries) =>
            (this.countriesService.cacheStorage.byCountry = { term, countries })
        )
      )
      .subscribe((countries) => {
        this.contries = countries;
      });
    console.log('Country Page the term emited is:', { term });
  }
}
