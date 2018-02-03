import React, { Component } from 'react';
import CardItem from '../card-item/card-item.component';
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
                    {
                        this.state.elements.map(e => <CardItem propertyDetails={e} />)
                    }
                </div>
            )
        }
        else{
        return  (<div className="loading">loading////</div>) 
        }
    }
}

export default Dashboard;