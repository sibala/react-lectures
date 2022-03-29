import React from 'react'

function Post({post}) {
  return (
    <article>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
    </article>
  )
}

export default Post