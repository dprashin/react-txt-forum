import { useEffect } from "react"
import { AvatarsAPI } from "./AvatarsAPI"

const Avatars = () => {

    useEffect(() => { //emulates componentDidMount
        AvatarsAPI.getAvatars()
        .then(avatars => {
            console.log('Avatars.getAvatars()', avatars);
        })
        .catch(error => {
            console.error('Avatars.getAvatars()', error);
        })
    }, [])

    return (
        <section>
            <h4>Choose your avatar</h4>
        </section>
    )
}
export default Avatars