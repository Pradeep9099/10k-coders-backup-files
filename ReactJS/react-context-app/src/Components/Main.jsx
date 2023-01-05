import React from 'react'
import Parent from './Parent';

const Main = ({allUsers}) => {
  return (
    <div>
        <h2> Hello From  Main</h2>
        <hr/>
        <Parent allUsers={allUsers}/>
    </div>
  )
}


export default Main;