import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coronaImage from '../images/corona-image.png'

class NotFound extends Component {
    render() {
        return (
            <div className="justify-content-start alert fade show">
                <center>
                    <h1>Uh Oh!! Seems like we have a 404 error...</h1>
                </center>
                <br />
                <div className="row">
                    <div className="col-4">
                        <img src={coronaImage} width="100%" />
                    </div>
                    <div className="col-7">
                        <h3>
                            You shouldn't be here...Please click <Link to="/">Here</Link> to go to the Home page!!
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;