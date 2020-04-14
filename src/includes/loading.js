import React, { Component } from 'react';
import loadingImage from '../images/loading.gif'

class Loading extends Component {
    render() {
        return (
            <center>
                <img src={loadingImage} />
            </center>
        );
    }
}

export default Loading;