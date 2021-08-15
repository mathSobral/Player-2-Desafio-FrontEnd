import * as React from "react";

function Speaker(props: any) {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.75 4.25V13.9155C6.75 14.0184 6.7246 14.1197 6.67605 14.2104C6.6275 14.3011 6.5573 14.3785 6.47169 14.4355L5.61293 15.008C5.5296 15.0636 5.43413 15.0983 5.33457 15.1093C5.23502 15.1202 5.13429 15.1071 5.04087 15.071C4.94745 15.0349 4.86408 14.9768 4.79778 14.9017C4.73148 14.8267 4.68419 14.7368 4.6599 14.6396L3.625 10.5"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.625 10.5001C2.7962 10.5001 2.00134 10.1708 1.41529 9.58478C0.82924 8.99872 0.5 8.20387 0.5 7.37507C0.5 6.54627 0.82924 5.75141 1.41529 5.16536C2.00134 4.57931 2.7962 4.25007 3.625 4.25007H6.75C6.75 4.25007 11.004 4.25007 15.0977 0.816659C15.1888 0.74003 15.2998 0.690991 15.4178 0.67531C15.5357 0.659629 15.6557 0.677958 15.7636 0.72814C15.8715 0.778323 15.9629 0.858273 16.0269 0.958588C16.0909 1.0589 16.1249 1.17541 16.125 1.29441V13.4557C16.1249 13.5747 16.0909 13.6912 16.0269 13.7915C15.9629 13.8919 15.8715 13.9718 15.7636 14.022C15.6557 14.0722 15.5357 14.0905 15.4178 14.0748C15.2998 14.0591 15.1888 14.0101 15.0977 13.9335C11.004 10.5001 6.75 10.5001 6.75 10.5001H3.625Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Speaker;
