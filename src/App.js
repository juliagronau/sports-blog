import { useState, useEffect } from 'react';
import { client } from './client';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// unique id
import { uuid } from 'uuidv4';
// import my fontawesome library
import './fontawesome';
import Navbar from './Components/Navbar';
import HeaderImg from './Components/HeaderImg';
import Blogger from './Components/Blogger';
import BlogPostsAll from './Components/BlogPostsAll';
import BlogPostFull from './Components/BlogPostFull';
import Footer from './Components/Footer';

const App = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [blogger, setBlogger] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'blogPost' })
            .then((response) => {
                setAllPosts(response.items);
            })
            .catch(console.error)
    }, []);

    useEffect(() => {
        client.getEntries({ content_type: 'author' })
            .then((response) => {
                setBlogger(response.items);
            })
            .catch(console.error)
    }, []);

    return (
    <>
        <Navbar />
        <HeaderImg />
        <main className="container mt-5">
        <Switch>
            <Route exact path="/">
                <h2>Here we are - the blogger</h2>
                <div className="row">
                {blogger && blogger.map(author => (
                    <Blogger key={uuid()} author={author}/>
                    ))
                }
                </div>
                <h2 className="mt-5">The latest articles</h2>
                <div className="row">
                    <BlogPostsAll posts={allPosts} />
                </div>
            </Route>
            <Route path="/:blogID">
                <BlogPostFull posts={allPosts}/>
            </Route>
        </Switch>
        </main>
        <Footer />
    </>
    );
}

export default App;
