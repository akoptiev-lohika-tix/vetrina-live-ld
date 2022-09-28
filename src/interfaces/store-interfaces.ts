import { StoreData } from './store-data-interface';

export interface StoreFromServer {
  name: string;
  displayName: string;
  data?: StoreData;
}

export interface Store extends StoreFromServer {
  id: number;
}
