export default function FetchApiData(param){
    // return (dispatch) => {
    //     return new Promise((resolve, reject) => {
    //         fetch(param).then(
    //             (data) => {
    //                 if (data.response) {
    //                     let response = data.response;
    //                     dispatch({ type: 'SUCCESS', success: true, response });
    //                 }
    //                 resolve(data);
    //             },
    //             (error) => dispatch({ type: 'SUCCESS', success: false })
    //         );
    //     })

    // }
    return fetch(param)
    .then(response => response.json())
}