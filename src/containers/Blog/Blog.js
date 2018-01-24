import React, { Component } from "react";
// import axios from 'axios';
import {Route, NavLink, Switch} from 'react-router-dom';
import "./Blog.css";
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {

  render() {
    return <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts/" activeClassName="my-active" activeStyle={{ color: "#fa923f", textDecoration: "underline" }} exact>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to={{ // make a relative path
                    // pathname: this.props.match.url + '/new-post',
                    pathname: "/new-post", hash: "#submit", search: "?quick-submit=true" }}>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" render={() => <h1>Home</h1>} exact /> */}
      <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts" component={Posts} />
        </Switch>
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>;
  }
}

export default Blog;
