import React, { Component } from 'react'
import NewsArticle from './NewsArticle';
import Highlight from '../Highlight/Highlight';
import FetchApiData from '../../api/api';
import Loader from '../Loader/Loader'
import './News.css'
export default class News extends Component {
    constructor(props){
        super(props);
        this.state={data:{}}
        this.newsData = this.newsData.bind(this);
    }

    componentWillReceiveProps(nextProps){
        let api =`https://newsapi.org/v2/everything?q=${nextProps.searchData}&apiKey=34a5877b5d4244069c551275a34b93b7`;
        this.newsData(api);
    }
    componentDidMount(){
        let searchData = window.location.href.split('search/')[1];
        let api = this.props.api? this.props.api : searchData? `https://newsapi.org/v2/everything?q=${searchData}&apiKey=34a5877b5d4244069c551275a34b93b7`:'';
        this.newsData(api);
    }
    newsData(api){
                FetchApiData(api).then((data)=>{
                    this.setState({data:data.articles})
                });
            }

  render() {
    return (
        this.state.data? !this.state.data.length?<Loader/>:
                <div>
                    <Highlight data={this.state.data} />
        
                    {/* <Highlight data={data} /> */}
        
                    <h3>Latest News</h3>
        
                    <div className="container">
        
                        <div className="row">
        
        
                            {this.state.data ? this.state.data.map((news, ind) => (
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
            :'');
  }
}


