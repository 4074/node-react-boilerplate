export default function wrap(types: Array<String>, promise: any, params: any) {
    return function(dispatch: any, getState: any, inspect: any) {
        dispatch({type: types[0]})
        promise(inspect).then(
            (result: any) => dispatch({type: types[1], params, result}),
            (error: any) => dispatch({type: types[2], params, error})
        )
    }
}