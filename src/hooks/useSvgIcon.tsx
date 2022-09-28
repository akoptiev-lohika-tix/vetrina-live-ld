import React from 'react';
import { SvgIcon } from '@mui/material';
import { ReactComponent as Catalogue } from '../assets/catalogue-icon.svg';
import { ReactComponent as Dashboard } from '../assets/dashboard-icon.svg';
import { ReactComponent as Orders } from '../assets/orders-icon.svg';
import { ReactComponent as Customers } from '../assets/customers-icon.svg';
import { ReactComponent as Marketing } from '../assets/marketing-icon.svg';
import { ReactComponent as DeliveryOptions } from '../assets/delivery-options-icon.svg';
import { ReactComponent as PaymentOptions } from '../assets/payment-options-icon.svg';
import { ReactComponent as Subscription } from '../assets/subscription-icon.svg';
import { ReactComponent as Integrations } from '../assets/integrations-icon.svg';
import { ReactComponent as Extensions } from '../assets/extensions-icon.svg';
import { ReactComponent as Settings } from '../assets/settings-icon.svg';
import { ReactComponent as LogOut } from '../assets/logout-icon.svg';
import { ReactComponent as CustomerSupport } from '../assets/customer-support-icon.svg';
import { ReactComponent as ShareShop } from '../assets/share-shop-icon.svg';
import { ReactComponent as ViewShop } from '../assets/view-shop-icon.svg';

const iconsMap: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  Dashboard: Dashboard,
  Catalogue: Catalogue,
  Orders: Orders,
  Customers: Customers,
  Marketing: Marketing,
  DeliveryOptions: DeliveryOptions,
  PaymentOptions: PaymentOptions,
  Subscription: Subscription,
  Integrations: Integrations,
  Extensions: Extensions,
  Settings: Settings,
  LogOut: LogOut,
  CustomerSupport: CustomerSupport,
  ShareShop: ShareShop,
  ViewShop: ViewShop
};

export const useSvgIcon: React.FC<string> = (iconName) => {
  const IconComponent = iconsMap[iconName];

  return <SvgIcon component={IconComponent} />;
};
