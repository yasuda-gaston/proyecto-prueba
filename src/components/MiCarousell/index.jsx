import React from 'react'
import slider0 from './slider0.jpg'
import slider1 from './slider1.jpg'
import slider2 from './slider2.jpg'


const MiCarousell = () => {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={slider0} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slider1} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={slider2} alt="Third slide" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiCarousell
