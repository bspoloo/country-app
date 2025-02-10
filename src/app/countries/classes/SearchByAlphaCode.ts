import { HttpClient } from "@angular/common/http";
import { catchError, delay, Observable, of } from "rxjs";
import { Country } from "../interfaces/countryInterface";
import { ISearchByData } from "../interfaces/ISearchByData";
import { API_URI } from "../constants/API";

export class SearchByAlphaCode implements ISearchByData{
  searchData(http: HttpClient, term: string): Observable<Country[]> {
    return http.get<Country[]>(`${API_URI}/alpha/${term}`)
            .pipe(
              catchError(error => {
                delay(2000);
                console.log(error);
                return of([]);
              } )
            );
  }

}