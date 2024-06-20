import {useSelector} from "react-redux";

const View = () => {
    const viewEl = useSelector(state => state.button);

    return <p>{viewEl}</p>;
};

export default View;