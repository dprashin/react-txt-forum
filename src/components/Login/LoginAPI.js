import { handleFirstResponse } from "../../utils/apiUtils"

export const LoginAPI = {
    login(credentials) {
        return fetch('https://noroff-react-txt-forum-api.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(handleFirstResponse)
    }
}