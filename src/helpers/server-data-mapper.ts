import { Page, PageFromServer, SubPage } from '../interfaces';

export const serverDataMapper = (data: PageFromServer[]): Page[] => {
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
