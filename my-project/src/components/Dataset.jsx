import React, { useState } from 'react';
import "./Dataset.css"

function FileLoader() {
  const [fileContent, setFileContent] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setFileContent(content);
    };

    reader.readAsText(file);
  };

  return (
    <div className='text-center'>
      <label htmlFor="file-upload" className="custom-file-upload">
        <input id="file-upload" type="file" onChange={handleFileChange} />
        Choose File
      </label>
      <div>
        <h2 className='text-white text-3xl'> OR </h2>
        {/* <pre>{fileContent}</pre> */}
      </div>
    </div>
  );
}

export default FileLoader;
