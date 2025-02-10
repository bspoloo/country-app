import { Region } from "../pages/by-region-page/by-region-page.component";
import { Country } from "./countryInterface";

export interface ByData{
  term: string;
  countries: Country[];
}
export interface ByRegion{
  term?: Region;
  countries: Country[];
}
