import { memo } from 'react';

function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
        d='M12 13.0548L16.455 8.59979L17.7276 9.87239L12 15.6L6.2724 9.87239L7.545 8.59979L12 13.0548Z'
        fill='#17171F'
        fillOpacity='0.6'
      />
    </svg>
  );
}

export default memo(ArrowDownIcon);
