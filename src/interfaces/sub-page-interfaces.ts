export interface SubPageFromServer {
  displayName: string;
  path: string;
}

export interface SubPage extends SubPageFromServer {
  id: number;
}
