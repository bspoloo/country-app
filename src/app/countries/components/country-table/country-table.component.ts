import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countryInterface';

@Component({
  selector: 'countries-country-table',
  standalone: false,
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {
  @Input()
  public countries : Country[] = [];
}
