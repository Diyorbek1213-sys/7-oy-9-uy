import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getPosts } from './lib/slices/dataSlice'

const App = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getPostsData = async () => {
      setIsLoading(true)
      try {
        const res = await axios('https://jsonplaceholder.typicode.com/posts')
        if (res) {
          dispatch(getPosts(res.data))
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    getPostsData()
  }, [])

  return (
    <div className='flex justify-center items-center'>
      {
        isLoading ? <h3 className='mt-96 text-2xl'>Loading...</h3> : <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      }
    </div>
  )
}

export default App