import React from "react";
// import {withRouter} from 'react-router-dom';
import "./Post.css";

const post = props => {
  console.log('props post: ', props);
  return (
    <article className="Post" onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className="Info">
        <div className="Author">{props.author}</div>
      </div>
    </article>
  );
};

// withRouter is the second option to pass the props: match, history, etc  
// down to the tree from posts to post, in our case
// export default withRouter(post);
export default post;
