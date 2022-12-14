import * as React from 'react';
import { SVGProps, memo } from 'react';

const ShareShopIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15 6.667a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM15 18.333a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7.158 11.258l5.692 3.317M12.842 5.425 7.158 8.742"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(ShareShopIcon);
