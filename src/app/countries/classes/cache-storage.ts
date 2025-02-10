import { ByData, ByRegion } from "../interfaces/cache-storage.interface";
import { Country } from "../interfaces/countryInterface";

export class CacheStorage{
  public byCapital : ByData;
  public byCountry: ByData;
  public byRegion : ByRegion;

  constructor(){
    this.byCapital = {term : '', countries : []};
    this.byCountry = {term : '', countries : []};
    this.byRegion =  { countries : []};
  }
}
