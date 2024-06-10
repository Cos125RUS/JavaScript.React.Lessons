export default function BorderComp({children}) {
    return (
        <div style={{border: "2px solid black", padding: "16px"}}>
            {children}
        </div>
    );
}