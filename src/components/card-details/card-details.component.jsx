import React, { Component } from 'react';
import './card-details.css'
class CardDetails extends Component {
    render() {
        return (
            <div className="card-details">
                <div className="row description-container">
                    <p className="col-12 description">{this.props.title} </p>
                    <p className="col-12 mini-description">
                        <span>{this.props.postalCode} </span>
                        <span>{this.props.city} / </span>
                        <span>{this.props.street}</span>                                                                        
                    </p>
                </div>
                <div className="row">
                    <div className="col-4 col-sm-12 col-md-4">
                        <p className="price">{this.props.advertisementPrice} €</p>
                    </div>
                    <div className="col-4 col-sm-7 col-md-4">
                        <p className="rooms">{this.props.numberOfRooms} Zimmer</p>
                    </div>
                    <div className="col-4 col-sm-5 col-md-4">
                        <p className="area">ab {this.props.space} m<sup>2</sup></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardDetails;