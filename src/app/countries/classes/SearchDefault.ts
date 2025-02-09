import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Country } from "../interfaces/countryInterface";
import { ISearchByData } from "../interfaces/ISearchByData";

export class SearchDefault implements ISearchByData{
  searchData(http: HttpClient, term: string): Observable<Country[]> {
    throw new Error("Method not implemented.");
  }
}