import React from "react";

interface ConvexIconProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const ConvexIcon = ({ size = 24, className = '', style, ...props }: ConvexIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    className={className}
    style={style}
    {...props}
  >
    {/* Boxicons v3.0 https://boxicons.com | License https://docs.boxicons.com/free */}
    <path d="m14.57,17.76c-3.39.32-6.91-1.51-8.64-4.5-.61,2.33-.18,4.89,1.1,6.9.31.49.76.87,1.29,1.1,5.71,2.48,12.7-1.56,13.41-7.95-1.51,2.58-4.25,4.13-7.16,4.46Z"></path>
    <path d="m5.82,11.39c1.43-3.15,4.75-5.33,8.15-5.37-1.68-1.7-4.07-2.61-6.42-2.48-.57.03-1.12.24-1.58.59-4.97,3.79-5.02,11.97.06,15.79-1.44-2.62-1.39-5.81-.22-8.53Z"></path>
    <path d="m8.26,2.78c2.95.05,5.64,1.68,7.36,4.08,1.97,2.91,2.18,6.74.49,9.87,2.31-.62,4.28-2.3,5.35-4.46.26-.52.35-1.11.28-1.68C20.97,4.38,13.96.19,8.26,2.78Z"></path>
  </svg>
);

export default ConvexIcon; 