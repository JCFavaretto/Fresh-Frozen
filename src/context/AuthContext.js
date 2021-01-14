import React from "react";
import useFirebaseAuthentication from "hooks/useFirebaseAuthentication";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const { user, loading, error } = useFirebaseAuthentication();

  function updateOrders(id) {
    user.orders.push(id);
  }

  return (
    <AuthContext.Provider value={[{ user, loading, error, updateOrders }]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
