import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const context = useContext(AuthContext);
  
  return (
    // All children have acess to AuthContext its values
      // <AuthContext.Provider value={{
      //   isLoggedIn: isLoggedIn,
      //   onLogout: logoutHandler
      // }}>
      <React.Fragment>
        <MainHeader  onLogout={logoutHandler} />
        <main>
          {!context.isLoggedIn && <Login/>}
          {context.isLoggedIn && <Home/>}
        </main>
      {/* </AuthContext.Provider> */}
      </React.Fragment>
  );
}

export default App;
