import { Link, graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'

import SEO from '../../components/SEO'

const  blog = ({data}) => {
    return (
        <Layout pageName={'Blog'}>
            <p>Blogs come here</p>

            {
                data.allMdx.nodes.map(node => (
                    <div key={node.id}>
                        <h3><Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></h3> 
                        <p>Posted: {node.frontmatter.date}</p>
                    </div>
                ))
            }
        </Layout>
    )
}

export const query = graphql`

    query  {
        allMdx(sort: {order: ASC, fields: frontmatter___title}) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
                    slug
                }
                id
            }
        }
    }
  
`

export const Head = () => <SEO title="Blog"/>
export default blog