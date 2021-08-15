import * as React from "react";

function House(props: any) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.87454 14.2494V10.4993C9.87454 10.3335 9.80869 10.1746 9.69148 10.0574C9.57427 9.94016 9.4153 9.87431 9.24954 9.87431H6.74954C6.58378 9.87431 6.42481 9.94016 6.3076 10.0574C6.19039 10.1746 6.12454 10.3335 6.12454 10.4993V14.2494C6.12454 14.4151 6.0587 14.5741 5.94151 14.6913C5.82432 14.8085 5.66537 14.8744 5.49962 14.8744L1.75008 14.8749C1.668 14.8749 1.58671 14.8587 1.51088 14.8273C1.43504 14.7959 1.36613 14.7499 1.30809 14.6919C1.25004 14.6338 1.204 14.5649 1.17258 14.4891C1.14117 14.4132 1.125 14.332 1.125 14.2499V7.02641C1.125 6.93934 1.14319 6.85323 1.17842 6.77359C1.21364 6.69396 1.26511 6.62257 1.32954 6.56399L7.57911 0.881583C7.69415 0.776979 7.84406 0.719015 7.99955 0.719009C8.15504 0.719004 8.30495 0.776959 8.42 0.881555L14.6704 6.56398C14.7349 6.62256 14.7863 6.69396 14.8216 6.7736C14.8568 6.85324 14.875 6.93936 14.875 7.02644V14.2499C14.875 14.332 14.8588 14.4132 14.8274 14.4891C14.796 14.5649 14.75 14.6338 14.6919 14.6919C14.6339 14.7499 14.565 14.7959 14.4891 14.8273C14.4133 14.8587 14.332 14.8749 14.2499 14.8749L10.4995 14.8744C10.3337 14.8744 10.1748 14.8085 10.0576 14.6913C9.94038 14.5741 9.87454 14.4151 9.87454 14.2494V14.2494Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default House;
