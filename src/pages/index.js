import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import {container} from '../assets/css/container.module.css'

import SEO from '../components/SEO'

const index = () => {
    return (
        <Layout pageName='Home'>
        <div className={`home ${container}`}>
            <p>Hello world</p>
            <StaticImage 
                src="https://cdn.pixabay.com/photo/2022/08/14/13/01/top-7385857_1280.jpg" 
                alt='Mountain' 
            />
        </div>
    </Layout>
    )
}

export const Head = () => <SEO title="Home"/>

export default index