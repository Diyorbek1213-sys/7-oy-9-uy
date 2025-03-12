import React from 'react'
import { useSelector } from 'react-redux'
import PostList from './PostList'

const Home = () => {

  return (
    <div>
      <div className='p-10 border-b border-gray-300 flex justify-center items-center'>
        <h1 className='font-bold text-5xl opacity-50'>Posts</h1>
      </div>

      <div className='container mx-auto'>
        <PostList />
      </div>
    </div>
  )
}

export default Home