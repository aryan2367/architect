import React from 'react'
import { NavLink } from 'react-router-dom'
 const Header=()=>   {
    
        return (
          <>
          <section className="wpo-hero-style-2">
            <div className="wpo-slide-wrap">
            <div className="container">
              <div className="row">
              <div className="col col-md-8 slide-caption">
                <h2 className="wow fadeInLeft" data-wow-delay="0.5s">I’m <span>John</span> Smith</h2>
              <p className="wow fadeInUp" data-wow-delay="1.0s"> UI/UX Designer</p>
              <div className="bg-social wow fadeInUp" data-wow-delay="0.5s"><ul><li><NavLink to="/">
                <i className="fab fa-facebook"></i></NavLink></li><li><NavLink to="/">
                  <i className="fab fa-linkedin"></i>
                </NavLink></li><li><NavLink to="/">
                  <i className="fab fa-instagram">
                  </i></NavLink>
                  </li></ul>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div className="wpo-slide-right-img">
            <div className="slide-img wow fadeInRight" data-wow-duration="2000ms">
              <img src="/dist/img/hero-shape.84c5ca49.png" alt=""/>
                </div>
                </div>
                </div>
                </section> 
                <div className="wpo-exprience-area">
                  <div className="exprience-wrap">
                    <div className="exprience-b">
                      <h2>1</h2><div className="exprience-s"><span>Years</span><span>Experience</span>
                      </div>
                      </div>
                      </div>
                      </div>
                      </>
        )
    
}
export default Header;