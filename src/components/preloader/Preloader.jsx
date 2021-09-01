import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Preloader() {
    return (
        <div style={{width: "100vw", height:"70vh", display: "flex", alignItems : "center", justifyContent : "center"}}>
            <Loader
                type="Grid"
                color="#15023a"
                height={50}
                width={50}
                timeout={2000} //2 secs
            />
        </div>
    )
}
