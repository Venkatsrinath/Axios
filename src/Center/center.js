import Banned from "../Image/tree.jpg";
import "./center.css"

const Center =()=>{
    return(
        <div className="center_div" >
            <p>Welcome to app.</p>
            <img className="img_tag" src={Banned} alt="logo"  height ="200px" width="400px"/>
            {/* <p>Welcome to app.</p> */}
            
        </div>
    )
}
export default Center;