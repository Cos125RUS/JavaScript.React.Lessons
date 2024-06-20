import {useSelector} from "react-redux";

const ViewFromData = () => {
    const data = useSelector((state) => state.persist.data)

    return <p>Data: {data}</p>
};

export default ViewFromData;