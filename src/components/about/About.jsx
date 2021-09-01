import "./about.scss"
import Lottie from 'react-lottie';
import * as animationData from './74635-codework.json'

export default function About() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div className="about">
            <h1>About Me</h1>
            <div className="wrapper">
                <div className="lottie">
                    <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    />
                </div>
                <div className="text">
                    <p>&emsp; Hi, my name is Jun Kwan and I am passionate about technology. As an individual with strong interests in computer architecture, software and machine learning, I studied Electrical and Computer Systems Engineering (ECSE) at Monash University. Upon my graduation in Jan 2021, I intended to pursue a career in software engineering because I would love to create and design an innovative software product. During my free time, I enjoy reading and playing video games.</p>
                    <p>(Animation by Santiago Pasciullo on LottieFiles)</p>
                </div>
            </div>
        </div>
    )
}
