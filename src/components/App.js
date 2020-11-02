import React, { useEffect, useState } from "react";
import MainRouter from "components/Router";
import { authService } from "fb";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? (
        <MainRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default App;
