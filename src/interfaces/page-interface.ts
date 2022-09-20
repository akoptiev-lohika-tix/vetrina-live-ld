import { SubPage } from './sub-page-interface';

export interface Page {
  displayName: string;
  path: string;
  iconName: string;
  subPages: SubPage[];
  hasBadge: boolean;
}


