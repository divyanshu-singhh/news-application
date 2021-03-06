import React, { useState } from 'react'
import newsActionCreator from '../News/newsActionCreator'
import { myStore } from '../../store/myStore'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {Swiper} from "./Swiper"
function Navbar() {
    const [searchData, setSearchData] = useState("");

    return (
        <>
            <div className="bg-dark">
                <nav className="navbar navbar-dark  navbar-expand-md">
                    <div className="container">
                        <button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <Link className="navbar-brand" to="/" style={{ color: "white" }} >News Application</Link>



                        <div className="searchinput d-flex">
                            <input className="searchbar form-control" type="search" placeholder="Search" aria-label="Search" onChange={e => setSearchData(e.target.value)} />
                            {/* <div onClick={myStore.dispatch({type:'SEARCH_DATA', data:searchData})}> */}
                                {/* <Link button className="searchbutton btn btn-outline-dark" onClick={myStore.dispatch({type:'SEARCH_DATA', data:searchData})} to={`/search/${searchData}`}>Search</Link> */}
                            {/* </div> */}
                            <button className="searchbutton btn btn-outline-dark" onClick={()=>myStore.dispatch({type:'SEARCH_DATA', data:searchData})}>Search</button>
                        </div>



                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="navbar-nav ml-auto">
                                <li><Link className="nav-link shadow-sm active" to="/">Home</Link></li>
                                <li className="nav-item d-inline-flex"><Link className="nav-link shadow-sm" to="/about">About Us</Link></li>
                                <li className="nav-item d-inline-flex"><Link className="nav-link shadow-sm" to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>




                <Swiper />
            </div>
        </>
    )
}

export default Navbar

