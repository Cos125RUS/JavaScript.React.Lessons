import {useState} from "react";


export default function List() {
    const [messages, setMessages] = useState([
        {id: "1", text: "Text01", heading: "Heading 1"},
        {id: "2", text: "Text02", heading: "Heading 2"},
        {id: "3", text: "Text03", heading: "Heading 3"}
    ]);

    return messages.map(message =>
        <>
            <h2>{message.heading}</h2>
            <div key={message.id}>{message.text}</div>
        </>
    );
}