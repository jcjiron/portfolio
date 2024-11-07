import { ReactElement } from 'react';

interface Props {
    className?: string;
    imgUrl: string;
    children?: ReactElement;
}

const Banner = ({ className = '', imgUrl, children }: Props) => {
    return (
        <div
            className={`relative w-full bg-cover bg-center ${className} `}
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default Banner;
