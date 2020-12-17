import { useState, useEffect } from "react";
import { db } from "../fire";

export function useSingleFirestore(id) {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          setError("El producto no existe! ");
          return;
        }
        setProducto({ id, ...doc.data() });
      })
      .catch((error) => {
        setError(error);
        console.log("Hubo un error buscando el producto : ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); //eslint-disable-line

  return { loading, producto, error };
}
