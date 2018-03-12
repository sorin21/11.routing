import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

// asyncComponent must be a function
const AsyncNewPost = asyncComponent(() => {
  // only import ./NewPost/NewPost when this const is used down
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  }

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              {/* Absolute path: example.com/new-post */}
              <li><NavLink
                to="/posts/"
                exact
                // we can have a different style to active link
                // activeClassName="my-active"
                activeStyle={{
                  color: '#fa923f',
                  textDecoration: 'underline'
                }}>Posts</NavLink>
              </li>
              <li><NavLink 
                to={{
                  // Relative path
                  // pathname: this.props.match.url + '/new-post',                  
                  pathname: '/new-post',                  
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* These are not good because reload the page when click on a new route */}
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        {/* <Route path="/" exact componet={Posts}  
            <Route path="/new-post"  componet={NewPost}  */}
        
        {/* Switch loads only one of the Rutes, the first one that matches
          a given set of routes */}
        <Switch>
          {/* Guards: check if user is authenticated */}
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
          <Route path="/posts" component={Posts} />
          {/* 404  NOT FOUND */}
          <Route render={() => <h1>Not Found</h1>} />
          {/* <Redirect from ="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;