import {REQUEST, RECEIVED, CLALERT} from './actions'

export default (state = {
    request: false,
    data: {},
    alert: false
}, action)=>{
    switch(action.type){
        case REQUEST:
            return {...state, request:true, data:{}}
        case RECEIVED:
            if(action.payload.msg !='Success')
            return {...state, data: action.payload, request: false, alert:true}
            return {...state, data: action.payload, request: false,}
        case CLALERT:
            return {...state, alert: false}

        default :
            return {...state}
    }
}