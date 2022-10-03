import * as React from 'react';
import { SVGProps, memo } from 'react';

const PaymentOptionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={12} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.833.833a.833.833 0 1 0-1.666 0v2.5h-1.25a3.75 3.75 0 0 0 0 7.5h1.25V15H1a.833.833 0 1 0 0 1.667h4.167v2.5a.833.833 0 0 0 1.666 0v-2.5h1.25a3.75 3.75 0 0 0 0-7.5h-1.25V5h3.334a.833.833 0 0 0 0-1.667H6.833v-2.5ZM5.167 5h-1.25a2.083 2.083 0 1 0 0 4.167h1.25V5Zm1.666 5.833V15h1.25a2.083 2.083 0 0 0 0-4.167h-1.25Z"
      fill={props.color}
    />
  </svg>
);

export default memo(PaymentOptionsIcon);
