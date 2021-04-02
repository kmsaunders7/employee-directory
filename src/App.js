import React, { useState, useEffect } from "react";
import API from "./utils/API";
import { Container } from 'react-bootstrap'
import Navbar from './components/Navbar'



function App() {
  API.getRandomUsers()

  return (
    <Container>
      <Navbar />
    </Container>
  )
}

export default App;
