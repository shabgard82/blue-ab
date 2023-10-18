// import axios from 'axios';

// import React, { Component } from 'react';

// class UploadImg extends Component {

// 	state = {

// 		// Initially, no file is selected
// 		selectedFile: null
// 	};

// 	// On file select (from the pop up)
// 	onFileChange = event => {

// 		// Update the state
// 		this.setState({ selectedFile: event.target.files[0] });

// 	};

// 	// On file upload (click the upload button)
// 	onFileUpload = () => {

// 		// Create an object of formData
// 		const formData = new FormData();

// 		// Update the formData object
// 		formData.append(
// 			"myFile",
// 			this.state.selectedFile,
// 			this.state.selectedFile.name
// 		);

// 		// Details of the uploaded file
// 		console.log(this.state.selectedFile);

// 		// Request made to the backend api
// 		// Send formData object
// 		axios.post("api/uploadfile", formData);
// 	};

// 	// File content to be displayed after
// 	// file upload is complete
// 	fileData = () => {

// 		if (this.state.selectedFile) {

// 			return (
// 				<div>
// 					<h2>File Details:</h2>
// 					<p>File Name: {this.state.selectedFile.name}</p>

// 					<p>File Type: {this.state.selectedFile.type}</p>

// 					<p>
// 						Last Modified:
// 						{this.state.selectedFile.lastModifiedDate.toDateString()}
// 					</p>

// 				</div>
// 			);
// 		} else {
// 			return (
// 				<div>

// 				</div>
// 			);
// 		}
// 	};

// 	render() {

// 		return (
// 			<div>

// 				<h4>
// 					Upload your national card image !
// 				</h4>
// 				<div>
// 					<input type="file" onChange={this.onFileChange} />
// 					<button onClick={this.onFileUpload} >
// 						Upload!
// 					</button>
// 				</div>
// 				{this.fileData()}
// 			</div>
// 		);
// 	}
// }

// export default UploadImg;
// import React from "react";
// import Styles from './styles.module.css'
// import ImageUploading from "react-images-uploading";

// function UploadImg() {
//   const [images, setImages] = React.useState([]);
//   const maxNumber = 69;

//   const onChange = (imageList, addUpdateIndex) => {
//     // data for submit
//     console.log(imageList, addUpdateIndex);
//     setImages(imageList);
//   };

//   return (
//     <div className="App">
//       <ImageUploading
//         multiple
//         value={images}
//         onChange={onChange}
//         maxNumber={maxNumber}
//         dataURLKey="data_url"
//       >
//         {({
//           imageList,
//           onImageUpload,
//           onImageRemoveAll,
//           onImageUpdate,
//           onImageRemove,
//           isDragging,
//           dragProps,
//         }) => (
//           // write your building UI
//           <div className="upload__image-wrapper">
//             <button
// 							className={Styles.btn}
//               style={
//                 isDragging
//                   ? { color: "red", backgroundColor: "white", border: "none" }
//                   : undefined
//               }
//               onClick={onImageUpload}
//               {...dragProps}
//             >
//               upload image here
//             </button>

//             {imageList.map((image, index) => (
//               <div key={index} className="image-item">
//                 <img src={image["data_url"]} alt="" width="100" />
//                 <div className="image-item__btn-wrapper">
//                   <button onClick={() => onImageUpdate(index)}>Update</button>
//                   <button onClick={() => onImageRemove(index)}>Remove</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </ImageUploading>
//     </div>
//   );
// }
// export default UploadImg;
import React, { useState } from 'react'
import styles from './styles.module.css';
import Webcam from 'react-webcam'
import { Button, Stack, Typography } from '@mui/material';
const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
}
const UploadImg = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  })
  return (
    <Stack sx={{padding:"0px 10px"}}>
      <Stack pt={1} display="flex" direction="row"justifyContent="center">
        {picture == '' ? (
          <Webcam
            audio={false}
            height={100}
            ref={webcamRef}
            width={200}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </Stack>
      <Stack className={styles.btn} pt={2} display="flex" direction="row" justifyContent="center">
        {picture != '' ? (
          <Button
					variant="contained" href="#contained-buttons"
            onClick={(e) => {
              e.preventDefault()
              setPicture()
            }}
            
          >
            Retake
          </Button>
        ) : (
          <Button
					variant="contained" href="#contained-buttons"
					
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className={styles.btn}
          >
            take photo
          </Button>
        )}
      </Stack>
    </Stack>
  )
}
export default UploadImg;
