import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react";

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

    return (
        <div className="intro" id="intro">          
            <div className="wrapper">
                <div className="div" className="container">
                    <img src="../assets/bulbasaur.png" alt="" className="icon"/>
                    <img src="../assets/charmander.png" alt="" className="icon"/>
                    <img src="../assets/squirtle.png" alt="" className="icon"/>
                </div>
                
                <h2>Hi, my name is</h2>
                <h1>Jun Kwan</h1>
                <h3>I am a <span ref={textRef}></span></h3>
            </div>
        </div>
    )
}
