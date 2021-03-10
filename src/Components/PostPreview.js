import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from './BlogPost';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {useState} from 'react';



const PostPreview = ({post}) => {
    const { authorReference, datePublished, postContent, postImage, postTitle } = post.fields;
    const [read, setRead] = useState(false);

    console.log('postTitle', postTitle)
    console.log('postContent', postContent)
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
                            <Link to={`/${postTitle}`}>
                            <Button variant="primary">Read full article</Button>
                            </Link>
                        </Card.Body>
                </Card>
            </Col>
            </Route>
            <Route path='/:postTitle'>
                <BlogPost post={post} />
            </Route>
        </Switch>
        
    )
}

export default PostPreview
