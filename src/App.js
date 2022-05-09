import React,{ useState,useCallback } from 'react'
import News from './components/News/News'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Routes from './router/routes'



const App = () => {
  const [searchData, setSearchData] = useState("");
  const callback = useCallback((searchData) => {
    setSearchData(searchData);
  }, []);
console.log(searchData);

let apiData = `https://newsapi.org/v2/everything?q=${searchData}&apiKey=34a5877b5d4244069c551275a34b93b7`

  return (

    <div>

      <Router>
        <Navbar parentCallback={callback}/>
        {/* <Navbar/> */}
        <Routes/>
      </Router>

    </div>
  )
}

export default App
