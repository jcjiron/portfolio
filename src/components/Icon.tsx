import React, { ReactNode } from 'react';

interface Props extends React.HTMLAttributes<HTMLImageElement> {
    className?: string;
    children?: ReactNode;
    icon: string;
}

export const Icon = ({
    className = '',
    children,
    icon,
    ...props
}: Props) => {
    return (
        <img
            className={`${className} h-6 w-6 relative`} {...props}
            loading="lazy"
            alt=""
            src={icon}
        />
    );
};
