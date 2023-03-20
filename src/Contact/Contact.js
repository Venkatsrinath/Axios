import "./Contact.css"
const Contact =()=>{
    return(
        <div >
            <h1 className="h1">Register Form</h1>
            <div  className="div_form">
            <form  > 
        <label>FNAME:</label> <br/> 
         <input type="text" name="fname"></input><br/>
         <label> LNAME:</label><br/>
            <input type="text" name="lname"></input><br/>
            <label>EMAIL</label><br/>
            <input type="email" name="lname"></input><br/>
            <button type="submit">submit</button>
            </form>
            </div>

        </div>
    )
}
export default Contact;