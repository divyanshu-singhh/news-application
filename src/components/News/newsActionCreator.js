let newsActionCreator = {
    search(data) {
        return (dispatch) => {
            dispatch({type:'SEARCH_DATA', data:data})
        }
    }
}


export default newsActionCreator;