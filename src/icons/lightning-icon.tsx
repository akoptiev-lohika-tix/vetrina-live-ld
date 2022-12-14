import * as React from 'react';
import { SVGProps, memo } from 'react';

const LightningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(LightningIcon);
