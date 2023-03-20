import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useState,useEffect } from "react";
import Card from "../Card/Card" ;
import  axios from "axios";
import "./General.css"

const General = (props)=>{
    // console.log(props)
    const[loading,setLoading] =useState(false);
    const[data,setData] =useState([]);
    const[error,seterror]=useState(false);
    // `https://newsapi.org/v2/top-headlines/country=${props.country}&category=${props.category}&apiKey=6377389d68774b0aa3473a466b02f62f&page=${props.page}&pagesize=${props.pagesize}`
    // sources?
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=6377389d68774b0aa3473a466b02f62f
    // https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=6377389d68774b0aa3473a466b02f62f
    async function getTopheadlines (){
        setLoading(true);
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=6377389d68774b0aa3473a466b02f62f&category=${props.category}`)
        // const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=trump&apiKey=6377389d68774b0aa3473a466b02f62`)
       
      
      console.log(response.data);
        
    //   6377389d68774b0aa3473a466b02f62f
      if(response.data.status === "ok"){
        setLoading(false);
        setData(response.data.articles);
      }
      else{
        setLoading(false);
        setData([])
        seterror(true)
      }
    }
    // console.log(data);
    useEffect(()=>{
        getTopheadlines ()
    },[])
    
    return(
       
        
        <div>
            <Header/>
            {/* <div>
                {loading && data.length <=0 && <h4>loading...</h4>}
            </div> */}
              <div className="map_container">
                {data.map((n)=>(
                    <Card key ={n.publishedAt}
                    urlToImage ={n.urlToImage}
                    title={n.title}
                    description={n.description}
                    author={n.author}
                    url={n.url}
                   
                    />
                ))}
                </div>
                
            
            <Footer/>
        </div>
    )
}
export default General;