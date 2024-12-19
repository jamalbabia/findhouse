import { useState } from "react";

export default function FileUploadComponent(){

    const [photos, setPhotos] = useState([]);

    const handleChange = (event) => {
       const fileList = event.target.files;
       const newPhotos = [...photos];
   
       for (let i = 0; i < fileList.length; i++) {
         newPhotos.push(fileList[i]);
       }
   
       setPhotos(newPhotos);
    };
   
    const handleUpload = () => {
       console.log('Photos to upload:', photos);
    };
     
    return(
        <div>
            <input type="file" multiple onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
            <div>
              {photos.map((photo, index) => (
                <img key={index} src={URL.createObjectURL(photo)} alt="photo" />
              ))}
            </div>

        </div>        
    )
}