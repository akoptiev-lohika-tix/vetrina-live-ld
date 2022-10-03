import * as React from 'react';
import { SVGProps, memo } from 'react';

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3.251 12h18M3.251 6h18M3.251 18h18"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(MenuIcon);
