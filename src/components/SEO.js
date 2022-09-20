import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const  SEO = ({title}) =>  {
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
        <title>{title} | {data.site.siteMetadata.title}</title>
    )
}

export default SEO