import React,{ useState,useCallback } from 'react'
import News from './components/News/News'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"



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


        <Switch>
          <Route exact path="/"><News key="home" api="https://newsapi.org/v2/top-headlines?country=in&apiKey=34a5877b5d4244069c551275a34b93b7"/></Route> 
          <Route exact path="/international"><News key="international" api='https://newsapi.org/v2/everything?domains=wsj.com&apiKey=34a5877b5d4244069c551275a34b93b7'/></Route> 
          <Route exact path="/technology"><News key="technology" api="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=34a5877b5d4244069c551275a34b93b7"/></Route> 
          <Route exact path="/science"><News key="science" api="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=34a5877b5d4244069c551275a34b93b7"/></Route>
          <Route exact path="/business"><News key="business" api="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=34a5877b5d4244069c551275a34b93b7"/></Route>
          <Route exact path="/sports"><News key="sports" api="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=34a5877b5d4244069c551275a34b93b7"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" api="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=34a5877b5d4244069c551275a34b93b7"/></Route>
          <Route exact path="/health"><News key="health" api="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=34a5877b5d4244069c551275a34b93b7"/></Route>
          <Route exact path="/about"><h1>This is a demo News-Application project </h1></Route>
          <Route exact path="/contact"><p>demonews@gmail.com</p></Route>
          <Route exact path="/search"><News key="search" api= {apiData} /></Route>



        </Switch>
        

      </Router>

    </div>
  )
}

export default App
