import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {

    const [show, setShow] = useState(false)
    const [active, setActive] = useState("Home")

    return (
        <div>
            {/* NAVBAR-MAIN-MENU */}
            <nav class="navbar navbar-expand-lg navbar-light w-100 d-flex">
                <div class="container-fluid">
                    <a href='javascript:void(0)'>
                        <img src='./logo.png' alt="" width="22" height="28" />
                    </a>
                    <div id="navbarNav" class="" >
                        <ul class="navbar-nav d-none d-lg-flex">
                            <a href='javascript:void(0)' style={{ textDecoration: "none" }}>
                                <li class={active === "Home" ? "nav-item p-2 navbarmain" : "nav-item p-2 navbarname"} onClick={() => setActive("Home")} >
                                    Home
                                </li>
                            </a>
                            <a href='javascript:void(0)' style={{ textDecoration: "none" }}>
                                <li class={active === "Services" ? "nav-item p-2 navbarmain" : "nav-item p-2 navbarname"} onClick={() => setActive("Services")}>
                                    Services
                                </li>
                            </a>
                            <a href='javascript:void(0)' style={{ textDecoration: "none" }}>
                                <li class={active === "Projects" ? "nav-item p-2 navbarmain" : "nav-item p-2 navbarname"} onClick={() => setActive("Projects")}>
                                    Projects
                                </li>
                            </a>
                            <a href='javascript:void(0)' style={{ textDecoration: "none" }}>
                                <li class={active === "Pricing" ? "nav-item p-2 navbarmain" : "nav-item p-2 navbarname"} onClick={() => setActive("Pricing")}>
                                    Pricing
                                </li>
                            </a>
                        </ul>
                    </div>
                    <button type="button" class="btn btn-primary d-none d-lg-block">
                        Contact Us
                    </button>

                    <img src='./Frame3.jpg' alt="" width="35" height="35" class="d-block d-lg-none" onClick={() =>
                        setShow(!show)} />
                </div>
            </nav>
            {/*  NAVBAR-RESPONSIVE-MENU */}
            {
                show && <div class="d-flex animation align-items">

                    <div class='responsive d-flex' style={{ position:"fixed", zIndex:"15", background:"white", marginTop:"-6px", width:"102%", paddingTop:"25px" }} id="navbarNav">
                        <div class='w-75 d-flex justify-content-between flex-column'>
                            <span class="nav-item p-2 navbarmainRes d-flex">
                                <a href='javascript:void(0)' style={{ textDecoration: "none", color: "#000000" }}>
                                    En.
                                </a>
                                <a href='javascript:void(0)' style={{ textDecoration: "none", color: "#000000" }}>
                                    <p class="ms-4">
                                        Fr.
                                    </p>
                                </a>
                            </span>
                            <div>
                                <ul class="navbar-nav">
                                    <a href='javascript:void(0)' style={{ textDecoration: "none", color: "#000000" }}>
                                        <li class="nav-item p-2 navbarmainRes" >
                                            Home
                                        </li>
                                    </a>
                                    <a href='javascript:void(0)' style={{ textDecoration: "none", color: "#000000" }}>

                                        <li class="nav-item p-2 navbarmainRes">
                                            Services
                                        </li>
                                    </a>
                                    <a href='javascript:void(0)' style={{ textDecoration: "none", color: "#000000" }}>
                                        <li class="nav-item p-2 navbarmainRes">
                                            Projects
                                        </li>
                                    </a>
                                    <a href='javascript:void(0)' style={{ textDecoration: "none", color: "#000000" }}>
                                        <li class="nav-item p-2 navbarmainRes">
                                            Pricing
                                        </li>
                                    </a>

                                    <a href='javascript:void(0)' style={{ textDecoration: "none", color: "#000000" }}>
                                        <li class="nav-item p-2 navbarmainRes">
                                            Contact Us
                                        </li>
                                    </a>
                                </ul>

                                <button type="button" class="btn btn-primary button mt-3 ">
                                    Linkdin
                                </button>
                            </div>

                            <a href='javascript:void(0)' style={{ textDecoration: "none", color: "#000000" }}>
                                <span class="nav-item p-2 navbarmainRes">
                                    Join us
                                </span>
                            </a>
                        </div>

                        <div class='h-75' >
                            <div style={{ height: "86vh", width: "70px", background: "#645CFF", borderRadius: "8px" }} >
                                <IoMdClose style={{ background: "white", padding: "5px", marginLeft: "20px", marginTop: "20px", borderRadius: "15px" }} onClick={() => setShow(!show)} size={30} />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar;