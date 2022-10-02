import * as React from 'react';
import { SVGProps, memo } from 'react';

const DashboardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.488 1.009a.833.833 0 0 1 1.024 0l7.5 5.833c.203.158.321.4.321.658v9.167a2.5 2.5 0 0 1-2.5 2.5H3.167a2.5 2.5 0 0 1-2.5-2.5V7.5c0-.257.118-.5.321-.658l7.5-5.833ZM7.333 17.5h3.334v-6.667H7.333V17.5Zm5 0V10a.833.833 0 0 0-.833-.833h-5a.833.833 0 0 0-.833.833v7.5h-2.5a.833.833 0 0 1-.834-.833v-8.76L9 2.723l6.667 5.186v8.759a.833.833 0 0 1-.834.833h-2.5Z"
      fill={props.color}
    />
  </svg>
);

export default memo(DashboardIcon);
