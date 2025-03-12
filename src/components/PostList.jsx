import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from './PostCard'
import Modale from './Modale'

const PostList = () => {
  const { posts } = useSelector(state => state.posts)
  const { selectedPost } = useSelector(state => state.posts)

  return (
    <div className='flex gap-7 flex-wrap justify-between mt-15'>
      {
        posts && posts.map(item => {
          return <PostCard item={item} key={item.id} />
        })
      }
      {
        selectedPost && <Modale />
      }
    </div>
  )
}

export default PostList