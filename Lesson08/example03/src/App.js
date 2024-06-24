import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import ImageList from "./ImageList";

const ACCESS_KEY = '9J7E2eUNDZoBxV94vNQ68v4LJOMKghzu0MWzHUEpLSI';

function App() {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');

    const onInputChange = (e) => {
        setQuery(e.target.value);
    };

    const searchImages = async () => {
        const url = query
            ? 'https://api.unsplash.com/search/photos?query=' + query
            : 'https://api.unsplash.com/photos/random?count=10';

        try {
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Client-ID ${ACCESS_KEY}`
                }
            });

            const imagesData= query ? response.data.results : response.data;
            setImages(imagesData);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        searchImages();
    }, []);

    return (
        <div style={{textAlign: "center", padding: "10px"}}>
            <h2 style={{fontSize: "2rem"}}>Unsplash Gallery</h2>
            <input type="text" value={query} onChange={onInputChange} placeholder="Search..."/>
            <button onClick={searchImages}>Search</button>
            <ImageList images={images}/>
        </div>
    );
}

export default App;
