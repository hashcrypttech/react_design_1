import React from 'react';
import Navbar from '../Components/Navbar';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

const HomePage = () => {
    return (
        <div>
            {/* NAVBAR COMPONENT */}
            <Navbar />

            {/* BODY PART */}
            <div class='w-100 mt-5 d-flex position-relative"'>
                <div style={{ position: "relative", top: "111px" }} class="d-none d-sm-block d-lg-none">
                    <img src='./decoR1.jpg' alt="" height="auto" width="50" />
                </div>

                <div style={{ position: "relative", top: "-20px", }} class="d-block d-sm-none">
                    <img src='./Phone2.jpg' alt="" height="auto" width="50" />
                </div>
                <div className='d-flex flex-column justify-content-center mx-auto mx-lg-0 w100 mobile-part '>
                    <h1 class='head text-center text-lg-start'>
                        Empowering <br />
                        your digital growth through innovation.
                    </h1>
                    <h4 class='navbarname text-center text-lg-start'>
                        We're a team of experienced developers creating innovative web and mobile solutions that empower businesses to succeed online. Let's bring your vision to life
                    </h4>
                    <div class='d-flex flex-column flex-sm-row mx-auto mx-lg-0 justify-content-center justify-content-lg-start pt-3 pt-sm-5 '>
                        <button type="button" class="btn btn-info">
                            Create your Project
                        </button>
                        <button type="button" class="btn btn-dark ms-0 mt-3 mt-sm-0 ms-sm-3">
                            Schedule a Demo
                        </button>
                    </div>
                </div>
                <div class='position-relative d-lg-none d-none d-sm-block' style={{ top: "-7px" }}>
                    <img src='./decoR2.jpg' alt="" height="auto" width="50" />
                </div>

                <div className='w-50 d-none d-lg-block'>
                    <img src='./deco.jpg' alt="" class='img' />
                </div>
            </div>

            <div class="d-flex justify-content-end d-sm-none positon-relative icon">
                <img src='./Phone.jpg' alt="" height="200" width="100" />
            </div>
            <span class='span span2 d-flex justify-content-center d-block d-lg-none'>
                See more  <FiChevronDown size={20} class='ms-2' />
            </span>

            {/* ONE PLATFORM PART, LIMITLESS POSSIBLITIES */}
            <div class='w-100 mt6 one'>
                <div>
                    <h2 class='h2'>
                        One Platform, Limitless possibilities
                    </h2>
                </div>
                <div class='d-flex flex-column mt-5 '>
                    <div class='d-flex flex-column flex-lg-row mx-auto mx-lg-0 justify-content-center'>
                        <div class='box-one'>
                            <div class='inner-box d-flex'>
                                <div>
                                    <img src='./icon.jpg' alt='' height="71" width="71" />
                                </div>
                                <div class='ms-3'>
                                    <h3 class='h3'>
                                        Unlimited Graphic
                                        Design
                                    </h3>
                                    <p class='p'>
                                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.
                                    </p>
                                    <a href='javascript:void(0)' class='span'>
                                        Learn more  <FiChevronRight size={20} class='ms-2' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class='box-one ms-0 mt-3 mt-lg-0 ms-lg-3'>
                            <div class='inner-box d-flex'>
                                <div>
                                    <img src='./web.jpg' alt='' height="71" width="71" />
                                </div>
                                <div class='ms-3'>
                                    <h3 class='h3'>
                                        Web & App
                                        developpment
                                    </h3>
                                    <p class='p'>
                                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.
                                    </p>
                                    <a href='javascript:void(0)' class='span'>
                                        Learn more  <FiChevronRight size={20} class='ms-2' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='d-flex flex-column flex-lg-row mx-auto mx-lg-0 justify-content-center mt-3'>
                        <div class='box-one'>
                            <div class='inner-box d-flex'>
                                <div>
                                    <img src='./video.jpg' alt='' height="71" width="71" />
                                </div>
                                <div class='ms-3'>
                                    <h3 class='h3'>
                                        Unlimited Video
                                        Editing
                                    </h3>
                                    <p class='p'>
                                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.
                                    </p>
                                    <a href='javascript:void(0)' class='span'>
                                        Learn more  <FiChevronRight size={20} class='ms-2' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class='box-one ms-0 mt-3 mt-lg-0 ms-lg-3'>
                            <div class='inner-box d-flex'>
                                <div>
                                    <img src='./copy.jpg' alt='' height="71" width="71" />
                                </div>
                                <div class='ms-3'>
                                    <h3 class='h3'>
                                        Scalable content &
                                        Copywriting
                                    </h3>
                                    <p class='p'>
                                        Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.
                                    </p>
                                    <a href='javascript:void(0)' class='span'>
                                        Learn more  <FiChevronRight size={20} class='ms-2' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CENTRALIZED DASHBOARD PART */}
            <div class='w-100 mt-5 d-flex p-3 p-sm-5 dashboard' >
                <div className='w100 d-flex flex-column justify-content-center'>
                    <h1 class='h1 text-center text-lg-start'>
                        Centralized Dashboard <br />
                        For All Your Content
                        Needs
                    </h1>
                    <p class='p-class text-center text-lg-start'>
                        Our dashboard development team creates custom, data-driven solutions that provide real-time insights into your business operations. With intuitive design and interactive visualizations, our dashboards help you make informed decisions, identify trends, and optimize performance
                    </p>
                    <div class='d-flex pt-3 justify-content-center justify-content-lg-start'>
                        <button type="button" class="btn btn-info ">
                            Explore More
                        </button>
                    </div>
                </div>
                <div className='w-50 d-none d-lg-block'>
                    <img src='./demo.jpg' alt="" class='img' />
                </div>
            </div>

            {/* REDAY TO START */}
            <div class="color">
                <div class='w-100 d-flex p-0 justify-content-lg-between mt-5 mt-lg-0 '>
                    <div class="d-none d-lg-block">
                        <img src='./cardDeco1.jpg' alt="" height="150" width="150" />
                    </div>

                    <div class='mx-auto mx-lg-0 position-relative start' >
                        <h3 class='h2'>
                            Are You Ready To Start?
                        </h3>
                        <div class='d-flex flex-column justify-content-center flex-lg-row mx-auto mx-lg-0 pt-4 w50'>
                            <button type="button" class="btn btn-info ">
                                Create your Project
                            </button>
                            <button type="button" class="btn btn-dark mt-4 mt-lg-0 ms-0 ms-lg-3 ">
                                Schedule a Demo
                            </button>
                        </div>
                    </div>
                    <div class='pt5 d-none d-lg-block'>
                        <img src='./cardDeco2.jpg' alt="" height="150" width="150" />
                    </div>
                </div>

                {/* RESPONSIVE-DECO */}
                <div class='d-none d-sm-block d-lg-none position-relative' style={{ top: "-100px" }}>
                    <img src='./decoR3.jpg' alt="" height="150" width="100" />
                </div>

                <div class='d-block d-sm-none position-relative' style={{ top: "-43px" }}>
                    <img src='./phone1.jpg' alt="" height="120" width="100" />
                </div>
            </div>

            {/* SCALE YOUR BUSINESS CONTENT */}
            <div class='w-100 mt5'>
                <div>
                    <h2 class='h2'>
                        Scale Your Business Content Production Faster
                    </h2>
                    <p class='p-text'>
                        Check out our portfolio and see our innovative solutions in action!
                    </p>
                </div>
                <div class='d-flex flex-column flex-lg-row mx-auto mx-lg-0 justify-content-center pt-4'>
                    <div class='box mx-auto mx-lg-0'>
                        <div class='d-flex flex-column'>
                            <div>
                                <img src='./Rectangle1.jpg' alt='' class='img' />
                            </div>
                            <div class='ms-3 text-center pt-4'>
                                <h3 class='h3'>
                                    Valkyrie
                                </h3>
                                <a href='javascript:void(0)' class='span'>
                                    Demo here  <FiChevronRight size={20} class='ms-2' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class='box ms-lg-2 box-1 mx-auto mx-lg-0'>
                        <div class='d-flex flex-column'>
                            <div>
                                <img src='./Rectangle2.jpg' alt='' class='img' />
                            </div>
                            <div class='ms-3 text-center pt-4'>
                                <h3 class='h3'>
                                    Rondonna
                                </h3>
                                <a href='javascript:void(0)' class='span'>
                                    Demo here  <FiChevronRight size={20} class='ms-2' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class='box ms-lg-2 mt-4 mt-lg-0 mx-auto mx-lg-0'>
                        <div class='d-flex flex-column'>
                            <div>
                                <img src='./Rectangle3.jpg' alt='' class='img' />
                            </div>
                            <div class='ms-3 text-center pt-4'>
                                <h3 class='h3'>
                                    Portfolio website
                                </h3>
                                <a href='javascript:void(0)' class='span'>
                                    Demo here  <FiChevronRight size={20} class='ms-2' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTACT PART */}
            <div class='w-100 mt6'>
                <div>
                    <h2 class='h2'>
                        Connect with us
                    </h2>
                </div>
                <div class="position">
                    <div class='deco d-none d-lg-block'>
                        <img src='./cardDeco3.jpg' alt="" height="150" width="150" />
                    </div>

                    <div class='deco-respnosive d-block d-lg-none'>
                        <img src='./cardDeco3.jpg' alt="" height="130" width="130" />
                    </div>
                    <div class='pt-5 form'>
                        <p class='h6'>
                            Enter Your Email Below
                        </p>
                        <h3 class='h3'>
                            Schedule A Demo Today To See How We Can Help You Create Better content
                        </h3>
                        <div className="email-input-container">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="email-input"
                            />
                            <MdOutlineEmail className="email-icon" />
                        </div>
                        <button type="button" class="btn btn-danger w-100 mt-3">
                            Schedule a Demo
                        </button>
                    </div>
                    <div class='pt6 deco1 d-none d-lg-block'>
                        <img src='./cardDeco4.jpg' alt="" height="150" width="150" />
                    </div>

                    <div class='pt6 deco1-responsive d-block d-lg-none'>
                        <img src='./cardDeco4.jpg' alt="" height="130" width="130" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;