import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'


const BlogPost = ({data, children}) =>  {
    const image = getImage(data.mdx.frontmatter.hero_image)
    return (
        <Layout pageName="Single blog">
            <div style={{width: '400px'}}>
                
                <h3>{data.mdx.frontmatter.title}</h3>
                <p>{data.mdx.frontmatter.date}</p>
                <GatsbyImage
                    image={image}
                    alt={data.mdx.frontmatter.hero_image_alt}
                    width={200}
                />
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
                date(formatString: "MMMM DD, YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
            }
        }
    }
  
`

export const Head = ({data}) => <SEO title={data.mdx.frontmatter.title}></SEO>


export default BlogPost

