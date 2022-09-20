import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import {about} from '../assets/css/container.module.css'

import SEO from '../components/SEO'

const index = () => {
    return (
        <Layout pageName='About'>
            <div className={`about ${about}`}>
                <p>Hello world</p>
                <StaticImage 
                    src="../images/sea.png" 
                    alt='A town next to a river' 
                />
            </div>
        </Layout>
    )
}

export const Head = () => <SEO title="About"/>

export default index