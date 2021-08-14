import * as React from "react";

function Calendar(props: any) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 2.80603H2.5C2.08579 2.80603 1.75 3.14182 1.75 3.55603V18.556C1.75 18.9702 2.08579 19.306 2.5 19.306H17.5C17.9142 19.306 18.25 18.9702 18.25 18.556V3.55603C18.25 3.14182 17.9142 2.80603 17.5 2.80603Z"
        stroke="#B3B9C9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 1.30603V4.30603"
        stroke="#B3B9C9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 1.30603V4.30603"
        stroke="#B3B9C9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.75 7.30603H18.25"
        stroke="#B3B9C9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Calendar;
