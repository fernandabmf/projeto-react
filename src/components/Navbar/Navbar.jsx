import React from "react";
import logoImg from '../../assets/images/saturn2.png'

export class Navbar extends React.Component {
    render(){
        return(
        <header>
            <nav id='nav-bar'>
              <div className="nav">
                <img src={logoImg} alt="logo-img" />
                <h1>Space Flight News</h1>
              </div>
    
              <ul className='nav-list'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Trending</a></li>
                <li><a href="/">Categories</a></li>
                <li><a href="/">About Us</a></li>
              </ul>
            </nav>
        </header>    
        );
    }
}

//Antiga forma de exportar uma class, não é muito utilizada atualmente. 
//export default Navbar;