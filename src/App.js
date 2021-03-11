import { useState, useEffect } from 'react';
import { client } from './client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// unique id
import { uuid } from 'uuidv4';
// import my fontawesome library
import './fontawesome';
import Navbar from './Components/Navbar';
import HeaderImg from './Components/HeaderImg';
import Blogger from './Components/Blogger';
import BlogPosts from './Components/BlogPosts';
import BlogPost from './Components/BlogPost';
import Footer from './Components/Footer';
import {Route, Switch } from 'react-router-dom';

const App = () => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [blogger, setBlogger] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'blogPost' })
            .then((response) => {
                console.log(response.items);
                console.log(response)
                setBlogPosts(response.items);
            })
            .catch(console.error)
    }, []);

    useEffect(() => {
        client.getEntries({ content_type: 'author' })
            .then((response) => {
                console.log(response.items);
                setBlogger(response.items);
            })
            .catch(console.error)
    }, []);

    return (
    <>
        <Navbar />
        <HeaderImg />
        <Switch>
        <Route exact path='/'>
        <main className="container mt-5">
            <h2>Here we are - the blogger</h2>
            <div className="row">
            {blogger && blogger.map(author => {
                return (
                    <Blogger key={uuid()} author={author}/>
                    )
                })
            }
            </div>
            
            <h2 className="mt-5">The latest articles</h2>
            <div className="row">
                <BlogPosts posts={blogPosts} />
                </div>
        </main>
        </Route>
        <Route exact path='/:id'>
            <BlogPost />
        </Route>
        </Switch>
        <Footer />
    </>
    );
}

export default App;
