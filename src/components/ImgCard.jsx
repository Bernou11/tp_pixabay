import React from 'react'

function ImgCard({image}) {

    return (
        <>
            <a href={image.webformatURL} target="new">
                <img src={image.webformatURL} alt="" className='w-full h-auto' />
            </a>
        </>
    )
}

export default ImgCard