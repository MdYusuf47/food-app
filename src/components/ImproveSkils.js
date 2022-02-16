import React from 'react';

export default function ImproveSkils() {
    const list = [
        "Learn new recepies",
        "Learn new recepies",
        "Learn new recepies",
        "Learn new recepies",
        "Learn new recepies",
        "Learn new recepies"
    ]
    return (
        <div className='section improve-skills'>
            <div className="col img">
                <img src="/img/gallery/img_10.jpg" alt="" />

            </div>
            <div className="col typography">
                <h1 className="title">
                    Improve Your Culinar Skills
                </h1>
                {
                    list.map((item, index) => (
                        <p className='skill-item' key={index}>{item}</p>
                    ))
                }
                <button className='btn'>Signup now</button>
            </div>

        </div>
    )
}
