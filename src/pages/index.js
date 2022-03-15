import React from "react"
import Layout from '../components/App/Layout'
import SEO from "../components/App/seo"
import BannerSingle from "../components/Index/BannerSingle"
import Features from "../components/Index/Features"
import About from "../components/Index/About"
import Contact from "../components/Index/Contact"

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <BannerSingle />
        <Features />
        <About />
        <Contact />
    </Layout>
)

export default IndexPage
