import React from 'react'
import slider0 from './slider0.jpg'
import slider1 from './slider1.jpg'
import slider2 from './slider2.jpg'


const MiCarousell = () => {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={slider0} className="d-block w-100" alt="slider0" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider1} className="d-block w-100" alt="slider1" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={slider2} className="d-block w-100" alt="slider2" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default MiCarousell
