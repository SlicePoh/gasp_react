import {gsap} from 'gsap';
import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
// import { CSSPlugin } from 'gsap';


export const Home = () => {
    const container= useRef();

    useGSAP(()=>{
        let tl=gsap.timeline({defaults: {duration: 2, ease: "power4.inOut"}});
        // let flagPoles = CSSPlugin(".card:before")
        tl.to('.heading', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0,duration: 2.2})
        .to('.form', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0},"-=2")
        .from('.card', { scaleY: 0, stagger: .2}, "-=2")
        // .from(flagPoles, {  stagger: 1, opacity: 0, transform: 'translateY(100px)' }, "-=2")
        .to('.title, .desc', { stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=2")
        .to('.footer', { opacity: 1}, "-=2")
    },{scope: container})


    return (
        <div ref={container} className=" bg-gray-900 text-white font-poppins min-h-screen">
            <div className="wrapper py-10 px-40">
                <a href="/">
                    <img
                        src="https://assets.codepen.io/2621168/logo_1.svg"
                        className="logo w-32"
                        alt="SkillForm Logo"
                    />
                </a>


                <div className="mt-16">
                    <div className="hero flex items-center justify-center w-full p-10">
                        <div style={{
                            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%',
                            
                        }} 
                        className="heading text-4xl opacity-0 md:text-5xl font-serif font-medium mb-4 w-full md:w-1/2 text-center md:text-left px-10">
                            A Teaching Platform with Flexibility, Finally.
                        </div>
                        <div style={{
                            'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',

                        }}
                         className="form w-full md:w-1/2 ">
                            <label htmlFor="email" className="block font-bold mt-4 mb-2">
                                Notify me when it releases:
                            </label>
                            <div className="flex h-16">
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Email Address"
                                    className="p-3 text-base w-full box-border rounded-sm border-none"
                                />
                                <button type="submit" className="w-32 p-3 bg-purple-600 rounded-sm text-white font-bold ml-2 cursor-pointer hover:bg-purple-700">
                                    Add Me
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="features grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
                        <div className="card before:absolute before:bg-[#BA62AD] before:border-[#1A1D20] before:border-[.5em] before: border-l-[2px] text\ border-white">
                            <p className="title font-bold">Modular</p>
                            <p className="desc text-gray-500">
                                Go beyond teaching with just video. Choose from our library of
                                interactive modules or create your own.
                            </p>
                        </div>
                        <div className="card before:absolute before:bg-[#BA62AD] before:border-[#1A1D20] before:border-[.5em] before: border-l-[2px] text\ border-white">
                            <p className="title font-bold">Customizable</p>
                            <p className="desc text-gray-500">
                                Use our Headless API to build truly custom frontends.
                            </p>
                        </div>
                        <div className="card before:absolute before:bg-[#BA62AD] before:border-[#1A1D20] before:border-[.5em] before: border-l-[2px] text\ border-white">
                            <p className="title font-bold">PPP &amp; Managed Payments</p>
                            <p className="desc text-gray-500">
                                Offer parity pricing, and leave the headache of processing to
                                us.
                            </p>
                        </div>
                        <div className="card before:absolute before:bg-[#BA62AD] before:border-[#1A1D20] before:border-[.5em] before: border-l-[2px] text\ border-white">
                            <p className="title font-bold">Built by Teachers</p>
                            <p className="desc text-gray-500">
                                Co-Founder Gary Simon has been teaching online for over 12
                                years. We know what teachers want.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer flex justify-between opacity-0 items-center px-40 h-52 w-full bottom-0 bg-gradient-to-r from-pink-500 via-purple-600 to-purple-700 text-black font-bold">

                <div className="flex gap-2">
                    <svg
                        className="angle-line mt-4"
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.3536 16.3536C17.5488 16.1583 17.5488 15.8417 17.3536 15.6464L14.1716 12.4645C13.9763 12.2692 13.6597 12.2692 13.4645 12.4645C13.2692 12.6597 13.2692 12.9763 13.4645 13.1716L16.2929 16L13.4645 18.8284C13.2692 19.0237 13.2692 19.3403 13.4645 19.5355C13.6597 19.7308 13.9763 19.7308 14.1716 19.5355L17.3536 16.3536ZM0 16.5H17V15.5H0V16.5Z"
                            fill="black"
                        />
                        <line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="16" stroke="black" />
                    </svg>
                    <p className="all text-2xl md:text-3xl">All of this, coming in 2022.</p>
                </div>
                <div className=" social flex gap-2 items-center justify-center">
                    <p className="learn">Learn more by following us: </p>
                    <a href="https://twitter.com/skillformio" className="flex">
                        <svg
                            className="twitter w-8 ml-2"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22 2.75C11.3695 2.75 2.75 11.3695 2.75 22C2.75 32.6305 11.3695 41.25 22 41.25C32.6305 41.25 41.25 32.6305 41.25 22C41.25 11.3695 32.6305 2.75 22 2.75ZM31.2512 17.2605C31.2641 17.4625 31.2641 17.673 31.2641 17.8793C31.2641 24.1871 26.4602 31.4531 17.6816 31.4531C14.9746 31.4531 12.4652 30.6668 10.3512 29.3133C10.7379 29.3563 11.1074 29.3734 11.5027 29.3734C13.7371 29.3734 15.791 28.6172 17.4281 27.3367C15.3313 27.2938 13.5695 25.9188 12.968 24.0281C13.7027 24.1355 14.3645 24.1355 15.1207 23.9422C14.041 23.7228 13.0706 23.1364 12.3742 22.2827C11.6779 21.4289 11.2986 20.3603 11.3008 19.2586V19.1984C11.9324 19.5551 12.6758 19.7742 13.4535 19.8043C12.7997 19.3686 12.2635 18.7782 11.8925 18.0857C11.5215 17.3931 11.3271 16.6197 11.3266 15.834C11.3266 14.9445 11.5586 14.1324 11.9754 13.4277C13.1738 14.903 14.6692 16.1096 16.3645 16.9691C18.0598 17.8285 19.9169 18.3217 21.8152 18.4164C21.1406 15.1723 23.5641 12.5469 26.4773 12.5469C27.8523 12.5469 29.0898 13.1227 29.9621 14.0508C31.0406 13.8488 32.0719 13.4449 32.9914 12.9035C32.6348 14.0078 31.8871 14.9402 30.8945 15.5289C31.857 15.4258 32.7852 15.1594 33.6445 14.7855C32.9957 15.7395 32.1836 16.5859 31.2512 17.2605V17.2605Z"
                                fill="#191919"
                            />
                        </svg>
                        <p className="skillform ml-2">skillform</p>
                    </a>
                </div>
            </footer>
        </div>
    );
};
