import React, {useState, useEffect} from 'react';
import "./Nav.css";

function Nav() {
    const [show,handleShow]=useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show &&"nav__black"}`}>
            <img
            className="nav_logo"
             src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
             alt="Netflix Logo"
              />
              <img 
              className="nav_avatar"
              src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0.png?h=eba99c47b726e04e1228d83852b69211"
               alt="Profile Logo" />
            
        </div>
    )
}

export default Nav
