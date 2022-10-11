import * as React from 'react';
import { SVGProps, memo } from 'react';

const CustomerSupportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g stroke={props.color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 18.333a8.333 8.333 0 1 0 0-16.666 8.333 8.333 0 0 0 0 16.666Z" />
      <path d="M7.575 7.5a2.5 2.5 0 0 1 4.858.833c0 1.667-2.5 2.5-2.5 2.5M10 14.167h.008" />
    </g>
  </svg>
);

export default memo(CustomerSupportIcon);
