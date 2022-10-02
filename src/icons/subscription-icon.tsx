import * as React from 'react';
import { SVGProps, memo } from 'react';

const SubscriptionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.5 3.333h-15C1.58 3.333.833 4.08.833 5v10c0 .92.746 1.667 1.667 1.667h15c.92 0 1.667-.747 1.667-1.667V5c0-.92-.747-1.667-1.667-1.667ZM.833 8.333h18.334"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(SubscriptionIcon);
