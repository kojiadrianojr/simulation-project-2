import Api from './../../controller/Api'

const REDUCER_API = (state = Api.PING(), action) => {
    switch(action.type){
        case 'PING':
            return state = Api.PING()
        default:
            return state
    }
}

export default REDUCER_API  