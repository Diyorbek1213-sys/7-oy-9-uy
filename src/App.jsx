import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from './lib/slices/dataSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getPostsData = async () => {
      try {
        const res = await axios('https://jsonplaceholder.typicode.com/posts')
        if (res) {
          dispatch(getPosts(res.data))
        }
      } catch (error) {
        console.log(error)
      }
    }
    getPostsData()
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App