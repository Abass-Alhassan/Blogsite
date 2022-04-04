import React from 'react'
import { useNavigate } from 'react-router-dom'
import withLayout from './withLayout'

function Home() {
    const navigate= useNavigate()
  return (
    <div>
      <div className='banner'>
          <h1>Welcome to my webpage</h1>
          <p>this webpage is about me.I love progrmming and coding.I also love to play football </p>
<div className='actions-wrap'>
    <button className='btn-outline' onClick={()=>navigate("./about")}>About Me</button>
    <button className='btn-contain' onClick={()=>navigate("./blog")}>Read Blogs</button>
</div>
      </div>
    </div>
  )
}

export default withLayout(Home)
