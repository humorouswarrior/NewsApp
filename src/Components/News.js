import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =  []
  constructor(){ //runs first
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){ //componentDidMount() is a library function and it runs before render(). we have made it async
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=78d1ac17821f4fba9844a374b5227817";
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

  handlePrevClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=78d1ac17821f4fba9844a374b5227817&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1
    })
  }

  handleNextClick = async ()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

    }

    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=78d1ac17821f4fba9844a374b5227817&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1
    })
    }
  }
  render() {
    return (
      <div>
        <div className="container my-3">
            <h2>News Monkey - Top Headlines</h2>
            <div className="row">
            {this.state.articles.map((element)=>{

              return  <div className="col-md-4" key = {element.url}>
                <NewsItem title = {element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage?element.urlToImage:""} newsUrl = {element.url}/>
                </div>

            })}
        
            </div>
        </div>
        <div className="container d-flex justify-content-between">
            <button type="button" disabled = {this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button> 
            <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button> 
        </div> 
      </div>
    )
  }
}

export default News