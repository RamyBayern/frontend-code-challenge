import React, { Component } from 'react';
import './card-image.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
class CardImage extends Component {
    render() {
        console.log(this.props)
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                {
                    this.props.imageUrls.map(e => <img src={e} alt="realestateImage" className="img-fluid" />)
                }
            </Slider>
        )
    }
}

export default CardImage;