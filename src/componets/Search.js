import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => { 
        const google = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming', {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        } 

        if (term !== "" && results !== []) {
            google()
        } else {
            const timerId = setTimeout(() => {
                if(term) {
                    google()
                }
            }, 500)
    
            return () => {
                clearTimeout(timerId)
            }
        }
        
    }, [term, results])

    const resultsRendered = results.map((result) => {
        return ( 
        <div key={result.pageid} className="item">
            <div className="content">
                {result.title}
                <div className="header">
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
                <div className="right floated content">
                    <a
                            className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        >
                        Go
                    </a>
                </div>
            </div>
        </div>
        )
    })

    return ( 
        <React.Fragment>
        <div className="ui form">
            <div className="field">
                <label>
                    Enter your search:
                </label>
                <input 
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </div>
        </div>
        <div className="ui celled list">
            {resultsRendered}
        </div>
        </React.Fragment>
     );
}

export default Search;
 