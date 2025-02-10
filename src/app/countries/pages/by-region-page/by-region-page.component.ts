import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countryInterface';
import { CountriesService } from '../../services/countries.service';
import { tap } from 'rxjs';

export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';
@Component({
  selector: 'countries-by-region-page',
  standalone: false,
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css',
})
export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  public initialValue : string = '';

  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStorage.byRegion.countries;
    this.initialValue = this.countriesService.cacheStorage.byRegion.term as Region;
  }

  public searchByRegion(term: Region): void {
    this.countriesService
      .search(term, 'region')
      .pipe(
        tap(
          (countries) =>
            (this.countriesService.cacheStorage.byRegion = { term,  countries })
        )
      )
      .subscribe((countries) => {
        this.countries = countries;
      });
    this.selectedRegion = term;
    this.initialValue = '';
  }
}
