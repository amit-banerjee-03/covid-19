import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import coronaImage from '../images/corona-image.png'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            isCollapsed: true
        };
    }
    toggleNavbar() {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }
    render() {
        const { isCollapsed } = this.state;
        const classOne = isCollapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = isCollapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-solid no-transparent" style={{position:"fixed",top:0,width:"100%",opacity:1,zIndex:100}}>
                    <div className="container-fluid p-1">
                        <Link to="/" style={{textDecoration:"none"}}><img src={coronaImage} width="50px" height="50px" /> <span style={{fontSize:"1.3em",color:"white"}}>Covid-19 Monitor</span></Link>
                        <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle Navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className={`${classOne}`} id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item" onClick={this.toggleNavbar}>
                                    <Link className="nav-link" to="/country">Countries</Link>
                                </li>
                                <li className="nav-item" onClick={this.toggleNavbar}>
                                    <Link className="nav-link" to="/news">News</Link>
                                </li>
                                <li className="nav-item" onClick={this.toggleNavbar}>
                                    <Link className="nav-link" to="/guidelines">WHO Guidelines</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;