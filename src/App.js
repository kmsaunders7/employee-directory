import React from "react";

import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'
import UserTable from "./components/UserTable";



function App() {


  return (
    <Container>
      <Navbar />
      <UserTable  />
    </Container>
  )
}

export default App;
