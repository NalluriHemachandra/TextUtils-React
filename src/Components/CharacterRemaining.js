import React from 'react'
import { useSelector } from 'react-redux'

export default function CharacterRemaining(props) {
   const count =  useSelector(state => state.count)
  return (
    <div className='container my-3'>Characters remaining: {count}</div>
  )
}
