import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <header>
          <Navbar>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">
                        <img src="https://static.vecteezy.com/system/resources/previews/000/117/815/original/free-sport-ball-icons-vector.jpg" alt="" height="40px" width="60px"></img>
                    </Nav.Link>
                </Nav.Item>
                
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search our blog" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form> 
          </Navbar> 
          <div className="headerpic">
            <Image className="bgimg" src="https://www.sportsindiashow.com/wp-content/uploads/2020/03/shutterstock_599738306.jpg" alt="" fluid />
            <h1 className="centered">Welcome to our sports blog</h1>
          </div> 
        </header>
    )
}

export default Header
