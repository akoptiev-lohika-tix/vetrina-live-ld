import * as React from 'react';
import { SVGProps, memo } from 'react';

const ExtensionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8.333 2.5H2.5v5.833h5.833V2.5ZM17.5 11.667h-5.833V17.5H17.5v-5.833ZM8.333 11.667H2.5V17.5h5.833v-5.833Z"
      stroke={props.color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.583 3.23v4.374M12.396 5.417h4.375"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(ExtensionsIcon);
