import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Authors = () => {
    return (
        <div>
            <h2>Who is blogging?</h2>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <img src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="" height="30px" width="30px" />
                Said - "I want to ride my bicycle"</ListGroup.Item>
                <ListGroup.Item>
                    <img src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="" height="30px" width="30px" />
                Michael - "I'm gonna run to you"</ListGroup.Item>
                <ListGroup.Item>
                    <img src="https://immedilet-invest.com/wp-content/uploads/2016/01/user-placeholder.jpg" alt="" height="30px" width="30px" />
                Julia - "I only do sports so I don't die soon"</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Authors
