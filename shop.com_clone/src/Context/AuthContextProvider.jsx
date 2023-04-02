import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  const CheckUser = (user) => {
    return users.find((u) => {
      if (u.email === user.email && u.password === user.password) {
        toggleAuth(true);
        setUser(u.username);
        alert("Login Successful");
      } else {
        alert("Login Failed");
      }
    });
  };

  const addUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth, addUser, CheckUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
