import React from 'react'
import Child from './Child';

const Parent = ({allUsers}) => {
  return (
    <div>
        <h2>Hello From Parent Component</h2>
        <hr/>
        <Child/>
        {/* <Child allUsers={allUsers}/> */}
    </div>
  )
}


export default Parent;