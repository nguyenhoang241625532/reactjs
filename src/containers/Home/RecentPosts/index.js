
import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../../../components/UI/Card';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import blogPost from '../../../data/blog.json';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
/**
*@author
** @function RecentPosts
**/

const RecentPosts = (props) => {
  const [posts, setPosts] = useState([
        
  ]);
  
  
  
  useEffect(() => {
      const posts = blogPost.data;
      setPosts(posts);
  }, [posts]);

  return(
  <div className="homepost">
      <Card >

         {
        
             posts.map(post => {
            return (
            <NavLink key={post.id} to={`/post/${post.slug}`}>
            
             <div class="listpost-1" >
             
             <img class="post-image-link" width="220" height="160" src={require('../../../blogPostImages/' + post.blogImage)} alt="Post Image" />
             <div class="listtext">
<div class="listbtn-category">
Công Nghệ
</div>
<div class="timeago">
  <span>1 tuần
  <p class="time-ago">ago</p> </span>
</div>
    <h1 class="author">{post.blogTitle}</h1>
    <div class="tite">{post.blogTile}</div>
              </div>
              </div>
                 
            </NavLink>
                                
                );
             })
         }
    
            

    </Card>
     
     </div>
      
   )

 }

export default RecentPosts