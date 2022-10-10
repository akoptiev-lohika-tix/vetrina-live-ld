import React from 'react';

import DashboardIcon from '../../icons/dashboard-icon';
import SettingsIcon from '../../icons/settings-icon';
import CatalogueIcon from '../../icons/catalogue-icon';
import OrdersIcon from '../../icons/orders-icon';
import CustomersIcon from '../../icons/customers-icon';
import MarketingIcon from '../../icons/marketing-icon';
import DeliveryOptionsIcon from '../../icons/delivery-options-icon';
import PaymentOptionsIcon from '../../icons/payment-options-icon';
import StoreDesignIcon from '../../icons/store-design-icon';
import SubscriptionIcon from '../../icons/subscription-icon';
import IntegrationsIcon from '../../icons/integrations-icon';
import ExtensionsIcon from '../../icons/extensions-icon';
import LogoutIcon from '../../icons/logout-icon';
import CustomerSupportIcon from '../../icons/customer-support-icon';
import ShareShopIcon from '../../icons/share-shop-icon';
import ViewShopIcon from '../../icons/view-shop-icon';
import ChevronUpIcon from '../../icons/chevron-up-icon';
import ChevronDownIcon from '../../icons/chevron-down-icon';
import ChevronDownSmallIcon from '../../icons/chevron-down-small-icon';
import MenuIcon from '../../icons/menu-icon';
import LogoIcon from '../../icons/logo-icon';
import LightningIcon from '../../icons/lightning-icon';
import HyperLinkIcon from '../../icons/hyper-link-icon';
import ArrowRightIcon from '../../icons/arrow-right-icon';
import ConfigureShopIcon from '../../icons/configure-shop-icon';
import TrustPilotIcon from '../../icons/trustpilot-icon';
import InviteFriendsIcon from '../../icons/invite-friends-icon';
import SupportIcon from '../../icons/support-icon';
import NewsIcon from '../../icons/news-icon';

type Props = {
  iconName: string;
  color?: string;
};

export const iconsMap: Record<string, any> = {
  Dashboard: DashboardIcon,
  Catalogue: CatalogueIcon,
  Orders: OrdersIcon,
  Customers: CustomersIcon,
  Marketing: MarketingIcon,
  DeliveryOptions: DeliveryOptionsIcon,
  PaymentOptions: PaymentOptionsIcon,
  StoreDesign: StoreDesignIcon,
  Subscription: SubscriptionIcon,
  Integrations: IntegrationsIcon,
  Extensions: ExtensionsIcon,
  Settings: SettingsIcon,
  LogOut: LogoutIcon,
  CustomerSupport: CustomerSupportIcon,
  ShareShop: ShareShopIcon,
  ViewShop: ViewShopIcon,
  ChevronUp: ChevronUpIcon,
  ChevronDown: ChevronDownIcon,
  Menu: MenuIcon,
  Logo: LogoIcon,
  Lightning: LightningIcon,
  HyperLink: HyperLinkIcon,
  ArrowRight: ArrowRightIcon,
  ChevronDownSmall: ChevronDownSmallIcon,
  ConfigureShop: ConfigureShopIcon,
  TrustPilot: TrustPilotIcon,
  InviteFriends: InviteFriendsIcon,
  Support: SupportIcon,
  News: NewsIcon
};

export const SvgCreator: React.FC<Props> = ({ iconName, color }) => {
  const IconComponent = iconsMap[iconName];
  return <IconComponent color={color} />;
};
