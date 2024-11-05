import React from 'react';
import { Icon } from './Icon';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string;
    className?: string;
}

export const Button = ({
    icon = '',
    children,
    className = '',
    ...props
}: ButtonProps) => {
    return (
        <button className={`cursor-pointer [border:none] py-[11px] px-5 bg-gold rounded-lg flex flex-row items-center justify-center box-border max-w-[360px] hover:bg-amber-400 text-lg leading-[150%] font-merriweather text-gray-200 text-center ${className}`} {...props} >
            {icon && <Icon icon={icon} />}
            {children}
        </button>
    );
};
