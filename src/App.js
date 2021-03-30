import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import my fontawesome library
import "./fontawesome";
import axios from "axios";
import Navbar from "./Components/Navbar";
import HeaderImg from "./Components/HeaderImg";
import Blogger from "./Components/Blogger";
import BlogPostFull from "./Components/BlogPostFull";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import Spinner from "./Components/Spinner";

const App = () => {
  const [allPosts, setAllPosts] = useState();
  const [blogger, setBlogger] = useState([]);

  useEffect(() => {
    axios
      .get("https://blog-project-api-jms.herokuapp.com/posts")
      .then(response => {
        setAllPosts(response.data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    axios
      .get("https://blog-project-api-jms.herokuapp.com/authors")
      .then(response => {
        setBlogger(response.data);
      })
      .catch(console.error);
  }, []);

  return allPosts ? (
    <>
      <Navbar />
      <HeaderImg />
      <main className="container">
        <Switch>
          <Route exact path="/">
            <h2 className="mt-5">Here we are - the blogger</h2>
            <div className="row">
              {blogger &&
                blogger.map(blogger => (
                  <Blogger key={blogger.id} blogger={blogger} />
                ))}
            </div>
            <h2 className="row mt-5">The latest articles</h2>
            <div className="row">
              <Search posts={allPosts} />
            </div>
          </Route>
          <Route path="/:blogID">
            <BlogPostFull />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  ) : <Spinner />;
};

export default App;
