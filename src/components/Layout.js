import React from 'react'
import { Link } from 'gatsby'

const Layout = ({children, pageName}) => {
    return (
        <>  
            <h2>Welcome to {pageName} page</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            {children}
        </>
    )
}
export default Layout