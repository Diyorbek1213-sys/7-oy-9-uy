import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PostCard from './PostCard'
import Modale from './Modale'

const PostList = () => {
  const { posts } = useSelector(state => state.posts)
  const [searchValue, setSearchValue] = useState('')
  const { selectedPost } = useSelector(state => state.posts)

  const filteredPosts = posts && posts.filter(post =>
    post.title.toLowerCase().trim().includes(searchValue.toLowerCase().trim())
  );

  return (
    <div>
      <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='bg-amber-200 p-4 w-102 rounded-md text-amber-700 mt-10' type="search" placeholder='Search by title...' />
      <div className='flex gap-7 flex-wrap justify-between mt-15'>
        {
          filteredPosts && filteredPosts.map(item => {
            return <PostCard item={item} key={item.id} />
          })
        }
        {
          selectedPost && <Modale />
        }
      </div>
    </div>
  )
}

export default PostList