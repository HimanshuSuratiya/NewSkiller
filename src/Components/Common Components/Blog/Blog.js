import React from 'react'
import Menu from "../Menu/Menu";
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Images from '../../../Images/Image';
import { NavLink } from 'react-router-dom';
import "./BlogDetail.css";

function Blog() {
    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner text="Blog" />
                <div class="blog-category-area">
                    <h2>Blog</h2>
                </div>
                <div className='container p-2'>
                    <div className="row m-0">
                        <div className="col-md-4">
                            <div className="media-bg-animate m-2">
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
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <NavLink to="blog-detail" className='blog-read-more-btn'>Read more</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="media-bg-animate m-2">
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
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <NavLink to="blog-detail" className='blog-read-more-btn'>Read more</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="media-bg-animate m-2">
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
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <NavLink to="blog-detail" className='blog-read-more-btn'>Read more</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="media-bg-animate m-2">
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
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <NavLink to="blog-detail" className='blog-read-more-btn'>Read more</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="media-bg-animate m-2">
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
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <NavLink to="blog-detail" className='blog-read-more-btn'>Read more</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="media-bg-animate m-2">
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
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <NavLink to="blog-detail" className='blog-read-more-btn'>Read more</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Blog;