import { useState, useEffect } from "react";
import { fb, db } from "fire";

const useFirebaseAuthentication = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unlisten = fb.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        const { uid } = authUser;
        const loggedIn = true;
        const userCollection = db.collection("users");
        const data = userCollection.doc(uid);
        data
          .get()
          .then((doc) => {
            if (!doc.exists) {
              setError("El usuario no existe! ");
              return;
            }
            setUser({ uid, loggedIn, ...doc.data() });
          })
          .catch((error) => {
            setError(error);
            console.log("Hubo un error iniciando sesion : ", error);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
        setUser([{ loggedIn: false, isAuthorized: false, uid: [] }]);
      }
    });
    return () => {
      unlisten();
    };
  }, []); //eslint-disable-line

  return { user, loading, error };
};

export default useFirebaseAuthentication;
