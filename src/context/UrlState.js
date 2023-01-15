import react, { useState } from "react";
import UrlContext from "./urlContext";
import axios from 'axios';


function UrlState(props) {
    const [urls, setUrls] = useState([]);
    // const baseUrl = 'https://urlshorten-5qph.onrender.com'
    const baseUrl = 'http://localhost:8000'
    const fetchUrlAndSetUrl = async () => {
        const result = await axios(`${baseUrl}/api/url/fetchallurls`);
        setUrls(result.data);
      };

    const addUrl = async (origUrl) =>{
        const response = await axios.post(`${baseUrl}/api/url/addurl`, {origUrl}).then((resp)=>resp.data).catch((err=>console.log(err)));
        fetchUrlAndSetUrl()
    }
  
    return (
        <UrlContext.Provider value={{urls, setUrls, fetchUrlAndSetUrl,addUrl  }}>
            {props.children}
        </UrlContext.Provider>
    )
}

export default UrlState;