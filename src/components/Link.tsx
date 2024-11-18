


import React from 'react'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    className?: string;
};

export const Link = ({ children, className, ...props }: Props) => {
    return (
        <a {...props} className={`relative leading-[150%] inline-block min-w-[60px]" text-dimgray active:text-dimgray no-underline hover:underline ${className}`}>
            {children}
        </a>
    )
}
