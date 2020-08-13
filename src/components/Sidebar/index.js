import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import blogPost from '../../data/blog.json';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([
        
    ]);
    
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div class="sidebar section" id="social-widget" name="Social Widget"><div class="widget LinkList" data-version="2" id="LinkList75">
                <div className="cardHeader">
                    <span>Mạng xã hội</span>
                </div>
<div class="widget-content">
<ul class="social-counter social social-color social-text">
<li class="facebook"><a href="https://www.facebook.com/hoangkenlynguyen1652" className="title" title="facebook"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
</li>
<li class="twitter">
<a href="#" className="title" title="facebook"><FontAwesomeIcon icon={['fab', 'twitter']} title="twitter"/></a>
</li>
<li class="instagram">
<a href="#" className="title" title="facebook"><FontAwesomeIcon icon={['fab', 'instagram-square']} title="instagram"/></a>
</li>
<li class="youtube"><a href="https://www.youtube.com/channel/UCSrPbqepzks-nhsQno3z6Pg" className="title" title="facebook"><FontAwesomeIcon icon={['fab', 'youtube']} title="youtube"/></a>

</li>
</ul>
</div>
</div></div>
</Card>


<Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
 <div className="cardHeader">
      <span>Bài viết mới</span>
              </div>  
         {
        
             posts.map(post => {
            return (
            <NavLink key={post.id} to={`/post/${post.slug}`}>
             <div className="recentPost">
              <h3>{post.blogTitle}</h3>
              <span>{post.postedOn}</span>
                 </div>
            </NavLink>
                                
                );
             })
         }
    
            

    </Card>
    <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
 <div className="cardHeader">
      <span>Bài  viết nổi bật</span>
              </div>  
         {
        
             posts.map(post => {
            return (
            <NavLink key={post.id} to={`/post/${post.slug}`}>
            
             <div class="post-content" >
             <img class="post-image-link" width="100" height="100" src={require('../../img/' + post.Imagelog)} alt="Post Image" />
              <div class="post-title">{post.blogTitle}</div>
              </div>
                 
            </NavLink>
                                
                );
             })
         }
    
            

    </Card>
      </div>
    
   )

 }

export default Sidebar