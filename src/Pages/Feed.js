import React from 'react'
import FeedContent from '../components/Feed/FeedContent'
import MessageBox from '../components/MessageBox.js/MessageBox';
import Layout from '../Layout';
// import MessageBox from './components/MessageBox.js/MessageBox';

const Feed = () => {
    return (
        <Layout>
            <FeedContent />
            <MessageBox />
        </Layout>
    )
}

export default Feed
