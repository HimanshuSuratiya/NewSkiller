import React from 'react'
import Images from "../../../Images/Image";
import "../LandingPage.css";

const Blogs = () => {
    return (
        <div className="aon-news-section-wrap sf-curve-pos">
            <div className="container">
                <div className="section-head">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <span className="aon-sub-title">News</span>
                            <h2 className="sf-title">Recent News Articles</h2>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do usmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="media-bg-animate">
                                <div className="aon-blog-section-1 shine-hover">
                                    <div className="aon-post-media shine-box">
                                        <a href="#!"><img src={Images.blogOne} alt="" /></a>
                                    </div>
                                    <div className="aon-post-meta">
                                        <ul>
                                            <li className="aon-post-category">Latest</li>
                                            <li className="aon-post-author"><a href="#!">By |<span>Admin</span></a> </li>
                                        </ul>
                                    </div>
                                    <div className="aon-post-info">
                                        <h4 className="aon-post-title"><a href="#!">Helping Companies in their Green.</a></h4>
                                        <div className="aon-post-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="media-bg-animate">
                                <div className="aon-blog-section-1 shine-hover">
                                    <div className="aon-post-media shine-box">
                                        <a href="#!"><img src={Images.blogTwo} alt="" /></a>
                                    </div>
                                    <div className="aon-post-meta">
                                        <ul>
                                            <li className="aon-post-category">Latest</li>
                                            <li className="aon-post-author"><a href="#!">By |<span>Admin</span></a> </li>
                                        </ul>
                                    </div>
                                    <div className="aon-post-info">
                                        <h4 className="aon-post-title"><a href="#!">There are two thing is very important.</a></h4>
                                        <div className="aon-post-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="media-bg-animate">
                                <div className="aon-blog-section-1  shine-hover">
                                    <div className="aon-post-media shine-box">
                                        <a href="#!"><img src={Images.blogThree} alt="" /></a>
                                    </div>
                                    <div className="aon-post-meta">
                                        <ul>
                                            <li className="aon-post-category">Latest</li>
                                            <li className="aon-post-author"><a href="#!">By |<span>Admin</span></a> </li>
                                        </ul>
                                    </div>
                                    <div className="aon-post-info">
                                        <h4 className="aon-post-title"><a href="#!">Officia deserunt mollit anim id labrum.</a></h4>
                                        <div className="aon-post-text">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs;