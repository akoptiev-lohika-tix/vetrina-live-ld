import { SubPage } from './sub-page-interfaces';

export interface PageFromServer {
  name: string;
  displayName: string;
  path: string;
  iconName: string;
  subPages?: SubPage[];
  hasBadge: boolean;
}

export interface Page extends PageFromServer {
  id: number;
}
