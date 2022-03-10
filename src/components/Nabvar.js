// import React, { Component } from "react";
// import "./Navbar.css";



// const Navbar = () => {
//   return (
//     <div>
//       <header className="eltdf-page-header">
//         <div className="eltdf-header-double-grid-line-one"></div>
//         <div className="eltdf-header-double-grid-line-two"></div>
//         <div className="eltdf-menu-area eltdf-menu-center">
//           <div className="eltdf-vertical-align-containers">
//             <div className="eltdf-position-left">
//               <div className="eltdf-position-left-inner">
//                 <div className="eltdf-logo-wrapper eltdf-svg-logo">
//                   <a itemProp="url" href="index.html">
//                     <span className="eltdf-logo-svg-path"></span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <div className="eltdf-position-center">
//               <div className="eltdf-position-center-inner">
//                 <nav className="eltdf-main-menu eltdf-drop-down eltdf-default-nav">
//                   <ul id="menu-main-menu" className="clearfix">
//                     <li
//                       id="nav-menu-item-13"
//                       className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children eltdf-active-item has_sub narrow"
//                     >
//                       <a href="#" className="current">
//                         <span className="item_outer">
//                           <span className="item_text">Home</span>
//                         </span>
//                       </a>
//                       <div className="second" style={{ height: 0 + "px" }}>
//                         <div className="inner">
//                           <ul>
//                             <li
//                               id="nav-menu-item-14"
//                               className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item"
//                             >
//                               <a href="index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">Main Home</span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-389"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="bar-home/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">Bar Home</span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-319"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="restaurant-home/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Restaurant Home
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-218"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="fine-dining/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">Fine Dining</span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-893"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a
//                                 href="split-screen-showcase/index.html"
//                                 className=""
//                               >
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Split Screen Showcase
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-231"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="haute-cuisine/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Haute Cuisine
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-503"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="restaurant-menu/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Restaurant Menu
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-381"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a
//                                 href="fullscreen-showcase/index.html"
//                                 className=""
//                               >
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Fullscreen Showcase
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-822"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a
//                                 href="carousel-showcase/index.html"
//                                 className=""
//                               >
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Carousel Showcase
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-1359"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="landing/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">Landing</span>
//                                 </span>
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </li>
//                     <li
//                       id="nav-menu-item-15"
//                       className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow"
//                     >
//                       <a href="#" className="">
//                         <span className="item_outer">
//                           <span className="item_text">Pages</span>
//                         </span>
//                       </a>
//                       <div className="second" style={{ height: 0 + "px" }}>
//                         <div className="inner">
//                           <ul>
//                             <li
//                               id="nav-menu-item-631"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="about-us/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">About Us</span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-650"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="meet-the-chef/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Meet The Chef
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-759"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="our-chefs/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">Our Chefs</span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-797"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="our-menu/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">Our Menu</span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-728"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="our-kitchen/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">Our Kitchen</span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-782"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="gallery-page/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Gallery Page
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-702"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="booking-page/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Booking Page
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-685"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="contact-us/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">Contact Us</span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-673"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="coming-soon/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">Coming Soon</span>
//                                 </span>
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </li>
//                     <li
//                       id="nav-menu-item-16"
//                       className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow"
//                     >
//                       <a href="#" className="">
//                         <span className="item_outer">
//                           <span className="item_text">Portfolio</span>
//                         </span>
//                       </a>
//                       <div className="second" style={{ height: 0 + "px" }}>
//                         <div className="inner">
//                           <ul>
//                             <li
//                               id="nav-menu-item-845"
//                               className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sub"
//                             >
//                               <a
//                                 href="#"
//                                 className="no_link"
//                                 onClick="JavaScript: return false;"
//                               >
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Portfolio Types
//                                   </span>
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 8.3 8.5"
//                                     className="eltdf-menu-arrow"
//                                   >
//                                     <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 "></polyline>
//                                     <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 "></polyline>
//                                   </svg>
//                                 </span>
//                               </a>
//                               <ul>
//                                 <li
//                                   id="nav-menu-item-844"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="gallery-portfolio/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Gallery Portfolio
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-843"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="standard-portfolio/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Standard Portfolio
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1137"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="slider-portfolio/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Slider Portfolio
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li
//                               id="nav-menu-item-1149"
//                               className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sub"
//                             >
//                               <a
//                                 href="#"
//                                 className="no_link"
//                                 onClick="JavaScript: return false;"
//                               >
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Portfolio Layout
//                                   </span>
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 8.3 8.5"
//                                     className="eltdf-menu-arrow"
//                                   >
//                                     <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 "></polyline>
//                                     <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 "></polyline>
//                                   </svg>
//                                 </span>
//                               </a>
//                               <ul>
//                                 <li
//                                   id="nav-menu-item-1148"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="two-columns-portfolio/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Two Col.
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1147"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="three-columns-portfolio/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Three Col.
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1146"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="three-columns-portfolio-wide/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Three Col. Wide
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1166"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="four-columns-portfolio/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Four Col.
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1165"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="four-columns-portfolio-wide/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Four Col. Wide
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1164"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="five-columns-portfolio-wide/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Five Col. Wide
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li
//                               id="nav-menu-item-619"
//                               className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sub"
//                             >
//                               <a
//                                 href="#"
//                                 className="no_link"
//                                 onClick="JavaScript: return false;"
//                               >
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Portfolio Single
//                                   </span>
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 8.3 8.5"
//                                     className="eltdf-menu-arrow"
//                                   >
//                                     <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 "></polyline>
//                                     <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 "></polyline>
//                                   </svg>
//                                 </span>
//                               </a>
//                               <ul>
//                                 <li
//                                   id="nav-menu-item-623"
//                                   className="menu-item menu-item-type-post_type menu-item-object-portfolio-item"
//                                 >
//                                   <a
//                                     href="portfolio-item/shrimp-pasta/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Small Images
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-622"
//                                   className="menu-item menu-item-type-post_type menu-item-object-portfolio-item"
//                                 >
//                                   <a
//                                     href="portfolio-item/beef-steak/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Small Slider
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-620"
//                                   className="menu-item menu-item-type-post_type menu-item-object-portfolio-item"
//                                 >
//                                   <a
//                                     href="portfolio-item/chicken-file/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Large Slider
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-621"
//                                   className="menu-item menu-item-type-post_type menu-item-object-portfolio-item"
//                                 >
//                                   <a
//                                     href="portfolio-item/punch-party/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Large Images
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1091"
//                                   className="menu-item menu-item-type-post_type menu-item-object-portfolio-item"
//                                 >
//                                   <a
//                                     href="portfolio-item/delicious-fruit-punch/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">Gallery</span>
//                                     </span>
//                                   </a>
//                                 </li>
//                               </ul>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </li>
//                     <li
//                       id="nav-menu-item-17"
//                       className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow"
//                     >
//                       <a href="#" className="">
//                         <span className="item_outer">
//                           <span className="item_text">Blog</span>
//                         </span>
//                       </a>
//                       <div className="second" style={{ height: 0 + 'px' }}>
//                         <div className="inner">
//                           <ul>
//                             <li
//                               id="nav-menu-item-989"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="blog-standard/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Blog Standard
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-1053"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a
//                                 href="blog-left-sidebar/index.html"
//                                 className=""
//                               >
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Blog Left Sidebar
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-1062"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="blog-no-sidebar/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Blog No Sidebar
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-1061"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="blog-classic/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Blog Classic
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-1023"
//                               className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sub"
//                             >
//                               <a
//                                 href="#"
//                                 className="no_link"
//                                 onClick="JavaScript: return false;"
//                               >
//                                 <span className="item_outer">
//                                   <span className="item_text">Post Types</span>
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 8.3 8.5"
//                                     className="eltdf-menu-arrow"
//                                   >
//                                     <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 "></polyline>
//                                     <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 "></polyline>
//                                   </svg>
//                                 </span>
//                               </a>
//                               <ul>
//                                 <li
//                                   id="nav-menu-item-1024"
//                                   className="menu-item menu-item-type-post_type menu-item-object-post"
//                                 >
//                                   <a
//                                     href="elegant-food/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Standard
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1025"
//                                   className="menu-item menu-item-type-post_type menu-item-object-post"
//                                 >
//                                   <a
//                                     href="food-inspiration/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">Quote</span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1027"
//                                   className="menu-item menu-item-type-post_type menu-item-object-post"
//                                 >
//                                   <a
//                                     href="wnim-ad-minim-veniam-quis-nostrud-exercitation-ullamco-laboris-nisi-ut-aliquip-ex-ea-commodo-consequat/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">Link</span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1026"
//                                   className="menu-item menu-item-type-post_type menu-item-object-post"
//                                 >
//                                   <a
//                                     href="the-royal-charm/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">Audio</span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1046"
//                                   className="menu-item menu-item-type-post_type menu-item-object-post"
//                                 >
//                                   <a
//                                     href="our-speciality/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">Video</span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1050"
//                                   className="menu-item menu-item-type-post_type menu-item-object-post"
//                                 >
//                                   <a
//                                     href="delicious-desserts/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">Gallery</span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1030"
//                                   className="menu-item menu-item-type-post_type menu-item-object-post"
//                                 >
//                                   <a
//                                     href="fine-dining-space/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         No Sidebar
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                               </ul>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </li>
//                     <li
//                       id="nav-menu-item-18"
//                       className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children has_sub narrow"
//                     >
//                       <a href="#" className="">
//                         <span className="item_outer">
//                           <span className="item_text">Shop</span>
//                         </span>
//                       </a>
//                       <div
//                         className="second"
//                         style={{
//                           height: 0 + "px",
//                           visibility: 'hidden',
//                           opacity: 0,
//                           overflow: 'hidden',
//                         }}
//                       >
//                         <div className="inner">
//                           <ul>
//                             <li
//                               id="nav-menu-item-976"
//                               className="menu-item menu-item-type-post_type menu-item-object-page"
//                             >
//                               <a href="shop/index.html" className="">
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Product List
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-1117"
//                               className="menu-item menu-item-type-post_type menu-item-object-product"
//                             >
//                               <a
//                                 href="product/dadiho-de-tapo/index.html"
//                                 className=""
//                               >
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Product Single
//                                   </span>
//                                 </span>
//                               </a>
//                             </li>
//                             <li
//                               id="nav-menu-item-1194"
//                               className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sub"
//                             >
//                               <a
//                                 href="#"
//                                 className="no_link"
//                                 onClick="JavaScript: return false;"
//                               >
//                                 <span className="item_outer">
//                                   <span className="item_text">
//                                     Shop Layouts
//                                   </span>
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 8.3 8.5"
//                                     className="eltdf-menu-arrow"
//                                   >
//                                     <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 "></polyline>
//                                     <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 "></polyline>
//                                   </svg>
//                                 </span>
//                               </a>
//                               <ul>
//                                 <li
//                                   id="nav-menu-item-1197"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="shop-three-columns/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Three Col.
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1196"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="shop-four-columns/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Four Col.
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-1195"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a
//                                     href="shop-full-width/index.html"
//                                     className=""
//                                   >
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Full Width
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                               </ul>
//                             </li>
//                             <li
//                               id="nav-menu-item-1028"
//                               className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children sub"
//                             >
//                               <a
//                                 href="#"
//                                 className="no_link"
//                                 onClick="JavaScript: return false;"
//                               >
//                                 <span className="item_outer">
//                                   <span className="item_text">Shop Pages</span>
//                                   <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     viewBox="0 0 8.3 8.5"
//                                     className="eltdf-menu-arrow"
//                                   >
//                                     <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 "></polyline>
//                                     <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 "></polyline>
//                                   </svg>
//                                 </span>
//                               </a>
//                               <ul>
//                                 <li
//                                   id="nav-menu-item-973"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a href="my-account/index.html" className="">
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         My Account
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-974"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a href="checkout/index.html" className="">
//                                     <span className="item_outer">
//                                       <span className="item_text">
//                                         Checkout
//                                       </span>
//                                     </span>
//                                   </a>
//                                 </li>
//                                 <li
//                                   id="nav-menu-item-975"
//                                   className="menu-item menu-item-type-post_type menu-item-object-page"
//                                 >
//                                   <a href="cart/index.html" className="">
//                                     <span className="item_outer">
//                                       <span className="item_text">Cart</span>
//                                     </span>
//                                   </a>
//                                 </li>
//                               </ul>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//             <div className="eltdf-position-right">
//               <div className="eltdf-position-right-inner">
//                 <a
//                   className="eltdf-side-menu-button-opener eltdf-icon-has-hover eltdf-side-menu-button-opener-predefined"
//                   href="javascript:void(0)"
//                 >
//                   <span className="eltdf-side-menu-icon">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 37 25.2"
//                       className="eltdf-menu-opener"
//                     >
//                       <line y1="7.6" x2="24" y2="7.6"></line>
//                       <line x1="4.1" y1="0.5" x2="28.1" y2="0.5"></line>
//                       <line x1="10.1" y1="24.6" x2="34.1" y2="24.6"></line>
//                       <line x1="13" y1="17.6" x2="37" y2="17.6"></line>
//                     </svg>
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
