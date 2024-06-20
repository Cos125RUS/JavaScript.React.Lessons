
export const fetchUserData = () => async dispatch => {
    dispatch({type: 'FETCH_USER_START'});

    try {
        const response = await fetch('https://apiactions.ru');
        const userDate = await response.json();
        dispatch({type: 'FETCH_USER_SUCCESS', payload: userDate});
    } catch (error) {
        dispatch({type: 'FETCH_USER_ERROR', payload: error.message});
    }
};