import PropTypes from "prop-types";


const Student = ({name, age, isStudent}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>{isStudent ? 'Student' : 'Not student'}</p>
        </div>
    );
};

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool
};

export default Student;