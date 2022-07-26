import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import Package from "./components/Package/Package";
import Activity from "./components/Activity/Activity";
import Destination from "./components/Destination/Destination";
import Blogs from "./components/Blogs/Blogs"
import Aboutus from "./components/Aboutus/Aboutus"
import Contactus from "./components/Contactus/Contactus"
import Homepackage from "./homecomponents/homepackage/Homepackage";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./components/context";
function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div  style={{backgroundColor:darkMode? "black":"white", color:darkMode && "White"}}>
    <BrowserRouter>
        <Navbar2/>
        <Toggle/>
        <Routes>
        <Route path="/" element={<Homepackage/>}/>
          <Route path = "/package" element={<Package/>}/>
          <Route path="/destination" element={<Destination/>}/>
          <Route path="/activity" element={<Activity/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
        </Routes>
        </BrowserRouter>
        </div>

      
       
  );
}

export default App;
