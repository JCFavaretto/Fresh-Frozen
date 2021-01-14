import { useState, useEffect } from "react";
import { db, auth } from "fire";
import { useLocalUser } from "hooks/useLocalUser";

const useFirebaseAuthentication = () => {
  const [storedValue, setValue, emptyStorage] = useLocalUser();

  const [user, setUser] = useState(storedValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((authUser) => {
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
            return { uid, loggedIn, ...doc.data() };
          })
          .then((user) => {
            const { uid, loggedIn, name, Email } = user;
            const data = {
              uid,
              loggedIn,
              name,
              Email,
            };
            setValue(data);
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
        emptyStorage();
        setUser([{ loggedIn: false, uid: [] }]);
      }
    });
    return () => {
      unlisten();
    };
  }, []); //eslint-disable-line

  return { user, loading, error };
};

export default useFirebaseAuthentication;
