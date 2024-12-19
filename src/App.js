import LoginPage from "./Components/loginPage/LoginPage";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Houses/Houses";
import FileUploadComponent from "./Components/FileUploadComponent";
import { useState } from "react";
import "./style.css"
import AddHouse from "./Components/AddHouse/AddHouse";
import Hero from "./Components/hero/Hero";
import Value from "./Components/value/value";
import { BrowserRouter } from "react-router-dom";
import Navbar1 from "./Components/Navbar/Navbar1";
function App() {

  const [photos, setPhotos] = useState([]);

  const handleChange = (event) => {
     const fileList = event.target.files;
     const newPhotos = [...photos];
 
     for (let i = 0; i < fileList.length; i++) {
       newPhotos.push(fileList[i]);
     }
 
     setPhotos(newPhotos);
  };
    return (
      <div>
        <BrowserRouter>
        {/* <Navbar/> */}
        <Navbar1/>
        </BrowserRouter>
        {/* <Hero/> */}
        <input
        type="file"
        multiple
        onChange={handleChange}
      />
      <div className="photos">
        {Array.from(photos).map((photo, index) => (
          <img key={index} src={URL.createObjectURL(photo)} alt="photo" />
        ))}
      </div>

      {/* <AddHouse/> */}

        <Home/>
        <Value/>        
         <LoginPage />
      </div>
    );
}

export default App;
