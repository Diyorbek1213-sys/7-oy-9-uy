import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { close } from '../lib/slices/dataSlice';

const Modale = () => {
  const { selectedPost } = useSelector(state => state.posts)
  console.log(selectedPost)
  const dispatch = useDispatch()

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    modal: {
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      width: "300px",
      textAlign: "center"
    },
    button: {
      marginTop: "10px",
      padding: "5px 10px",
      backgroundColor: "red",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {
          selectedPost.title && <h3 className='text-gray-600 mb-3'><b className='text-amber-800'>Title: </b>{selectedPost.title}</h3>
        }
        {
          selectedPost.body && <p className='text-gray-600 mb-3'><b className='text-amber-800'>Body: </b>{selectedPost.body}</p>
        }
        {
          selectedPost.userId && <h3 className='text-gray-600'><b className='text-amber-800'>UserID:</b> {selectedPost.userId}</h3>
        }
        <button onClick={() => dispatch(close(null))} style={styles.button}>Yopish</button>
      </div>
    </div>
  )
}

export default Modale