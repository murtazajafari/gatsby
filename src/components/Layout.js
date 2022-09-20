import React from 'react'
import { Link } from 'gatsby'
import Header from './Header'

const Layout = ({children, pageName}) => {
    return (
        <>  

            <Header pageName={pageName} />
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
            </ul>
            {children}
        </>
    )
}
export default Layout