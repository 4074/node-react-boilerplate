import wrap from '../../wrap'

const LOAD = 'time/LOAD'
const LOAD_SUCCESS = 'time/LOAD_SUCCESS'
const LOAD_FAIL = 'time/LOAD_FAIL'

export default function reducer(state: any = {}, action: any = {}) {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                loading: true
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.result
            }
        case LOAD_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false
            }
        default:
            return state
    }
}

export function load(params: any) {
    return wrap([LOAD, LOAD_SUCCESS, LOAD_FAIL], (inspect: any) => {
        return inspect.service.time.loadNow({format: 'yyyy'})
    }, params)
}