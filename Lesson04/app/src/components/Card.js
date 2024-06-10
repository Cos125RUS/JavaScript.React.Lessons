import BorderComp from "./BorderComp";

export default function Card({title, children}) {
    return (
        <BorderComp>
            <h2>{title}</h2>
            {children}
        </BorderComp>
    );
}