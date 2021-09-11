import Lottie from 'react-lottie';
import * as animationData from './75789-pot-plant.json'

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
              height={250}
              width={250}
              isClickToPauseDisabled={true}/>
            {/* <h3 style={{color:'#15023a'}}>Loading...</h3> */}
            
        </div>
    )
}
