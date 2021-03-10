import {Switch, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { client } from './client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Authors from './Components/Authors';
import Footer from './Components/Footer';
// import my fontawesome library
import './fontawesome';
import Navbar from './Components/Navbar';
import BlogPosts from './Components/BlogPosts';
import BlogPost from './Components/BlogPost';
import BlogPosts2 from './Components/BlogPosts2';
import PostPreview from './Components/PostPreview';


function App() {
    const [blogPosts, setBlogPosts] = useState();


    useEffect(() => {
        client.getEntries({ content_type: 'blogPost' })
            .then((response) => {
                setBlogPosts(response.items);
            })
            .catch(console.error)
    }, []);

console.log(blogPosts);
    return (

        <>
            <Navbar />
            <Header />
            <Authors />
            <Switch>
                <Route exact path='/'>
                    <BlogPosts posts={blogPosts} />
                </Route>
                <Route exact path='/:id'>
                    <BlogPosts2 posts={blogPosts}/>
                </Route>
            </Switch>
           
            <Footer />
        </>
                        
                 

    );
}

export default App;
