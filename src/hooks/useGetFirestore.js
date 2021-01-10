import { useEffect, useState } from "react";
import { db } from "fire.js";

export function useGetFirestore(collection = "items", cat = "") {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let itemCollection;
    if (cat === "") {
      itemCollection = db.collection(collection);
    } else if (cat === "onSale") {
      itemCollection = db.collection(collection).where("onSale", "==", true);
    } else if (cat === "trending") {
      itemCollection = db
        .collection(collection)
        .orderBy("sold", "desc")
        .limit(10);
    } else {
      itemCollection = db.collection(collection).where("cat", "==", cat);
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
