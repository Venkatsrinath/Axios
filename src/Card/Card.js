import React from "react"; 
import "./Card.css";
const Card =(props)=>{
    // const {details}=props
   const{urlToImage,title,description,author,url} = props;
    return(
        <div className="img_container" >
            <img src={urlToImage} alt="import" className="card_img" />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>

    )

}
export default Card;