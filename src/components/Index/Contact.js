import React from 'react'
import PropTypes from "prop-types";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";

const Contact = (props) => {
    const handleForm = e => {
        // noop
    }
    return (
        <section id="contact" className="contact-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">
                            <h2>{props.sectionTitle}</h2>
                            <p>{props.sectionDescription}</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="address-area">
                            <div className="email">
                                <i className="fa fa-envelope"></i>
                                <h4>{props.EmailTitle}</h4>
                                <p>{props.Email}</p>
                            </div>
                            <div className="phone">
                                <i className="fa fa-phone"></i>
                                <h4>{props.PhoneTitle}</h4>
                                <p>{props.Phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-8">
                        <div className="contact-form">
                            <ValidationForm
                                id="contactForm"
                                onSubmit={handleForm}
                            >
                                <form
                                    action="https://formspree.io/f/mlezlgvn"
                                    method="POST"
                                    id="contactform"
                                >
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <TextInput
                                                    name="name"
                                                    id="name"
                                                    required
                                                    successMessage=""
                                                    errorMessage="Please enter your name"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    autoComplete="off"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <TextInput
                                                    name="email"
                                                    id="email"
                                                    type="email"
                                                    required
                                                    successMessage=""
                                                    errorMessage="Please enter your email address"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    autoComplete="off"
                                                />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <TextInput
                                                    name="subject"
                                                    id="subject"
                                                    type="text"
                                                    successMessage=""
                                                    errorMessage="Please enter your email subject"
                                                    className="form-control"
                                                    placeholder="Subject"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <TextInput
                                                    name="number"
                                                    id="number"
                                                    type="text"
                                                    successMessage=""
                                                    errorMessage="Please enter your phone number"
                                                    className="form-control"
                                                    placeholder="Phone"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <TextInput
                                                    name="message"
                                                    id="description"
                                                    multiline
                                                    placeholder="Your message"
                                                    className="form-control"
                                                    required
                                                    successMessage=""
                                                    errorMessage="Please write your message"
                                                    rows="5"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="center-wrap text-center">
                                        <div className="button">
                                            <button type="submit">Submit <i className="fa fa-long-arrow-right"></i> </button>
                                            <div className="mask"></div>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                </form>
                            </ValidationForm>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

//Props Types
Contact.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    AddTitle: PropTypes.string,
    Address: PropTypes.string,
    EmailTitle: PropTypes.string,
    Email: PropTypes.string,
    PhoneTitle: PropTypes.string,
    Phone: PropTypes.string,
}

//Default Props
Contact.defaultProps = {
    SectionbgTitle: "Contact",
    sectionTitle: "Contact Us",
    sectionDescription: "Speak to the contable team! Fill out this short form and we will get back to you.",
    AddTitle: "Address",
    Address: "2750 Quadra Street Victoria, Canada.",
    EmailTitle: "Email",
    Email: "info@constableapp.com",
    PhoneTitle: "Phone",
    Phone: "+1-630-335-6823",
}

export default Contact
