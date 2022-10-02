import * as React from 'react';
import { SVGProps, memo } from 'react';

const DeliveryOptionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={18} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.833.75a.75.75 0 0 0-.75.75v10.833c0 .415.336.75.75.75h1.25a2.833 2.833 0 1 0 5.001 0h5.832a2.833 2.833 0 1 0 5.001 0h1.25a.75.75 0 0 0 .75-.75V8.167a.75.75 0 0 0-.22-.53l-2.5-2.5a.75.75 0 0 0-.53-.22h-2.584V1.5a.75.75 0 0 0-.75-.75H.833Zm14.584 10.833h3V8.477l-2.061-2.06h-2.273v5.166h1.334Zm0 1.5a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667ZM3.25 14.417a1.333 1.333 0 1 1 2.667 0 1.333 1.333 0 0 1-2.667 0Zm9.333-2.834h-11V2.25h11v9.333Z"
      fill={props.color}
    />
  </svg>
);

export default memo(DeliveryOptionsIcon);
