import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from "../FullPost/FullPost";
import  './Posts.css';

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    console.log(this.props);
    axios.get("/posts")
      .then(response => {
        // console.log("response", response);
        // Fetch only the first 4 elements form server
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            // distribute the property of the post
            // that we get from the server
            ...post,
            author: "Kido"
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch(error => {
        console.log("Error", error);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    // this.setState({ selectedPostId: id })
    this.props.history.push({
      pathname: '/posts/' + id
    });
  };

  render() {

    let posts = <p style={{ textAlign: 'center', color: 'red' }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return(
          // <Link to={'/' + post.id} key={post.id} >
          // Pass all the props from here: match, history 
          // to the child Post, with {...this.props}
          // because in normal way props are not passed
          // down to the tree
          // You can pass a specific prop: match={this.props.match}
            <Post 
              key={post.id}
              title={post.title} 
              author={post.author} 
              clicked={() => this.postSelectedHandler(post.id)}
              {...this.props} />
          // </Link>
        );
      });
    }

    return(
      <div>
        {/* Output here the posts {posts} */}
        <section className="Posts">{posts}</section>
        <Route path={this.props.match.url + '/:id'} component={FullPost} />
      </div>
    );
  }
}

export default Posts;