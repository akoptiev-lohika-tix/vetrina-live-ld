import { Page, PageFromServer, Store, StoreFromServer, SubPage } from '../interfaces';

export const serverPagesMapper = (data: PageFromServer[]): Page[] => {
  return data.map((item, i): Page => {
    if (item.subPages) {
      const mappedSubPages = item.subPages.map((subPage, k): SubPage => {
        return {
          ...subPage,
          id: k + i + data.length
        };
      });

      return {
        ...item,
        subPages: mappedSubPages,
        id: i
      };
    } else {
      return {
        ...item,
        id: i
      };
    }
  });
};

export const serverStoresMapper = (data: StoreFromServer[]): Store[] => {
  return data.map((item, i): Store => {
    return {
      ...item,
      id: i
    };
  });
};
