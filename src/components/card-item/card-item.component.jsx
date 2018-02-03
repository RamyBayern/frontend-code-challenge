import React, { Component } from 'react';
import CardDetails from  '../card-details/card-details.component'
import './card-item.css'
import CardImage from '../card-img/card-image.component'
class CardItem extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6 col-12 full-card">
                <a className="rent-btn">mieten</a>
               <div className="card-item">
               <CardImage imageUrls= {this.props.propertyDetails.imageUrls}></CardImage>
               <div className="card-info">
               <CardDetails
                    title= {this.props.propertyDetails.title} 
                    advertisementPrice= {this.props.propertyDetails.advertisementPrice.baseRent} 
                    street = {this.props.propertyDetails.realestateSummary.address.street}
                    postalCode = {this.props.propertyDetails.realestateSummary.address.postalCode}
                    city = {this.props.propertyDetails.realestateSummary.address.city}
                    numberOfRooms= {this.props.propertyDetails.realestateSummary.numberOfRooms}
                    space= {this.props.propertyDetails.realestateSummary.numberOfRooms}>
                </CardDetails> 
               </div>
               </div>
            </div>
        )
    }
}

export default CardItem;