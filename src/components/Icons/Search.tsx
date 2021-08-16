import * as React from "react";

function Search(props: any) {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="8.875"
        cy="8.93103"
        r="7.875"
        stroke="#474F63"
        strokeWidth="2"
      />
      <path
        d="M14.5 14.556L19 19.056"
        stroke="#474F63"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Search;
