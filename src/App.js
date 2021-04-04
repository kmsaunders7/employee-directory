import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import UserTable from "./components/UserTable";



function App() {
  //set user State
  const [userState, setUserState] = useState( {user: []})

  useEffect(() => {
    API.getRandomUsers().then((results) => {
      setUserState(results)
    })

  }, [])

  return (
    <Container>
      <Navbar />
      <UserTable users = {userState} />
    </Container>
  )
}

export default App;
