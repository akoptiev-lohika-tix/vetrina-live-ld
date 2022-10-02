import * as React from 'react';
import { SVGProps, memo } from 'react';

const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.41 6.91a.833.833 0 0 1 1.18 0l5 5a.833.833 0 1 1-1.18 1.18L10 8.677 5.59 13.09a.833.833 0 1 1-1.18-1.178l5-5Z"
      fill={props.color}
    />
  </svg>
);

export default memo(ChevronUpIcon);
