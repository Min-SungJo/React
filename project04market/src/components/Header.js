import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
const Header = () => {

    const linkStyle ={
        textDecoration : 'none',
        color : 'green'
    }
    const headerStyle={
      display : 'flex'
    }
  return (
    <div style={headerStyle}>
        <div><Link to = './' style={linkStyle}>Campus K Market</Link></div>
        <div><Link to = './join'>회원가입</Link></div>
    </div>

  )
}

export default Header