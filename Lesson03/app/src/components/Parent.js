import {useState} from "react";
import {Button} from "@mui/material";

function ParentCounter() {
    const [count, setCount] = useState(0);
    console.log('Parent')
    const upCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Parent</h2>
            <ChildCount count={count}/>
            <Button variant="contained" onClick={upCount}>+</Button>
        </div>
    );
}

function ChildCount({count}) {
    console.log('click')
    return (
        <div>
            <p>Counter inside</p>
            <p>Counter value {count}</p>
        </div>
    );
}

export default ParentCounter;