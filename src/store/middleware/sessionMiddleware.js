import { ACTION_SESSION_INIT, ACTION_SESSION_SET, sessionSetAction } from "../actions/sessionActions"

export const sessionMiddleware = ({ dispatch }) => next => action => {
    next(action)
    if(action.type === ACTION_SESSION_INIT){
        //read local storage
        const storedSession = localStorage.getItem('rtxtf-ss')
        //check if session exists
        if(!storedSession) {
            return
        }
       const session = JSON.parse(storedSession)
       dispatch(sessionSetAction(session))
    }
    if(action.type === ACTION_SESSION_SET){
        //store session somewhere
        localStorage.setItem('rtxtf-ss', JSON.stringify(action.payload))
    }
}