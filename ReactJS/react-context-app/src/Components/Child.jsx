import React from 'react'
import GrandChild from './GrandChild';

const Child = ({allUsers}) => {
  return (
    <div>
        <h2>Hello From Child Component</h2>
        <hr/>
        <GrandChild/>
    {/* <GrandChild allUsers={allUsers}/> */}
    </div>
  )
}


export default Child; 