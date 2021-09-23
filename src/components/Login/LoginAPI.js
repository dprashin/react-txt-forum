export const LoginAPI = {
    login(credentials) {
        return fetch('https://noroff-react-txt-forum-api.herokuapp.com/users/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then( async (response) => {
            if(!response.ok) {
                const { error = 'An unknown error occured' } =  await response.json()
                throw new Error(error) //force it into a catch
            }
            return response.json()
        })
    }
}