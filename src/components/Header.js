import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'


const Header = ({pageName}) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            siteBuildMetadata {
                buildTime
            }
        }
    `)
    return (
        <header>
            <h1>Page: {pageName}</h1> 
        </header>
    )
}

export default Header