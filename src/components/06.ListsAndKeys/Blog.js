import React from 'react'
import Post from './Post';

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to the React course'},
    {id: 2, title: 'Create React app', content: 'You can create a React app with npx'}
];

function Blog() {
  return (
    <div>
        <h1>Blog</h1>

        {/* Version 1 - Bad way. Using the array index as key list is error prone  */}
        {/* posts.map((post, index) => {
            return (
                <article key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </article>
            )
        }) */}
      

        {/* Version 2 - Correct way. Use either the natural ID (Examle an ID from a DB, its alwase unique). OR generate a unqiue ID with packages such as uuid */}
        {/* posts.map((post) => {
            return (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </article>
            )
        }) */}

        {/* Version 3 - Refactor to child component Post.js */}
        {
            posts.map((post) => <Post key={post.id} post={post} />)
        }
    </div>
  )
}

export default Blog