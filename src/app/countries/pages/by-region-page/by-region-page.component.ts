import { Component } from '@angular/core';
import { Country } from '../../interfaces/countryInterface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
public contries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  public searchByRegion(term: string): void {
    this.countriesService.search(term, 'region').subscribe((countries) => {
      this.contries = countries;
    });
    console.log('Region Page the term emited is:', { term });
  }
}
