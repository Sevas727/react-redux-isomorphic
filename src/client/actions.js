export function fetchData() {
    return (dispatch) => {
        dispatch({
            type: 'request'
        });
        return fetch('http://api.itboost.org:88/app_dev.php/api/events')
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: 'success',
                    payload: data.response
                });
            });
    };
}