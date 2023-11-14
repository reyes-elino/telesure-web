import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        
    <div className="footer">
        <div className="py-4 px-4 mx-0 mt-8 lg:mx-8">
            <div className="grid justify-content-between">
                <div className="col-12 md:col-2">
                    <Link href="/" className="no-underline flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                        <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>
                        <span className="font-medium text-3xl text-900">ReactJs</span>
                    </Link>
                </div>

                <div className="col-12 md:col-10 lg:col-7">
                    <div className="grid text-center md:text-left">
                        <div className="col-12 md:col-3">
                            <h4 className="footerLinkHeader">Company</h4>
                            <a href="/" className="footerLink">About Us</a>
                            <a href="/" className="footerLink">News</a>
                            <a href="/" className="footerLink">Investor Relations</a>
                            <a href="/" className="footerLink">Careers</a>
                            <a href="/" className="footerLink">Media Kit</a>
                        </div>

                        <div className="col-12 md:col-3 mt-4 md:mt-0">
                            <h4 className="footerLinkHeader">Resources</h4>
                            <a href="/" className="footerLink">Get Started</a>
                            <a href="/" className="footerLink">Learn</a>
                            <a href="/" className="footerLink">Case Studies</a>
                        </div>

                        <div className="col-12 md:col-3 mt-4 md:mt-0">
                            <h4 className="footerLinkHeader">Community</h4>
                            <a href="/" className="footerLink">Discord</a>
                            <a href="/" className="footerLink">
                                Events
                            </a>
                            <a href="/" className="footerLink">FAQ</a>
                            <a href="/" className="footerLink">Blog</a>
                        </div>

                        <div className="col-12 md:col-3 mt-4 md:mt-0">
                            <h4 className="footerLinkHeader">Legal</h4>
                            <a href="/" className="footerLink">Brand Policy</a>
                            <a href="/" className="footerLink">Privacy Policy</a>
                            <a href="/" className="footerLink">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer