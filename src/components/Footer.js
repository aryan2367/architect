import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer=()=>{


        return (
            <div className="wpo-footer-area undefined"><div className="container">
            <div className="wpo-footer-top"><div className="row">
            <div className="col-lg-2 col-md-3 col-sm-3 col-12 footer-logoig">
            <NavLink to="#">Portfolio</NavLink>
            <div className="footer-logo"></div>
            </div>
            <div className="col-lg-6 col-md-9 col-sm-9 col-12">
             
              <div className="wpo-footer-menu"><ul><li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Portfolio">Portfolio</NavLink></li><li><NavLink to="/About">About</NavLink></li>
              <li><NavLink to="/Contact">Contact</NavLink></li></ul></div></div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="wpo-footer-social">
                  <ul><li><NavLink to="/">
                    <i className="fab fa-facebook-f"></i></NavLink></li>
                    <li><NavLink to="/"><i className="fab fa-twitter" aria-hidden="true"></i></NavLink></li>
                    <li><NavLink to="/"><i className="fab fa-instagram" aria-hidden="true"></i>
            </NavLink></li></ul></div></div></div></div></div><div className="wpo-footer-bottom undefined"><span>© 2021 portfolio. All rights reserved</span></div></div>
        );
    };

export default Footer;