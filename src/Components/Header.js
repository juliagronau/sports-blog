import React from 'react'
import Image from 'react-bootstrap/Image';


const Header = () => {
    return (
        <header>
          <div className="headerpic">
            <Image className="bgimg" src="https://www.sportsindiashow.com/wp-content/uploads/2020/03/shutterstock_599738306.jpg" alt="" fluid />
            <h1 className="centered">Welcome to our sports blog</h1>
          </div> 
        </header>
    )
}

export default Header
