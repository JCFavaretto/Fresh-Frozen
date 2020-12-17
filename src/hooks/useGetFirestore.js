import { useEffect, useState } from "react";
import { db } from "fire.js";

export function useGetFirestore(where = "", collection = "items") {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const itemCollection = db.collection(collection);
    if (where === "hottest") {
      itemCollection.orderBy("sold", "desc").limit(6);
    } else if (where === "onSale") {
      itemCollection.where("onSale", "==", true);
    }
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No hay resultados!");
        }
        setProductos(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((error) => {
        console.log("Hubo un error buscando los productos: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); //eslint-disable-line

  return { loading, productos };
}
