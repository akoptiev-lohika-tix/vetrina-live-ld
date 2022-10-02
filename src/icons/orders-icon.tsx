import * as React from 'react';
import { SVGProps, memo } from 'react';

const OrdersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={18} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.833 1c0-.46.373-.833.834-.833H16.5a.833.833 0 1 1 0 1.666H5.667A.833.833 0 0 1 4.833 1ZM4.833 6c0-.46.373-.833.834-.833H16.5a.833.833 0 1 1 0 1.666H5.667A.833.833 0 0 1 4.833 6ZM4.833 11c0-.46.373-.833.834-.833H16.5a.833.833 0 1 1 0 1.666H5.667A.833.833 0 0 1 4.833 11ZM.667 1c0-.46.373-.833.833-.833h.008a.833.833 0 1 1 0 1.666H1.5A.833.833 0 0 1 .667 1ZM.667 6c0-.46.373-.833.833-.833h.008a.833.833 0 1 1 0 1.666H1.5A.833.833 0 0 1 .667 6ZM.667 11c0-.46.373-.833.833-.833h.008a.833.833 0 1 1 0 1.666H1.5A.833.833 0 0 1 .667 11Z"
      fill={props.color}
    />
  </svg>
);

export default memo(OrdersIcon);
