import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from './BlogPost';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {useState} from 'react';



const PostPreview = ({post}) => {
    const { authorReference, datePublished, postContent, postImage, postTitle } = post.fields;
    const [read, setRead] = useState(false);


    function onClick() {
        setRead(true);
    }
    
    return (
        <Switch>
            <Route exact path='/'>
            <Col>
                <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={`https:${postImage.fields.file.url}`} />
                        <Card.Body>
                            <Card.Title>{postTitle}</Card.Title>
                            <Card.Text>
                                An article by {authorReference.fields.authorName}<br></br>
                                Published on {datePublished}
                            </Card.Text>
                            <Button href={`/${postTitle}`} variant="primary">Read full article</Button>
                        </Card.Body>
                </Card>
            </Col>
            </Route>
            <Route path='/:postTitle'>
                {read === true && <BlogPost content={post}/>}
            </Route>
        </Switch>
        
    )
}

export default PostPreview
