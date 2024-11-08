import React from 'react'
import Banner from './Banner'
import { Avatar } from './Avatar'

export const HeroBanner = () => {
    return (
        <Banner imgUrl='/background.webp' className="h-[484px] flex justify-center items-center">
            <div className='text-center text-white'>
                <Avatar className=' w-64 h-64 rounded-full object-top' />
                <h3 className='font-karla text-3xl my-1'>Juan Carlos Jirón</h3>
            </div>
        </Banner>
    )
}
