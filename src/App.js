import { useState, useEffect } from 'react';
import { client } from './client';
import BlogPosts from './Components/BlogPosts';
import './App.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Authors from './Components/Authors';
import Footer from './Components/Footer';

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
            <Header />
            <Authors />
            <BlogPosts posts={blogPosts} />
            <Footer />
        </div>
                        
                 
    );
}

export default App;
