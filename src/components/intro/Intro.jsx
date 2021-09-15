import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react";
import Lottie from 'react-lottie';
import * as animationData from './37270-robot-says-hi.json'

export default function Intro() {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, { 
            backDelay: 1500,
            backSpeed: 60, 
            showCursor: true,
            strings: ['Developer', 'Creator'] 
        });
    }, [])

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className="intro" id="intro">          
            <div className="wrapper">
                <div className="container">
                    <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    isClickToPauseDisabled={true}
                    className="robot"
                    />
                </div>
            
                <h2>I am a <span ref={textRef}></span></h2>
            </div>
        </div>
    )
}
