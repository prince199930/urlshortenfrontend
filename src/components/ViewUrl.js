import React, { useEffect, useContext} from 'react'
import urlContext from '../context/urlContext'
import './viewurl.css'


function ViewUrl() {

  const context = useContext(urlContext)
  const{urls, fetchUrlAndSetUrl} = context

  useEffect(()=>{
    //Here calling get Request to get all Urls from dataBase
    fetchUrlAndSetUrl()
  },[])


  return (
    <div className="maincontainer">
    <table className="table">
      <thead className="table-dark">
        <tr>
          <th>Original Url</th>
          <th>Short Url</th>
          <th>Click Count</th>
        </tr>
      </thead>
      <tbody>
        {urls.map((url, id) => (
          <tr key={id}>
            <td>{url.origUrl.length>30?url.origUrl.slice(0,30):url.origUrl}</td>
            <td>
              <a style={{color:'#fff'}} href={`${url.shortUrl}`}>{url.urlId}</a>
            </td>
            <td>{url.clicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ViewUrl