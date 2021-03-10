import { useState, useEffect } from 'react';
import { client } from './client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import my fontawesome library
import './fontawesome';
import Navbar from './components/Navbar';
import HeaderImg from './components/HeaderImg';
import BlogPosts from './components/BlogPosts';

function App() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        client.getEntries({ content_type: 'blogPost' })
            .then((response) => {
                console.log(response.items);
                setBlogPosts(response.items);
            })
            .catch(console.error)
    }, []);
    console.log(process);

    return (
    <>
        <Navbar />
        <HeaderImg />
        <div className="App">
            <div className='container'>
                <header>
                    <div className='wrapper'>
                        <span className='logo'>React and Contentful</span>
                    </div>
                </header>
                <main>
                    <div className='wrapper'>
                        <BlogPosts posts={blogPosts} />
                    </div>
                </main>
            </div>
        </div>
    </>
    );
}

export default App;
