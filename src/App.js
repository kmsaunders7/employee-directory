import React, { useState } from "react";
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import Search from './components/Search'
import UserTable from "./components/UserTable";



function App() {
  // const[searchName, setSearchName] = useState("");
  // const[sorted, setSorted] = useState(false);
  // // const[data, setUsers] = useState("user");

  // function handleSearch(event) {
  //   setSearchName(event.target.value)
  // }

  // function handleSort() {
  //   if (!sorted) {
  //     setUsers(data.sort((a, b) => (a.name > b.name) ? 1 :-1));
  //     setSorted(true);
  //   } else {
  //     setUsers(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
  //     setSorted(false);
  //   }
  // }

  // const filteredUsers = data.filter(user => user.name.toLowerCase().startsWith(searchName.toLowerCase()));


  return (
    <Container>
      <Navbar />
      <Search 
        // onSearch={handleSearch}
        // searchName={searchName}
        // handleSort={handleSort}
       />
      <UserTable 
        // data={filteredUsers} 
        />
    </Container>
  )
}

export default App;
