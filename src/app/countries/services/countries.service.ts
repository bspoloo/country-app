
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/countryInterface';
import { API_URI } from '../constants/API';
import { HttpClient } from '@angular/common/http';
import { ISearchByData } from '../interfaces/ISearchByData';
import { FactorySearch } from '../classes/factories/factory-search';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private factorySearcher : FactorySearch;

  constructor(private http : HttpClient) {
    this.factorySearcher = new FactorySearch();
  }

  public search(term : string, param : string): Observable<Country[]>{
    const searcher : ISearchByData = this.factorySearcher.getSearchBy(param)
    return searcher.searchData(this.http, term);
  }
  public searchCountryByAlphaCode(code : string) : Observable<Country | null>{
    return this.http.get<Country[]>(`${API_URI}/alpha?codes=${code}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0]: null),
        catchError(() => of(null))
      );
  }
}
