import { Observable } from "rxjs";
import { Country } from "./countryInterface";
import { HttpClient } from "@angular/common/http";

export interface ISearchByData{
  searchData(http : HttpClient, term : string): Observable<Country[]>;
}
