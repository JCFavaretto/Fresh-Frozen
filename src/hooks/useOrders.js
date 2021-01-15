import { useState, useEffect } from "react";
import { db } from "fire";
import { useContext } from "react";
import AuthContext from "context/AuthContext";

export function useOrders() {
  const [{ user }] = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (user.loggedIn) {
      const itemCollection = db.collection("orders");
      if (user.orders && user.orders.length > 0) {
        user.orders.forEach((id) => {
          itemCollection
            .doc(id)
            .get()
            .then((doc) => {
              const item = { id: id, ...doc.data() };
              return item;
            })
            .then((item) => {
              setOrders((list) => [...list, item]);
            })
            .then(() => {
              const last = user.orders.length - 1;
              if (user.orders[last] === id) {
                setLoading(false);
              }
            })
            .catch((error) => {
              console.log(
                "Hubo un error buscando la lista de ordenes de compra: ",
                error
              );
            });
        });
      }
    }
  }, [user.orders]); //eslint-disable-line

  return { loading, orders };
}
