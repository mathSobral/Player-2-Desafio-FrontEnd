import * as React from "react";

function Close(props: any) {
  return (
    <svg
      width="6"
      height="7"
      viewBox="0 0 6 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.75 5.76855L5.25 1.26855M5.25 5.76855L0.75 1.26855"
        stroke="#FF403D"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Close;
