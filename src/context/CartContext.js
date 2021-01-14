import React, { useEffect, useState } from "react";
import { db } from "fire.js";
import { useLocalCart } from "hooks/useLocalCart";
import { firebase } from "fire";

const Carrito = React.createContext({});

export const CartProvider = ({ children }) => {
  const [storedValue, setValue, emptyStorage] = useLocalCart();
  const [cart, setCart] = useState(storedValue);

  useEffect(() => {
    setValue(cart);
  }, [cart]); //eslint-disable-line

  function addToCart({ cartItem }) {
    let existe = false;
    if (cart.length > 0) {
      setCart(() => {
        const newCart = cart.map((item) => {
          if (item.id === cartItem.id) {
            item.count = item.count + cartItem.count;
            if (item.count > item.stock) {
              item.count = item.stock;
            }
            existe = true;
          }
          return item;
        });

        const filterCart = newCart.filter((item) => item.count > 0);
        return filterCart;
      });
    }
    if (!existe) {
      setCart(() => [...cart, cartItem]);
    }
    console.log(cart);
  }

  //Calcula la cantidad total de todos los items en el carrito
  const calcularCantidad = () => {
    let count = 0;
    if (Array.isArray(cart)) {
      cart.map((item) => {
        count = count + item.count;
        return count;
      });
    }
    return count;
  };

  const totalGasto = () => {
    let count = 0;
    if (Array.isArray(cart)) {
      cart.forEach((item) => {
        count = count + item.count * item.price;
        return count;
      });
    }
    return count;
  };
  // Retorna la cantidad de items agregados de un elemento particular
  const returnCount = ({ id }) => {
    let count = 0;
    if (cart.length > 0) {
      cart.forEach((item) => {
        if (item.id === id) {
          count = item.count;
        }

        return count;
      });
    }
    return count;
  };

  function updateStock(items) {
    const itemsToUpdate = db.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      items.map((i) => i.id)
    );

    const batch = db.batch();

    itemsToUpdate
      .get()
      .then((query) => {
        query.docs.forEach((doc, ind) => {
          if (doc.data().stock >= items[ind].count) {
            batch.update(doc.ref, {
              stock: doc.data().stock - items[ind].count,
            });
          }
        });
      })
      .catch((err) => {
        console.log("Error en updateStock: " + err);
      })
      .finally(() => {
        batch.commit();
      });
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  return (
    <Carrito.Provider
      value={[
        {
          cart,
          setCart,
          addToCart,
          emptyStorage,
          calcularCantidad,
          totalGasto,
          returnCount,
          updateStock,
          removeFromCart,
        },
      ]}
    >
      {children}
    </Carrito.Provider>
  );
};

export default Carrito;
