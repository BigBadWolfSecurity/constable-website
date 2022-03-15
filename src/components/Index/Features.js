import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby'

const getImages = graphql`
{
    githubcheck: file(relativePath: {eq: "github-check.jpg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
    accessrule: file(relativePath: {eq: "access-rule.jpg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
    accesssummary: file(relativePath: {eq: "access-summary.jpg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
    allresources: file(relativePath: {eq: "all-resources.jpg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_tracedSVG
            }
        }
    }
}`

const Features = (props) => {
    const data = useStaticQuery(getImages)
    const servicedata = [

        <div className="display-table-cell">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-lg-7">
                        <div className="cta-info">
                            <h3>Understand Terraform changes before they go live in AWS</h3>
                            <p>Constable reads Terraform planfiles and evaluates their effects before they go live. Know if any changes allow unwanted IAM access, change critical resource properties, or allow inappropriate role transitions</p>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-5 cta-img">
                        <img
                            className="img-fluid"
                            src={data.githubcheck.childImageSharp.fluid.src}
                            alt="mac-pro"
                        />
                    </div>
                </div>
            </div>
        </div>,
         <div className="display-table-cell">
         <div className="container">
             <div className="row">
             <div className="col-md-5 col-lg-5 cta-img">
                     <img
                         className="img-fluid"
                         src={data.accessrule.childImageSharp.fluid.src}
                         alt="mac-pro"
                     />
                 </div>
                 <div className="col-md-7 col-lg-7">
                     <div className="cta-info">
                         <h3>Protect your most important AWS resources</h3>
                         <p>Constable keeps a watch over your sensitive data and resources - S3 buckets, RDS databases, EC2 instances, or any other AWS services. Write straight-forward but powerful rules to be alerted for inappropriate IAM policy access, wrong role assumptions, or changed resource attributes. Rules can be checked both on Terraform plan - before they go live - and nightly to find changes outside of Terraform.</p>
                     </div>
                 </div>
                 
             </div>
         </div>
     </div>,
      <div className="display-table-cell">
      <div className="container">
          <div className="row">
              <div className="col-md-7 col-lg-7">
                  <div className="cta-info">
                      <h3>Never wonder who has access</h3>
                      <p>Constable understands and interprets every line of your IAM policy, and gives a digestible output of who can access what. Constable find and verify all role transitions, including between multiple accounts. Constable uses a mathematically proven formal IAM policy model that understands every IAM policy intricacy and then distills that into a understandable summary</p>
                  </div>
              </div>
              <div className="col-md-5 col-lg-5 cta-img">
                  <img
                      className="img-fluid"
                      src={data.accesssummary.childImageSharp.fluid.src}
                      alt="mac-pro"
                  />
              </div>
          </div>
      </div>
  </div>,
         <div className="display-table-cell">
         <div className="container">
             <div className="row">
             <div className="col-md-5 col-lg-5 cta-img">
                     <img
                         className="img-fluid"
                         src={data.allresources.childImageSharp.fluid.src}
                         alt="mac-pro"
                     />
                 </div>
                 <div className="col-md-7 col-lg-7">
                     <div className="cta-info">
                         <h3>A complete inventory of all your AWS resources</h3>
                         <p>All regions, all AZs, all accounts. Constable keeps track of every single resource and all their identifiers (name, id, tag, and ARN). Constable provides an easy-to-use interface to find anything in your AWS environment - search and filter to find the resources you are interested in.</p>
                     </div>
                 </div>
                 
             </div>
         </div>
     </div>,
    ]
    return (
        <section id="features" className="services ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h2>{props.sectionTitle}</h2>
                            <p>{props.sectionDescription}</p>
                        </div>
                    </div>
                </div>
                <div className="diplay-table">
                    {servicedata.map(e => (<div style={{marginBottom: '10vh'}}>{e}</div>))}
                </div>
            </div>
        </section>
    )
}

Features.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Features.defaultProps = {
    SectionbgTitle: "Features",
    sectionTitle: "Features",
    sectionDescription:
        "Rather than working with ambiguities when writing your IAM policies, Constable produces an easy to work with representation of your policies to help you better manage the intracacies of your entire infrastructure. ",


}

export default Features
