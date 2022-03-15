import React from 'react'
import { Link } from 'gatsby'

const TopHeader = () => {
    return (
        <div id="home" className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-8">
                        <div className="address-bar">
                            <ul className="list-inline">
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-envelope"></i> info@constableapp.com
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <i className="fa fa-volume-control-phone"></i> +1-630-335-6823
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-5 col-md-4">
                        <div className="social-icons">
                            <ul className="list-inline">
                                <li>
                                    <Link to="https://www.linkedin.com/company/constable" target="_blank">
                                        <i className="fa fa-linkedin"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
