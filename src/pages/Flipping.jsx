import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import Flip from 'gsap/Flip';
import React, { useRef } from 'react'

export const Flipping = () => {
    const container= useRef(); // outer div reference
    const smallRef= useRef(); // small image reference
    const bigRef= useRef(); // big image reference

    // using useGSAP hook within a safe context for automatic cleanup after render
    const { contextSafe } = useGSAP({scope: container}); //useGSAP hook is the gsap equivalent of the useEffect hook specially for animations

    const animateState = contextSafe(() => {
        // registering the plugin
        gsap.registerPlugin(Flip)
        // catching the position states of the two elements between which we will change the state to
        const state = Flip.getState(".small, .big");

        // let's say we hide one element  on click and make the other visible
        bigRef.current.classList.toggle("hidden");
        smallRef.current.classList.toggle("hidden");

        // Flip plugin to make the animation between the state very smooth
        Flip.from(state, {
            duration: 1,
            fade: true,
            absolute: true,
            toggleClass: "flipping",
            ease: "power1.inOut" 
          });
    })
    return (
        <div ref={container} className="flex items-center justify-center min-h-screen w-full">
            <img data-flip-id="img" src="https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" alt="image1" ref={smallRef} className="small w-60 h-auto object-contain rounded-xl cursor-pointer" onClick={animateState} />
            <img data-flip-id="img" src="https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" alt="image2" ref={bigRef} className="big hidden object-cover w-full h-full" />
        </div>
    )
}
