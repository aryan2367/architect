import React from 'react'
import { NavLink } from 'react-router-dom'
const PortfolioCard=()=>{

    return(

       <>
       
       <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div class="single-team-item">
                    <div class="img-holder">
                        <div class="inner">
                            <img src="/dist/img/hero-shape.84c5ca49.png" alt=""/>
                        </div>
                        <div class="overlay-icon">
                            <NavLink to="#"><span class="fas fa-plus"></span></NavLink>
                        </div>
                        <div class="social-icon">
                            <ul>
                               <li><NavLink to="#" class="facebook"><i class="fab fa-facebook"></i></NavLink></li>
                                <li><NavLink to="#" class="twitter"><i class="fab fa-twitter"></i></NavLink></li>
                                <li><NavLink to="#" class="linkedin"><i class="fab fa-linkedin"></i></NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="title-holder">
                        <h3><NavLink to="#">Lorem  Al </NavLink></h3>
                        <p>Industrial Engineer</p>
                    </div>  
                </div>              
            </div>
            
           
       </> 
    )
}
export default PortfolioCard;