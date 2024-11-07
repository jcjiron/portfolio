import React from 'react';

interface Props {
    imgUrl: string;
    altText: string;
    className?: string;
}

const RoundedImage = ({ imgUrl, altText, className = '' }: Props) => {
    return (
        <img
            src={imgUrl}
            alt={altText}
            className={`w-32 h-32 object-cover rounded-full ${className}`}
        />
    );
};

export default RoundedImage;
