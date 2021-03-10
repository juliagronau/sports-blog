import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Switch, Route} from 'react-router-dom';

const Authors = () => {
    return (
        <Switch>
            <Route exact path='/'>
        <div className="authorbox">
            <h3>Who is blogging?</h3>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <img className="authorpics" src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="" />
                Said - "I want to ride my bicycle"</ListGroup.Item>
                <ListGroup.Item>
                    <img className="authorpics" src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="" />
                Michael - "I'm gonna run to you"</ListGroup.Item>
                <ListGroup.Item>
                    <img className="authorpics" src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="" />
                Julia - "I only do sports so I don't die soon"</ListGroup.Item>
            </ListGroup>
        </div>
        </Route>
        </Switch>
    )
}

export default Authors
