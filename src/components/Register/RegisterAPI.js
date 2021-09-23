export const RegisterAPI = {
  register({ username, password, avatar }) {
    return fetch(
      "https://noroff-react-txt-forum-api.herokuapp.com/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, avatar }),
      }
    ).then(async (response) => {
      if (!response.ok) {
        const { error = "Unknown error occured." } = await response.json();
        throw new Error(error);
      }

      return response.json();
    });
  },
};
