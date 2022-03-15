import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'

const getAboutImages = graphql`
{
    image1: file(relativePath: {eq: "square-dark.jpg"}) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
      }
    }
}
`
const About = () => {
    const data = useStaticQuery(getAboutImages)
    return (
        <div id="about" className="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title text-center">
                            <h2>About Us</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-9">
                        <div className="about-text">
                            <h3>IAM Policies are too hard to get right</h3>
                            <p>Constable was born out of the realization that writing IAM policy becomes incredibly tedious and difficult as your AWS scale grows. Referencing resources and principals using string matching is extremely error-prone. </p>

                            <p>Co-founders Karl MacMillan and Nick Stocchero have put their 30+ years of security and expertise with AWS to develop a formal IAM policy model along with an easy to use interface and tooling to help you tame even the most complex and complicated IAM policies.</p>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <img src={data.image1.childImageSharp.fluid.src} alt="Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;