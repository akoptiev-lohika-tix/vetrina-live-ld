import * as React from 'react';
import { SVGProps, memo } from 'react';

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.41 6.91a.833.833 0 0 1 1.18 0L10 11.323l4.41-4.411a.833.833 0 1 1 1.18 1.178l-5 5a.833.833 0 0 1-1.18 0l-5-5a.833.833 0 0 1 0-1.178Z"
      fill={props.color}
    />
  </svg>
);

export default memo(ChevronDownIcon);
