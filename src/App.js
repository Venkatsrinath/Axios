// import logo from './logo.svg';
// import Header from "./Header/header"
// import Footer from "./Footer/footer"
// import Center from "./Center/center"
// import Homepage from "../Homepage/Homepage"
import Homepage from "./Homepage/Homepage";
import Second from "./Second/Second";
import General from "./General/General"
// import Contact from "./Contact/Contact"
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/time" element={<Homepage/>}/>
      <Route path ="/general" element={<General  category="general"
      key="general" country ="us" page={1}
      pagesize={10}/>}/>
      <Route path="/business" element={<General key="business"
      category="business" country ="us" page={1}
      pagesize={10}/>}/>
      <Route path ="/entertainment" element={<General
      key ="entertainment" country ="us"
      category="entertainment"
      url="url" page={1}
      pagesize={10}/>}/>
      <Route path ="/health" element={<General
      key="health"
      category="health" country ="us" page={1}
      pagesize={10}/>}/>
      <Route path ="/science" element={<General key="science"
      
      category="science" country ="us" page={1}
      pagesize={10}/>}/>
      <Route path ="/sports"
      element={<General
      category="sports"
      key ="sports" country ="us" page={1}
      pagesize={10}/>}/>
      <Route path ="/technology" 
    element={<General
    key="technology"
      category="technology" country ="us" page={1}
      pagesize={10}/>}/>
        <Route path="contact" element={<Second/>}/>

      
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
