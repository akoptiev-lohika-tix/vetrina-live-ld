import * as React from 'react';
import { SVGProps, memo } from 'react';

const CustomersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.72 11.887a4.167 4.167 0 0 1 2.947-1.22h6.666a4.167 4.167 0 0 1 4.167 4.166V16.5a.833.833 0 1 1-1.667 0v-1.667a2.5 2.5 0 0 0-2.5-2.5H4.667a2.5 2.5 0 0 0-2.5 2.5V16.5a.833.833 0 1 1-1.667 0v-1.667c0-1.105.439-2.165 1.22-2.946ZM8 2.333a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.167 2.5a4.167 4.167 0 1 1 8.334 0 4.167 4.167 0 0 1-8.334 0Z"
      fill={props.color}
    />
  </svg>
);

export default memo(CustomersIcon);
