import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  // Better IDE Completion
  onLogout: () => {},
  onLogin: (email, password) => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

// Executed AFTER every component reevaluation, but only if dependecies change
// Would only run once, when app starts, because dependcies dont change
  useEffect(() => {
    const storedUderLoggedInInformation = localStorage.getItem('isLoggedIn');
    
    if(storedUderLoggedInInformation === '1'){
      setIsLoggedIn(true);
    } 
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
