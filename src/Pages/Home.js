// import React from 'react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import About1 from '../Component/About1'
import Whatwedo1 from '../Component/Whatwedo1'
import Blog1 from '../Component/Blog1'
import Contactus1 from '../Component/Contactus1'

export default class Home extends Component {
  render() {
    return (
      <div>
       <div class="header_section">
         {/* <div class="container-fluid"> */}
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a class="navbar-brand"href="index.html"><img src="assets/images/logo.png" /></a> */}
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                     <li class="nav-item active">
                        <Link class="nav-link" to="/">Home</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to="about">About</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to="whatwedo">What we do</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to="blog">Blog</Link>
                     </li>
                     <li class="nav-item">
                        <Link class="nav-link" to="contactus">Contact Us</Link>
                     </li>
                  </ul>
                  <form class="form-inline my-2 my-lg-0">
                     <div class="login_bt">
                        <ul>
                           <li><a href="#"><span class="user_icon"><i class="fa fa-user" aria-hidden="true"></i></span>Login</a></li>
                           <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </form>
               </div>
            {/* </nav> */}
         {/* </div> */}
         {/* <!-- banner section start -->  */}
         <div class="banner_section layout_padding">
            <div class="container-fluid">
               <div id="banner_slider" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="row">
                           <div class="col-md-6">
                              <div class="banner_taital_main">
                                 <h1 class="banner_taital">We Provide Law Practice</h1>
                                 <p class="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                                 <div class="readmore_btn active"><a href="#">Read More</a></div>
                                 <div class="started_bt"><a href="#">Contact Us</a></div>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="banner_img"><img src="assets/images/banner-img.png" /></div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="row">
                           <div class="col-md-6">
                              <div class="banner_taital_main">
                                 <h1 class="banner_taital">We Provide Law Practice</h1>
                                 <p class="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                                 <div class="readmore_btn active"><a href="#">Read More</a></div>
                                 <div class="started_bt"><a href="#">Contact Us</a></div>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="banner_img"><img src="assets/images/banner-img.png" /></div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="row">
                           <div class="col-md-6">
                              <div class="banner_taital_main">
                                 <h1 class="banner_taital">We Provide Law Practice</h1>
                                 <p class="banner_text">Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem</p>
                                 <div class="readmore_btn active"><a href="#">Read More</a></div>
                                 <div class="started_bt"><a href="#">Contact Us</a></div>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="banner_img"><img src="assets/images/banner-img.png" /></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a class="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                  <i class="fa fa-arrow-left"></i>
                  </a>
                  <a class="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                  <i class="fa fa-arrow-right"></i>
                  </a>
               </div>
            </div>
         </div>
         {/* <!-- banner section end --> */}
      </div>
      {/* <!-- header section end -->
      <!-- box section start --> */}
      <div class="container">
         <div class="box_section">
            <div class="online_box">
               <div class="online_box_left">
                  <div class="online_box_main">
                     <div class="box_left">
                        <div class="right_arrow"><i class="fa fa-arrow-right"></i></div>
                     </div>
                     <div class="box_right">
                        <p class="book_text">Book At</p>
                        <h4 class="appoinment_text">Appoinment</h4>
                     </div>
                  </div>
               </div>
               <div class="online_box_left active">
                  <div class="online_box_main">
                     <div class="box_left">
                        <div class="right_arrow"><i class="fa fa-arrow-right"></i></div>
                     </div>
                     <div class="box_right">
                        <p class="book_text active">Get Free</p>
                        <h4 class="appoinment_text active"> Evalution</h4>
                     </div>
                  </div>
               </div>
               <div class="online_box_left">
                  <div class="online_box_main">
                     <div class="box_left">
                        <div class="right_arrow"><i class="fa fa-arrow-right"></i></div>
                     </div>
                     <div class="box_right">
                        <p class="book_text">Pay Invoice</p>
                        <h4 class="appoinment_text">Online</h4>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- box section end -->
      <!-- services section start --> */}
      <Whatwedo1 />
      {/* <!-- services section end -->
      <!-- studies section start --> */}
      <Blog1 />
      {/* <!-- studies section end -->
      <!-- about section start --> */}
      <About1 />
      {/* <!-- about section end -->
      <!-- testimonial section start --> */}
      <div class="customer_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <h1 class="customer_taital">SATISFIED CLIENT Says</h1>
               </div>
            </div>
         </div>
         <div id="my_slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="customer_section_2">
                     <div class="container">
                        <div class="row">
                           <div class="col-md-12">
                              <div class="box_main">
                                 <div class="customer_main">
                                    <div class="customer_left">
                                       <div class="customer_img"><img src="assets/images/customer-img.png" /></div>
                                    </div>
                                    <div class="customer_right">
                                       <h3 class="customer_name">Giolio Mark <span class="quick_icon"><img src="assets/images/quick-icon.png" /></span></h3>
                                       <p class="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="customer_section_2">
                     <div class="container">
                        <div class="row">
                           <div class="col-md-12">
                              <div class="box_main">
                                 <div class="customer_main">
                                    <div class="customer_left">
                                       <div class="customer_img"><img src="assets/images/customer-img.png" /></div>
                                    </div>
                                    <div class="customer_right">
                                       <h3 class="customer_name">DenoMark <span class="quick_icon"><img src="assets/images/quick-icon.png" /></span></h3>
                                       <p class="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="customer_section_2">
                     <div class="container">
                        <div class="row">
                           <div class="col-md-12">
                              <div class="box_main">
                                 <div class="customer_main">
                                    <div class="customer_left">
                                       <div class="customer_img"><img src="assets/images/customer-img.png" /></div>
                                    </div>
                                    <div class="customer_right">
                                       <h3 class="customer_name">DenoMark <span class="quick_icon"><img src="assets/images/quick-icon.png" /></span></h3>
                                       <p class="enim_text">anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internetanything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a class="carousel-control-prev" href="#my_slider" role="button" data-slide="prev">
            <i class="fa fa-arrow-left"></i>
            </a>
            <a class="carousel-control-next" href="#my_slider" role="button" data-slide="next">
            <i class="fa fa-arrow-right"></i>
            </a>
         </div>
      </div>
      {/* <!-- testimonial section end -->
      <!-- news section start --> */}
      <div class="news_section layout_padding">
         <div class="container">
            <h1 class="news_taital">Recent News</h1>
            <div class="news_section_2">
               <div class="news_box">
                  <div id="custom_slider" class="carousel slide" data-ride="carousel">
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="news_img"><img src="assets/images/news-img.png" /></div>
                        </div>
                        <div class="carousel-item">
                           <div class="news_img"><img src="assets/images/news-img.png" /></div>
                        </div>
                        <div class="carousel-item">
                           <div class="news_img"><img src="assets/images/news-img.png" /></div>
                        </div>
                     </div>
                     <a class="carousel-control-next" href="#custom_slider" role="button" data-slide="next">
                     <i class="fa fa-arrow-right"></i>
                     </a>
                  </div>
                  <h2 class="does_taital">What Does Marijuana Law Mean for You?</h2>
                  <p class="dummy_text">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- news section end -->
      <!-- contact section start --> */}
      <Contactus1 />
         {/* <div class="copyright_section">
         <div class="container">
            <p class="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free Html Templates</a></p>
         </div>
      </div> */}
      {/* <!-- Javascript files-->
      <script src="js/jquery.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.bundle.min.js"></script>
      <script src="js/jquery-3.0.0.min.js"></script>
      <script src="js/plugin.js"></script>
      <!-- sidebar -->
      <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="js/custom.js"></script>
      <!-- javascript -->  */}
    </div>
    )
  }
}
