import React from "react";
import firebase from "firebase/app";
import { auth, db } from "fire";
import google from "assets/google.svg";
import { useHistory } from "react-router-dom";

function GoogleSignIn() {
  const history = useHistory();

  const handleClick = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then(function (result) {
        const user = result.user;
        console.log(user);
        return user;
      })
      .then((user) => {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((querySnapshot) => {
            if (!querySnapshot.exists) {
              db.collection("users")
                .doc(user.uid)
                .set({
                  name: user.displayName,
                  Email: user.email,
                  date: new Date(),
                  role: "user",
                  wishlist: [],
                  orders: [],
                  phoneNumber: "",
                  address: {
                    street: "",
                    number: "",
                    dept: "",
                    floor: "",
                  },
                });
            }
          });
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        history.push("/");
      });
  };

  return (
    <div
      className="btn btn-google hover-pointer d-flex  justify-content-center"
      style={{ margin: "1rem auto" }}
      onClick={handleClick}
    >
      <img src={google} width="35px" alt="G" />
      <p>Conectarse con Google</p>
    </div>
  );
}

export default GoogleSignIn;
