import React, {useState, useEffect} from 'react'
import Post from './Post';

function PostList() {
    const [posts, setPosts] = useState([]);

    // Runs when componentDidMount, componentDidUpdate, componentWillUnmount
    useEffect( async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
            
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }, []) // An empty array, ensures that useEffect only runs when componentDidMount

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>) 
            }
        </div>
    )
}

export default PostList