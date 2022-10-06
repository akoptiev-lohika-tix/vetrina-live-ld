import { StoreData } from './store-data-interface';

export interface StoreFromServer {
  name: string;
  displayName: string;
  data: StoreData;
  path: string;
}

export interface Store extends StoreFromServer {
  id: number;
}
