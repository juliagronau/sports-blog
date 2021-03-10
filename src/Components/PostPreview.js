import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlogPost from './BlogPost';
import { Link } from "react-router-dom";
import {useState} from 'react';



const PostPreview = ({post}) => {
    console.log("Julias LOG", post);
    const { authorReference, datePublished, postImage, postTitle } = post.fields;
    // console.log(post.fields);
    return (
            <Col>
                <Card key={post.sys.id} post={post} style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={`https:${postImage.fields.file.url}`} />
                        <Card.Body>
                            <Card.Title>{postTitle}</Card.Title>
                            <Card.Text>
                                An article by {authorReference.fields.authorName}<br></br>
                                Published on {datePublished}
                            </Card.Text>
                            <Link to={`/${post.sys.id}`} className='btn btn-primary'>
                            Read full article
                            </Link>
                        </Card.Body>
                </Card>
            </Col>
     
        
    )
}

export default PostPreview
