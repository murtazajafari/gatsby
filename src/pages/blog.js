import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

import SEO from '../components/SEO'

const  blog = ({data}) => {
    return (
        <Layout pageName={'Blog'}>
            <p>Blogs come here</p>

            {
                data.allFile.nodes.map((node, idx) => (
                    <li key={idx}>{node.name}</li>
                ))
            }
        </Layout>
    )
}

export const query = graphql`

    query {
        allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
            nodes {
                name
            }
        }
    }
`

export const Head = () => <SEO title="Blog"/>
export default blog