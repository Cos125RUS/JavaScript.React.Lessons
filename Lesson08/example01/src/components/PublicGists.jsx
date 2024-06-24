import {useCallback, useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";

const API_URL_PUBLIC = "https://api.github.com/gists/public";

const PublicGists = () => {
    const [gists, setGists] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const requestGists = async () => {
        try {
            setLoading(true);
            const response = await fetch(API_URL_PUBLIC);
            if (!response.ok) {
                throw new Error("Error occurred while fetching Gists with status: " + response.status);
            }
            const result = await response.json();
            setGists(result);
        } catch (error) {
            setError(true);
            console.warn(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(gist => (
        <li key={gist.id}>
            <a href={gist.html_url} target="_blank" rel="noopener noreferrer">
                {gist.description || 'No description'}
            </a>
        </li>
    ), []);

    if (loading) return <CircularProgress/>;
    if (error) return (
        <>
            <h3>Error!</h3>
            <button onClick={requestGists}>Retry</button>
        </>
    );
    if (gists.length === 0) return <p>No gists available</p>;
    return (
        <div>
            <h1>Public Gists:</h1>
            <ul>{gists.map(renderGist)}</ul>
        </div>
    );
};

export default PublicGists;