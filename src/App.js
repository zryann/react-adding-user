import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (name, age) => {
    setUsersList((prev) => [
      ...prev,
      { name, age, id: Math.random().toString() },
    ]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
