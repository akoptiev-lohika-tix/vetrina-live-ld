import * as React from 'react';
import { SVGProps, memo } from 'react';

const StoreDesignIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19.748.264c-.519-.52-1.358-.1-1.986.28-.647.391-1.498 1.022-2.53 1.875-2.201 1.818-4.704 4.2-6.727 6.223l-.002-.001a71.353 71.353 0 0 0-3.483 3.732 3.523 3.523 0 0 0-1.859.244l-.014.007a3.584 3.584 0 0 0-2.103 3.223v.006c0 1.54-.268 2.78-.533 3.207L0 19.884l.967.07c.237.016.485.025.742.025 1.882 0 4.177-.473 5.415-1.608l.003-.003c.638-.595.948-1.417.948-2.515a3.31 3.31 0 0 0-.023-.393 76.652 76.652 0 0 0 3.75-3.483l-.003-.004c2.388-2.387 4.516-4.898 6.04-6.997.767-1.056 1.362-1.988 1.72-2.694.368-.724.677-1.53.19-2.018ZM6.33 17.509c-.831.76-2.655 1.274-4.467 1.298.221-.777.353-1.834.353-2.95.01-.931.561-1.778 1.405-2.162a2.28 2.28 0 0 1 1.538-.092c.065 0 .606.136 1.06.59.972.972.834 2.64.11 3.316Zm1.349-3.279a3.466 3.466 0 0 0-1.443-1.468 68.822 68.822 0 0 1 2.433-2.622c.307.22.597.467.867.737l.005.005c.285.278.544.583.772.912a73.26 73.26 0 0 1-2.634 2.436Zm8.898-9.516c-1.512 2.025-3.481 4.293-5.421 6.245a7.36 7.36 0 0 0-.795-.914 8.167 8.167 0 0 0-.857-.745c2.161-2.156 4.298-4.143 6.03-5.606 1.758-1.486 2.69-2.09 3.163-2.335-.408.987-1.481 2.499-2.12 3.355Z"
      fill={props.color}
    />
  </svg>
);

export default memo(StoreDesignIcon);