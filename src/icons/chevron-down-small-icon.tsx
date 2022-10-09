import * as React from 'react';
import { SVGProps, memo } from 'react';

const ChevronDownSmallIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={10} height={7} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.529 1.029c.26-.26.682-.26.942 0L5 4.557 8.529 1.03a.667.667 0 1 1 .942.942l-4 4a.667.667 0 0 1-.942 0l-4-4a.667.667 0 0 1 0-.942Z"
      fill={props.color}
    />
  </svg>
);

export default memo(ChevronDownSmallIcon);
