import { useEffect, useState } from "react";
import { AvatarsAPI } from "./AvatarsAPI";
import styles from './Avatars.module.css'

const Avatars = () => {
  const [state, setState] = useState({
    avatars: [],
    fetching: true,
    selectedAvatar: -1,
    error: "",
  });

  useEffect(() => {
    //emulates componentDidMount
    AvatarsAPI.getAvatars()
      .then((avatars) => {
        // console.log('Avatars.getAvatars()', avatars);
        setState({
          ...state,
          error: "",
          fetching: false,
          avatars, //objet literal. Actuall could be written as: avatars: avatars
        });
      })
      .catch((error) => {
        // console.error('Avatars.getAvatars()', error);
        setState({
          ...state,
          error: error.message,
          fetching: false,
        });
      });
  }, []);

  return (
    <section>
      <h4>Choose your avatar</h4>
      {state.fetching && <p>Avatars are loading ...</p>}
      <div className= {styles.Avatars}>
        {state.avatars.map((avatar) => (
          <img  className= { styles.AvatarsImage } key={avatar.id} src={avatar.url} alt="Avatar" />
        ))}
      </div>
    </section>
  );
};
export default Avatars;
