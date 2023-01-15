import React, { useState, useContext } from 'react'
import './addurl.css'
import urlContext from '../context/urlContext'

function AddUrl() {
    //Creating a useState to store input Field Value
    const [origUrl, setOrigUrl] = useState("");
    const context = useContext(urlContext)
    const { addUrl } = context

    //On submit form It will hit the post request
    const onSubmit = (e) => {
        e.preventDefault();

        if (!origUrl) {
            alert("please enter something");
            return;
        }

        addUrl(origUrl)
        setOrigUrl("")
    }


    return (
        <>
            <h1>URL Shortener</h1>
            <div className="insideconatiner">
                <form onSubmit={onSubmit} >
                    <input
                        className="addurl"
                        type="text"
                        placeholder="http://samplesite.com"
                        value={origUrl}
                        onChange={e => setOrigUrl(e.target.value)}
                    />
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="short">
                            Shorten Url
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default AddUrl