import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav className="bottom-nav">
        <Link to='/about'>About</Link>
        <Link to='/help'>Help</Link>
        <Link to='/privacy'>Privacy</Link>
        <Link to='/terms'>Terms</Link>
      </nav>
    </>
  )
}

export default Navigation;