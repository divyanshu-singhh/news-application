import React from 'react'

function NewsArticle({ data }) {
    return (
        <>
            <div className="card">
                <div className="headlines">
                <a href={data.url} target="_blank" rel="noreferrer"><img src={data.urlToImage} alt="News Image" height="150px" width="150px" /></a>
                    <a href={data.url} target="_blank" rel="noreferrer" className="title">{data.title}</a>
                </div>

                <div className="cardFooter">
            {/* <span>author: {data.author}</span> */}
            <span>{data.publishedAt.substring(0, 10)}</span>
                    <span>{data.publishedAt.substring(11,19)}</span>
                    <span>Source: {data.source.name}</span>
                </div>
            </div>

            

        </>
    )
}

export default NewsArticle
