import {useState} from "react";


export default function Show({data}) {
    const [block, setBlock] = useState();

    const blockShow = () => {
        setBlock(!block);
    }

    return (
        <div>
            <button onClick={blockShow}>Show or hidden</button>
            <p style={{display: block ? 'block' : 'none'}}>{data}</p>
        </div>
    )
}