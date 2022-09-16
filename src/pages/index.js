import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import {container} from '../assets/css/container.module.css'

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

const Head = () => <title>Home</title>

export default index