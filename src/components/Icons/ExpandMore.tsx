import * as React from "react";

function ExpandMore(props: any) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.875 1.09717L4.78787 4.01004C4.90503 4.12719 5.09497 4.12719 5.21213 4.01004L8.125 1.09717"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default ExpandMore;
