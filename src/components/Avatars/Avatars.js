import { useEffect, useState } from "react";
import { AvatarsAPI } from "./AvatarsAPI";
import styles from "./Avatars.module.css";
import AvatarsImage from "./AvatarsImage";

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

  //props: for notifying change
  const handleAvatarChanged = (avatar) => {
    setState({
      ...state,
      selectedAvatar: avatar,
    });
  };

  return (
    <section>
      <h4>Choose your avatar</h4>
      {state.fetching && <p>Avatars are loading ...</p>}
      <div className={styles.Avatars}>
        {state.avatars.map((avatar) => {
          return (
            <AvatarsImage
              avatar={avatar}
              selected={avatar.id === state.selectedAvatar.id}
              key={avatar.id}
              clicked={handleAvatarChanged}
            />
          );
        })}
      </div>
    </section>
  )
}
export default Avatars
