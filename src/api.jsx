import axios from "axios";

const searchimages =  async(term) =>{
    
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      headers: {
        Authorization: 'Client-ID GmabtBhanNi75sK4xATMgzeGnYHXtTDQwImzd-RtHbM'
        
      },
      params: {
        query:term
      }
    })

    return response.data.results
}    

export default searchimages