import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';

import blogData from '../../data/blog.json';
import Layout from '../../components/Layout';





const Home  = props => {
    return (
        <div>
    
        <Layout>
        <RecentPosts style={{width: '70%'}}/>
        
        </Layout>
        </div>
    );
}

export default Home