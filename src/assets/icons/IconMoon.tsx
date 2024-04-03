import React from "react";

export default function IconMoon({
    width = 26,
    height = 27,
    color = "#404040",
    ...props
}) {
    return (
        <svg
        width={width}
        height={height}
        viewBox="0 0 28 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
        <path
            d="M3.92203 5.56836C1.8951 8.15969 0.780965 11.4798 1.03601 15.07C1.51925 22.0207 7.38527 27.6757 14.4056 27.9861C19.3589 28.2021 23.7886 25.8807 26.4464 22.2231C27.5471 20.725 26.9565 19.7263 25.1175 20.0637C24.2181 20.2256 23.2919 20.2931 22.3254 20.2526C15.7614 19.9827 10.3921 14.4626 10.3653 7.94375C10.3518 6.1892 10.7143 4.52913 11.372 3.01752C12.0968 1.34395 11.2244 0.547656 9.54643 1.26297"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        </svg>
    );
}