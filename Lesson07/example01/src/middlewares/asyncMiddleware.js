const asyncMiddleware = store => next => action => {
    if (action.type === 'FETCH_DATA_REQUEST') {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => res.json())
            .then(data => {
                store.dispatch({type: 'FETCH_DATA_SUCCESS', payload: data});
            })
            .catch(err => {
                store.dispatch({type: 'FETCH_DATA_FAILURE', payload: err.toString()});
            });
    }
    return next(action);
}

export default asyncMiddleware;