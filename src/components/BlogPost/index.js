import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

    const [post, setPost] = useState({
        id: "" ,
        blogCategory: "" ,
        blogTitle : "" ,
        blogTile : "" ,
        postedOn: "" ,
        author: "" ,
        Image:"",
        Imagelog:"",
        blogImage: "",
        blogText: ""
    });
    const [slug, setSlug] = useState('');
    
    
    useEffect(() => {
        const slug = props.match.params.slug;
        const post = blogPost.data.find(post => post.slug == slug);
        setPost(post);
        setSlug(slug)
    }, [post, props.match.params.slug]);

    if(post.blogImage == "") return null;
    if(post.Image =="") return null;
    if(post.ImageLog =="") return null;

  return(
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="blogCategory">{post.blogCategory}</span>
                </div>
                <div className="postImageContainer">
                    <img width="640" height="384" src={require('../../blogPostImages/' + post.blogImage)} alt="Post Image" />
                    
                </div>

                <div className="postContent">
                
  <p>{post.blogText}</p>
  <div className="postImageContainer">
                    <img width="640" height="384" src={require('../../img/' + post.Image)} alt="Post Image" />
                    
                </div>

                </div>
                
            </Card>
        </div>
   )

 }

export default BlogPost