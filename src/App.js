import React,{ useState,useCallback } from 'react'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Routes from './router/Routes'



const App = () => {
  return (

    <div>

      <Router>
        <Navbar/>
        <Routes/>
      </Router>

    </div>
  )
}

export default App
