import React, { Component } from 'react';
import CardItem from '../card-item/card-item.component';
import './dashboard.css'
import { getPropertiesDetails } from '../../services/properties.service';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            elements :null
        }
        getPropertiesDetails().then(res => {
            this.setState({
                elements: res
            })
        });
    }
    render() {
        if (this.state.elements) {
            return (
                
                <div className="row">
                <p className="head-title col-12">Was ist Ihre Immobilie wert?</p>
                    {
                        this.state.elements.map(e => <CardItem propertyDetails={e} />)
                    }
                </div>
            )
        }
        else{
        return  (
                <div className="loading">
                    <div className="loader"></div>
                </div>
            ) 
        }
    }
}

export default Dashboard;