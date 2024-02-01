'use client'
import KUTE from 'kute.js';
import { useEffect } from 'react';


export default function HeroBackground() {

    useEffect(() => {
        const tween = KUTE.fromTo("#blob1", { path: "#blob1" }, { path: "#blob2"}, { repeat: Infinity, yoyo: true, duration: 10000, morphPrecision: 2 });
        tween.start();
    },[])

    return <div className="svg_container w-screen h-screen overflow-hidden absolute -z-50 bg-black flex align-middle justify-center">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path id="blob1" fill="#FF0066" d="M70.6,-22.8C79.2,3.5,65.4,37.3,42.2,53C18.9,68.8,-13.9,66.5,-35.9,50.3C-57.9,34.1,-69.1,4,-61.4,-21.2C-53.6,-46.3,-26.8,-66.5,2.1,-67.2C31,-67.9,62,-49.1,70.6,-22.8Z" transform="translate(100 100)" />
            <path id="blob2" style={{ visibility:"hidden" }} fill="#FF0066" d="M23.8,-35.3C30,-37.7,33.4,-29.5,34.6,-21.8C35.8,-14.2,34.8,-7.1,38.4,2.1C42,11.3,50.3,22.6,45.4,23.7C40.4,24.8,22.2,15.8,12.4,26.3C2.6,36.8,1.3,66.9,-5.5,76.3C-12.2,85.8,-24.5,74.7,-27.2,60.2C-30,45.6,-23.2,27.6,-32.6,17C-42,6.3,-67.5,3.2,-78.4,-6.3C-89.4,-15.8,-85.8,-31.6,-74.9,-39.6C-64,-47.5,-45.7,-47.6,-32,-40.7C-18.3,-33.9,-9.2,-20.2,-0.2,-19.9C8.8,-19.6,17.7,-32.8,23.8,-35.3Z" transform="translate(100 100)" />
        </svg>
    </div>
}