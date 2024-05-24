import React from 'react';
import ImageItem from './ImageItem';
import './css/ImageItem.css'

function ImageList({ imagePlaceholder }) {
    return (
        <div className='imageList'>
            {imagePlaceholder ?.map((image) => (
                <ImageItem key={image.id} image={image}  />
            ))}
        </div>
    );
}

export default ImageList;
