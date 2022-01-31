import React from 'react'
import sliderimg from '../assets/slider_img.jpg'

export default function Slider() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active d-flex align-items-center" style={{height:'55vh', overflow:'hidden' }}>
                    <img src='https://images.unsplash.com/photo-1625244695851-1fc873f942bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={sliderimg} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={sliderimg} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
