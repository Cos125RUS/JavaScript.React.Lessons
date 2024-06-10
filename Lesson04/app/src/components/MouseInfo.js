const MouseInfo = ({x,y}) => {
    return (
        <div>
            <h1>Cursor position:</h1>
            <p>X: {x}; Y: {y}</p>
        </div>
    );
}

export default MouseInfo;