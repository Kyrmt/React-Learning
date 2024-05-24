import SearchHeader from "./SearchHeader"
import searchImages from "./api";
import { useState } from "react";
import Imagelist from "./ImageList";


function App() {
  const [images, setImages] = useState();
  const handlesubmit = async (term) =>{

      searchImages(term)
      const result = await searchImages(term)
      setImages(result);
  }
  return (
    <>
     <SearchHeader search={handlesubmit}/>
     <Imagelist imagePlaceholder = {images}/>
    </>
  )
}

export default App
