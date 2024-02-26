// import React, { useState } from 'react';
// import "./Dataset.css"

// function FileLoader() {
//   const [fileContent, setFileContent] = useState('');
//   const [jsonArray, setJson] = useState(null)
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = (e) => {
//       const content = e.target.result;
//       setFileContent(content);
//     };

//     reader.readAsText(file);
//     // console.log(fileContent)
//     // const jsonArray = JSON.parse(fileContent);
    
//   };

//   const textToJson = (text) => {
//      const jsonArray = JSON.parse(text);
//      setJson(jsonArray);

//      return jsonArray;
//   }



//   return (
//     <div className='text-center'>
//       <label htmlFor="file-upload" className="custom-file-upload">
//         <input id="file-upload" type="file" onChange={handleFileChange} />
//         Choose File
//       </label>
//       {/* <div>
//         <h2 className='text-white text-3xl'> OR </h2>
//       </div> */}
//       {/* fileContent  */}
//       <pre>{fileContent}</pre>
//       <pre>{fileContent && textToJson(fileContent)}</pre>

//     </div>
//   );
// }

// export default FileLoader;





import React, { useEffect, useState } from 'react';
import './Dataset.css';
import GraphState from '../context/GraphState';

function FileLoader({setgraph}) {
  const [fileContent, setFileContent] = useState('');
  const [jsonArray, setJsonArray] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setFileContent(content);
      textToJson(content);
      // props.onDataLoaded(jsonArray);
    };

    reader.readAsText(file);
  };

  const textToJson = (text) => {
    try {
      const jsonArray = JSON.parse(text);
      setJsonArray(jsonArray);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };
  useEffect(()=>{
    console.log(jsonArray)
    setgraph(jsonArray)
  },[jsonArray])

  return (
    <div className="text-center">
      <label htmlFor="file-upload" className="custom-file-upload">
        <input id="file-upload" type="file" onChange={handleFileChange} />
        Choose Dataset
      </label>

      
    </div>
  );
}

export default FileLoader;
