import { useState, useEffect } from 'react';
import { client } from './client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
<<<<<<< HEAD
// unique id
import { uuid } from 'uuidv4';
// import my fontawesome library
import './fontawesome';
import Navbar from './Components/Navbar';
import HeaderImg from './Components/HeaderImg';
import Blogger from './Components/Blogger';
import BlogPosts from './Components/BlogPosts';
import Footer from './Components/Footer';
=======
import Header from './Components/Header';
import Authors from './Components/Authors';
import Footer from './Components/Footer';
// import my fontawesome library
import './fontawesome';
import Navbar from './Components/Navbar';
import BlogPosts from './Components/BlogPosts';

>>>>>>> main

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

<<<<<<< HEAD
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
        <Footer />
    </>
=======

    return (

        <div>
            <Navbar />
            <Header />
            <Authors />
            <BlogPosts posts={blogPosts} />
            <Footer />
        </div>
                        
                 

>>>>>>> main
    );
}

export default App;
