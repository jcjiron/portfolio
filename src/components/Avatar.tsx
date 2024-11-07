import React from 'react'
import RoundedImage from './RoundedImage'

interface Props {
    className?: string;
}

export const Avatar = ({ className = '' }: Props) => {
    return (
        <RoundedImage altText='Juan Carlos' imgUrl='/juan_carlos_jiron.webp' className={` ${className}`} />
    )
}
