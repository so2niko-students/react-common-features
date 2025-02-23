import React, { useState } from 'react';

const Preview = () => {
    const [imgURL, setImgURL] = useState('');

    const handleFileChange = (ev) => {
        const file = ev.target.files[0];
        if(file){
            const blobURL = URL.createObjectURL(file);
            console.log(blobURL);
            setImgURL(blobURL);
        }
    }

    return (
        <div>
            <input type='file' onChange={handleFileChange} />
            {imgURL ? <img src={imgURL} /> : null}
        </div>
    )
}

export default Preview;