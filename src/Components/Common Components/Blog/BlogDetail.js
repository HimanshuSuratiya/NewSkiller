import React from 'react'
import Menu from "../Menu/Menu";
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Divider from '@mui/material/Divider';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DateRangeIcon from '@mui/icons-material/DateRange';
import QuestionAnswerSharpIcon from '@mui/icons-material/QuestionAnswerSharp';
import ThumbUpSharpIcon from '@mui/icons-material/ThumbUpSharp';
import { TextareaAutosize } from '@mui/material';
import "./BlogDetail.css";

const BlogDetail = () => {
    return (
        <>
            <Menu />
            <section className="vh-80">
                <Banner text="Blog-Detail" />
                <div class="blog-category-area">
                    <h4>BLOG</h4>
                    <h2>Blog Detail</h2>
                </div>
                <div className='container p-2'>
                    <div className="row m-0">
                        <div className='col-lg-8'>
                            <div className='image-main-div'>
                                <img src="https://collectiblesnetworkiso.com/uploads/1604915895.png" alt='Image Not Found' />
                            </div>
                            <div>
                                <div className='d-flex justify-content-between align-items-center px-1 image-down-information'>
                                    <div className='py-1 d-flex align-items-center'>
                                        <SupervisorAccountIcon style={{ color: '#188dc7' }} />
                                        <p className='p-0 m-0 ps-2'>Posted By : <span>Admin</span></p>
                                    </div>
                                    <div className='py-1 d-flex align-items-center'>
                                        <DateRangeIcon style={{ color: '#188dc7' }} />
                                        <p className='p-0 m-0 ps-2'>Date : <span>Jun 16, 2018</span></p>
                                    </div>
                                    <div className='py-1 d-flex align-items-center'>
                                        <QuestionAnswerSharpIcon style={{ color: '#188dc7' }} />
                                        <p className='p-0 m-0 ps-2'>Comments : <span>12</span></p>
                                    </div>
                                    <div className='py-1 d-flex align-items-center'>
                                        <ThumbUpSharpIcon style={{ color: '#188dc7' }} />
                                        <p className='p-0 m-0 ps-2'>Likes : <span>17</span></p>
                                    </div>
                                </div>
                                <Divider className='mt-1 mb-1' style={{ backgroundColor: '#188dc7' }} />
                                <h2 className='mt-4'>What is Lorem Ipsum ?</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the </p>
                                <div className='d-flex align-items-center'>
                                    <button className='like-Btn'><ThumbUpSharpIcon style={{ color: '#fff' }} /></button>
                                </div>
                                <div className="form-group mt-3">
                                    <TextareaAutosize
                                        className='p-2'
                                        aria-label="minimum height"
                                        minRows={2}
                                        style={{ width: '100%', borderRadius: '5px' }}
                                        placeholder="Enter your Comment"
                                    />
                                </div>
                                <div className='mt-3 d-flex align-items-center'>
                                    <button className='blog-submit-Btn'>Submit</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div>
                                <h2 className="text-center">Recent Post</h2>
                                <Divider className='mt-1 mb-1' style={{ backgroundColor: '#188dc7' }} />
                                <div className='main-post-area p-2 d-flex justify-content-between align-items-center'>
                                    <div className='img-post-area'>
                                        <img src="https://collectiblesnetworkiso.com/uploads/1604915895.png" alt="Image Not Found" />
                                    </div>
                                    <div className='text-end image-down-information'>
                                        <h4>What is Lorem Ipsum?</h4>
                                        <p className="p-0 m-0"><SupervisorAccountIcon style={{ color: '#188dc7' }} /> By : <span>Admin</span></p>
                                        <p className="p-0 m-0"> <DateRangeIcon style={{ color: '#188dc7' }} /> Jun 16, 2018</p>
                                    </div>
                                </div>
                                <Divider className='mt-1 mb-1' style={{ backgroundColor: '#188dc7' }} />
                                <div className='main-post-area p-2 d-flex justify-content-between align-items-center'>
                                    <div className='img-post-area'>
                                        <img src="https://collectiblesnetworkiso.com/uploads/1604915895.png" alt="Image Not Found" />
                                    </div>
                                    <div className='text-end image-down-information'>
                                        <h4>What is Lorem Ipsum?</h4>
                                        <p className="p-0 m-0"><SupervisorAccountIcon style={{ color: '#188dc7' }} /> By : <span>Admin</span></p>
                                        <p className="p-0 m-0"> <DateRangeIcon style={{ color: '#188dc7' }} /> Jun 16, 2018</p>
                                    </div>
                                </div>
                                <Divider className='mt-1 mb-1' style={{ backgroundColor: '#188dc7' }} />
                                <div className='main-post-area p-2 d-flex justify-content-between align-items-center'>
                                    <div className='img-post-area'>
                                        <img src="https://collectiblesnetworkiso.com/uploads/1604915895.png" alt="Image Not Found" />
                                    </div>
                                    <div className='text-end image-down-information'>
                                        <h4>What is Lorem Ipsum?</h4>
                                        <p className="p-0 m-0"><SupervisorAccountIcon style={{ color: '#188dc7' }} /> By : <span>Admin</span></p>
                                        <p className="p-0 m-0"> <DateRangeIcon style={{ color: '#188dc7' }} /> Date : <span>Jun 16, 2018</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default BlogDetail;