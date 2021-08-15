import * as React from "react";

function Person(props: any) {
  return (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.00013 9.54745C9.24372 9.54745 11.0625 7.72866 11.0625 5.48507C11.0625 3.24147 9.24372 1.42268 7.00013 1.42268C4.75653 1.42268 2.93774 3.24147 2.93774 5.48507C2.93774 7.72866 4.75653 9.54745 7.00013 9.54745Z"
        stroke="white"
        strokeMiterlimit="10"
      />
      <path
        d="M1.375 12.4689C2.00946 11.5664 2.85175 10.8299 3.83075 10.3214C4.80975 9.81289 5.89672 9.54742 6.9999 9.54738C8.10308 9.54734 9.19007 9.81272 10.1691 10.3211C11.1482 10.8295 11.9905 11.5661 12.625 12.4685"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Person;
