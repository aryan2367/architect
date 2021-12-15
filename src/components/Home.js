import React from 'react';



import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import AboutPage from './AboutPage'
import PortfolioPage from './PortfolioPage'
import ContactPage from './ContactPage'
const Home =()=>{
    return(
    <>
    
<Menu />
        <Header/>
<AboutPage/>
<PortfolioPage/>
<ContactPage/>
<Footer/>
</>
    )
}
export default Home;