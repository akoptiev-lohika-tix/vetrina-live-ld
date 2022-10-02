import * as React from 'react';
import { SVGProps, memo } from 'react';

const IntegrationsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <mask id="a" fill="none">
      <path d="M18.243 7.282a8.336 8.336 0 0 0-.576-1.355l1.005-1.464-3.188-3.144-1.52 1.008a8.604 8.604 0 0 0-1.435-.566L11.77 0h-3.54l-.772 1.814c-.46.145-.907.33-1.337.55L4.533 1.308 1.34 4.446l1.077 1.575c-.207.398-.382.811-.522 1.236L0 7.587v2.567c0 2.63 1.04 5.102 2.929 6.962A10.014 10.014 0 0 0 10 20c2.671 0 5.182-1.024 7.071-2.884A9.707 9.707 0 0 0 20 10.154V7.586l-1.757-.304ZM2.832 8.284l.1-.357c.161-.575.395-1.13.696-1.648l.184-.316-.937-1.37L4.679 2.82l1.385.922.322-.184a7.4 7.4 0 0 1 1.674-.7l.276-.077.685-1.609h1.96l.68 1.572.283.073a7.397 7.397 0 0 1 1.762.703l.32.179 1.31-.868 1.8 1.776-.87 1.266.19.318c.326.552.577 1.143.746 1.759l.098.36 1.51.26v1.104h-3.302c-.117-2.848-2.506-5.13-5.427-5.13-2.92 0-5.31 2.282-5.426 5.13H1.19V8.57l1.642-.286Zm-1.614 2.562h3.477c.04 1.11.178 2.186.404 3.188H2.116a8.503 8.503 0 0 1-.898-3.188Zm4.628-1.172c.115-2.202 1.97-3.958 4.235-3.958 2.265 0 4.12 1.756 4.236 3.958H5.846Zm.04 1.172h3.519v3.188H6.32a15.997 15.997 0 0 1-.435-3.188Zm3.519 4.36v3.522c-.808-.268-1.59-1.07-2.213-2.29a10.11 10.11 0 0 1-.523-1.232h2.736Zm1.19 3.522v-3.522h2.736c-.153.437-.328.85-.523 1.233-.623 1.22-1.405 2.02-2.213 2.29Zm0-4.694v-3.188h3.52a15.998 15.998 0 0 1-.436 3.188h-3.084Zm4.71-3.188h3.477a8.503 8.503 0 0 1-.898 3.188h-2.98a17.36 17.36 0 0 0 .401-3.188Zm-12.468 4.36h2.58c.199.63.437 1.22.712 1.759.258.507.543.955.848 1.34a8.797 8.797 0 0 1-4.14-3.099Zm13.392 1.081a8.798 8.798 0 0 1-3.21 2.02c.64-.804 1.175-1.861 1.568-3.1h2.576c-.279.38-.59.742-.934 1.08Z" />
    </mask>
    <path
      d="M18.243 7.282a8.336 8.336 0 0 0-.576-1.355l1.005-1.464-3.188-3.144-1.52 1.008a8.604 8.604 0 0 0-1.435-.566L11.77 0h-3.54l-.772 1.814c-.46.145-.907.33-1.337.55L4.533 1.308 1.34 4.446l1.077 1.575c-.207.398-.382.811-.522 1.236L0 7.587v2.567c0 2.63 1.04 5.102 2.929 6.962A10.014 10.014 0 0 0 10 20c2.671 0 5.182-1.024 7.071-2.884A9.707 9.707 0 0 0 20 10.154V7.586l-1.757-.304ZM2.832 8.284l.1-.357c.161-.575.395-1.13.696-1.648l.184-.316-.937-1.37L4.679 2.82l1.385.922.322-.184a7.4 7.4 0 0 1 1.674-.7l.276-.077.685-1.609h1.96l.68 1.572.283.073a7.397 7.397 0 0 1 1.762.703l.32.179 1.31-.868 1.8 1.776-.87 1.266.19.318c.326.552.577 1.143.746 1.759l.098.36 1.51.26v1.104h-3.302c-.117-2.848-2.506-5.13-5.427-5.13-2.92 0-5.31 2.282-5.426 5.13H1.19V8.57l1.642-.286Zm-1.614 2.562h3.477c.04 1.11.178 2.186.404 3.188H2.116a8.503 8.503 0 0 1-.898-3.188Zm4.628-1.172c.115-2.202 1.97-3.958 4.235-3.958 2.265 0 4.12 1.756 4.236 3.958H5.846Zm.04 1.172h3.519v3.188H6.32a15.997 15.997 0 0 1-.435-3.188Zm3.519 4.36v3.522c-.808-.268-1.59-1.07-2.213-2.29a10.11 10.11 0 0 1-.523-1.232h2.736Zm1.19 3.522v-3.522h2.736c-.153.437-.328.85-.523 1.233-.623 1.22-1.405 2.02-2.213 2.29Zm0-4.694v-3.188h3.52a15.998 15.998 0 0 1-.436 3.188h-3.084Zm4.71-3.188h3.477a8.503 8.503 0 0 1-.898 3.188h-2.98a17.36 17.36 0 0 0 .401-3.188Zm-12.468 4.36h2.58c.199.63.437 1.22.712 1.759.258.507.543.955.848 1.34a8.797 8.797 0 0 1-4.14-3.099Zm13.392 1.081a8.798 8.798 0 0 1-3.21 2.02c.64-.804 1.175-1.861 1.568-3.1h2.576c-.279.38-.59.742-.934 1.08Z"
      fill={props.color}
      stroke={props.color}
      strokeWidth={1.5}
      mask="url(#a)"
    />
  </svg>
);

export default memo(IntegrationsIcon);
