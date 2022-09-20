import { BASE_DATA_URL } from '../constants/api-constants';

export const loadPagesData = async (): Promise<any> => {
  try {
    const response = await fetch(BASE_DATA_URL);

    return response;
  } catch (error) {
    return error;
  }
};
