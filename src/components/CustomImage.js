import React from 'react';

export default function CustomImage({ imgSrc, pt }) {
    return (
        <div className='custom-image' style={{ paddingTop: pt }}>
            <img className="img" src={imgSrc} alt="" />
        </div>
    )
}
