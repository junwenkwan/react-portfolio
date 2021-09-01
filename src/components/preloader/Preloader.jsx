import Lottie from 'react-lottie';
import * as animationData from './74468-rocket.json'

export default function Preloader() {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <div style={{width: "100vw", height:"auto", display: "flex", flexDirection: "column", alignItems : "center", justifyContent : "center"}}>
            <Lottie options={defaultOptions}
              height={300}
              width={300}/>
            <p style={{color:'#15023a'}}>Animation by</p>
            <p style={{color:'#15023a'}}>Lex Komkov</p>
            
        </div>
    )
}
