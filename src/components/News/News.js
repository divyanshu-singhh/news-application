import React, { useState, useEffect } from 'react'
import NewsArticle from './NewsArticle';
import Highlight from '../Highlight/Highlight';
import FetchApiData from '../../api/api';
import './News.css'

function News(props) {

    const [data, setData] = useState([]);

    const newsData = () => {
        FetchApiData(props.api).then((data)=>{
            setData(data.articles);
        });
    }
    


    useEffect(() => {
        newsData();
        let res1 = FetchApiData(props.api).then((data)=>{
            console.log(data);
        });
        console.log(res1);
    }, [])

    return (
        <div>

            <Highlight data={data} />



            <h3>Latest News</h3>

            <div className="container">

                <div className="row">


                    {data ? data.map((news, ind) => (
                        <>
                            <div className="col-md-4">
                                <NewsArticle data={news} key={ind} />
                            </div>
                        </>
                    ))
                        : "Loading..."}

                </div>
            </div>
        </div>
    );
}

export default News;

