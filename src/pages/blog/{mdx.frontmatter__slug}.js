import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const BlogPost = ({data, children}) =>  {
    return (
        <Layout pageName="Single blog">
            <div>
                <h3>{data.mdx.frontmatter.title}</h3>
                <p><strong>{data.mdx.frontmatter.date}</strong></p>
                {children}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
            }
        }
    }
  
`

export const Head = () => <SEO title="Hello"></SEO>


export default BlogPost