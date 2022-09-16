import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import {container} from '../assets/css/container.module.css'

const index = () => {
    return (
        <Layout pageName='About'>
            <div className={`about ${container}`}>
                <p>Hello world</p>
                <StaticImage 
                    src="../images/sea.png" 
                    alt='A town next to a river' 
                />
            </div>
        </Layout>
    )
}

const Head = () => <title>About</title>

export default index