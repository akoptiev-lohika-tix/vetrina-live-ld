import * as React from 'react';
import { SVGProps, memo } from 'react';

const CatalogueIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 .833C0 .373.373 0 .833 0h3.334c.397 0 .739.28.817.67l.7 3.497h13.483a.833.833 0 0 1 .818.99l-1.334 6.997a2.5 2.5 0 0 1-2.491 2.013H8.074a2.5 2.5 0 0 1-2.491-2.012L4.19 5.199a.828.828 0 0 1-.014-.07l-.693-3.462H.834A.833.833 0 0 1 0 .833Zm6.017 5 1.2 5.996a.833.833 0 0 0 .834.671h8.132a.834.834 0 0 0 .832-.668l1.144-5.999H6.017ZM5.833 17.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0Zm9.167 0a1.667 1.667 0 1 1 3.333 0 1.667 1.667 0 0 1-3.333 0Z"
      fill={props.color}
    />
  </svg>
);

export default memo(CatalogueIcon);
