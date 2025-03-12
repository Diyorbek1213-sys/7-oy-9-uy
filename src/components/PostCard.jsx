import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePost, selected } from '../lib/slices/dataSlice'
import axios from 'axios'

const PostCard = ({ item }) => {
  const dispatch = useDispatch()
  const { selectedPost } = useSelector(state => state.posts)


  const handleRemove = async (id) => {
    try {
      const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      if (res.status === 200) {
        dispatch(removePost(id))
        alert('The post has been successfully deleted!')
      } else {
        alert(`There is a problem in deleting!`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='border p-5 rounded-2xl shadow-2xl border-gray-100 w-[250px] cursor-pointer hover:bg-amber-50 transition-all hover:shadow'>
      <div>
        <h3 className='text-gray-600'><b className='text-amber-800'>Title:</b> {item.title}</h3>
        <h3 className='text-gray-600'><b className='text-amber-800'>UserID:</b> {item.userId}</h3>
        <div className='flex gap-3'>
        <button onClick={() => handleRemove(item.id)} className='bg-amber-600 text-gray-100 hover:bg-amber-900 transition-all cursor-pointer mt-2 p-2 rounded-md'>Delete</button>
        <button onClick={() => dispatch(selected(item))} className='bg-amber-600 text-gray-100 hover:bg-amber-900 transition-all cursor-pointer mt-2 p-2 rounded-md'>Details</button>
        </div>
      </div>
    </div>
  )
}

export default PostCard