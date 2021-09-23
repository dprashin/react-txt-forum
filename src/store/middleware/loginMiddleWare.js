import { LoginAPI } from "../../components/Login/LoginAPI"
import { ACTION_LOGIN_ATTEMPTING, ACTION_LOGIN_SUCCESS, loginSuccessAction, loginErrorAction } from "../actions/loginActions"
import { sessionSetAction } from "../actions/sessionActions"

//making asychronous call in middleware
export const loginMiddleware = ({ dispatch }) => next => action => {
    next(action)

    if(action.type === ACTION_LOGIN_ATTEMPTING){
        //make an http request to login
        LoginAPI.login(action.payload)
            .then(profile => {
                //LOGIN_SUCCESS
                dispatch(loginSuccessAction(profile))
            })
            .catch(error => {
                //ERROR
                dispatch(loginErrorAction(error.message))
            })
    }

    if(action.type === ACTION_LOGIN_SUCCESS){
        //do something
        dispatch(sessionSetAction(action.payload))
    }
}