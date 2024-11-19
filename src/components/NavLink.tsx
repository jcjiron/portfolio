import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    className?: string;
    children: React.ReactNode;
    to: string;
};

export const NavLink = ({ children, className, to }: Props) => {
    return (
        <Link to={to} className={`relative leading-[150%] inline-block min-w-[60px]" text-dimgray active:text-dimgray no-underline hover:underline ${className}`}>
            {children}
        </Link>
    )
}
