import {useEffect, useState} from "react";
import axios from "axios";

const API_URL = "https://api.github.com/gists";

const GistList = () => {
    const [gists, setGists] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                setGists(response.data);
            })
            .catch(error => console.log(error.message));
    }, []);

    return (
        <div>
            <h1>Gists:</h1>
            <ul>
                {gists.map((gist) => (
                    <li key={gist.id}>
                        <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
                            {gist.description || 'No description'}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GistList;