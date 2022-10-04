import { Notification } from './notification-interface';
export interface StoreData {
  visitors: number;
  ordersNew: number;
  ordersReceived: number;
  currency: string;
  earnings: number;
  shopConfigurationProgress: number;
  notifications: Notification[];
}
