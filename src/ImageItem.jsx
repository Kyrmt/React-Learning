import './css/ImageItem.css'


function ImageItem({ image }) {
  console.log(image);
  return (
    <div className='imgcontainer' >
      <div className='desCon'>
        <span className='description'>

      {image.alt_description}

        </span>
        
        </div>
      <div>
        <img
      
      className="imageListImg"
      src={image.urls.small}
    /></div>
    </div>
  );
}

export default ImageItem;
