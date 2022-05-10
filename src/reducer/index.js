export const MyReducer = (state, action) => {
    switch (action.type){
        case 'SEARCH_DATA':
            var res = {
                ...state, ...{
                    search:action.data
                }

            }
            return res;

            case 'SUCCESS   ':
                var res = {
                    ...state, ...{
                        success:action.success
                    }
    
                }
                return res;
    }
}
export default MyReducer;