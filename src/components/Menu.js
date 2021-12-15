import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu =()=> {
    
        return (
          <>
            <div class="nav">
 <div class="nav-left">
     <NavLink to="/"><img src="/dist/img/efh.jpg" alt=""/></NavLink>
 </div>   
<div class="nav-right">
    <div class="nav-top">
        <ul>
            <li class="address"><i class="fas fa-map-marker-alt"></i>Rc259 ,Noida Sector-62</li>
<li><NavLink to="#"><i class="fab fa-facebook-f"></i></NavLink></li>
<li><NavLink to="#"><i class="fab fa-pinterest"></i></NavLink></li>
<li><NavLink to="#"><i class="fab fa-instagram"></i></NavLink></li>
<li><NavLink to="#"><i class="fab fa-twitter"></i></NavLink></li>
<li><NavLink to="#"><i class="fab fa-google-plus-g"></i></NavLink></li>
        </ul>
    </div>
    <div class="nav-bottom">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About Us</NavLink></li>
            
            <li><NavLink to="/Portfolio">Portfolio</NavLink></li>
            
            <li><NavLink to="/Contact">Contact Us</NavLink></li>
            <li className="letstalk"><NavLink to="/Contact">Let's Talk</NavLink></li>

        </ul>
        {/* <div class="times">

<button><i class="fa fa-times"></i></button>
</div> */}
    </div>
</div>
{/* <div class="bars">
<button><span></span>
<span class="span1"></span>
<span class='span2'></span>
</button>

</div> */}
</div>

            </>
        )
    }
    export default  Menu;
