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


function App() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'blogPost' })
            .then((response) => {
                console.log(response.items);
                console.log(response)
                setBlogPosts(response.items);
            })
            .catch(console.error)
    }, []);


    return (

        <div>
            <Navbar />
            <Header />
            <Authors />
            <BlogPosts posts={blogPosts} />
            <Footer />
        </div>
                        
                 

    );
}

export default App;
