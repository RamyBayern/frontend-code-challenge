import React, { Component } from 'react';
import Dashboard from './components/dashboard/dashboard.component'
import './App.css'
class App extends Component {
    // constructor(){
    //     super()
    //     getPropertiesDetails();
    // }
    render() {
        return ( 
        <div className="container wrapper">
             <Dashboard />
        </div>
        )
    }

}

export default App;