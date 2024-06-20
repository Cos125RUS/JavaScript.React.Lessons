
const buttonReducer = (state = '', action) => {
    switch (action.type) {
        case 'BUTTON_CLICKED':
            return action.payload;
        default:
            return state;
    }
}

export default buttonReducer;