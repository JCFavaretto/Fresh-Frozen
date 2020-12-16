import React from "react";
import useFirebaseAuthentication from "hooks/useFirebaseAuthentication";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const { user, loading, error } = useFirebaseAuthentication();

  return (
    <AuthContext.Provider value={[{ user, loading, error }]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
