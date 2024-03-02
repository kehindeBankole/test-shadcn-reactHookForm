import * as React from 'react';

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      className={`${props.className || ''}`}
    >
      <path
        d='M3.90002 4.79999H20.1V6.59999H3.90002V4.79999ZM3.90002 11.1H20.1V12.9H3.90002V11.1ZM3.90002 17.4H20.1V19.2H3.90002V17.4Z'
        fill='#17171F'
        fillOpacity='0.6'
      />
    </svg>
  );
}

export default React.memo(MenuIcon);
