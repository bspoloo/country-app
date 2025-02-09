import { ISearchByData } from '../../interfaces/ISearchByData';
import { SearchByAlphaCode } from '../SearchByAlphaCode';
import { SearchByCapital } from '../SearchByCapital';
import { SearchByCountry } from '../SearchByCountry';
import { SearchByRegion } from '../SearchByRegion';
import { SearchDefault } from '../SearchDefault';

export class FactorySearch {
  public getSearchBy(param: string): ISearchByData {
    switch (param.toLowerCase()) {
      case 'capital':
        return new SearchByCapital();
      case 'country':
        return new SearchByCountry();
      case 'region':
        return new SearchByRegion();
      case 'alpha':
        return new SearchByAlphaCode();
      default:
        return new SearchDefault();
    }
  }
}
