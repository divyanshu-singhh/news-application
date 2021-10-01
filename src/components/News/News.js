import React, { useState, useEffect } from 'react'
import NewsArticle from './NewsArticle';
import Highlight from '../Highlight/Highlight';
import './News.css'

function News(props) {

    const [data, setData] = useState([]);

    const newsData = async () => {

        const res = await fetch(props.api);
        const actualData = await res.json();
        console.log(actualData);
        setData(actualData.articles);
    }
    


    useEffect(() => {
        newsData();
    }, [])











    // const data = useContext(NewsContext);

    // const nextPage = () => {
    //     console.log("next");
    // }

    // const previousPage = () => {
    //     console.log("previous");
    // }



    return (
        <div>

            <Highlight data={data} />



            <h3>Latest News</h3>

            <div className="container">

                <div className="row">


                    {data ? data.map((news, ind) => (
                        <>
                            <div className="col-md-4"  key={ind}>
                                <NewsArticle data={news} key={ind} />
                            </div>
                        </>
                    ))
                        : "Loading..."}

                </div>
            </div>

            {/* <div className="container d-flex justify-content-between" style={{ margin: "5px 0px 10px 0px" }}>
                <button type="button" className="btn btn-dark" onClick={previousPage}>&larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={nextPage}>Next &rarr; </button>
            </div> */}

        </div>
    );
}

export default News;

