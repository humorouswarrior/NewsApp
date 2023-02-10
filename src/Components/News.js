import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country:"in",
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(){ //runs first
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNews(){ //this was create while refactoring the file
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78d1ac17821f4fba9844a374b5227817&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false})
  }

  async componentDidMount(){ //componentDidMount() is a library function and it runs before render(). we have made it async
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78d1ac17821f4fba9844a374b5227817&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({articles: parsedData.articles, 
    //   totalResults: parsedData.totalResults,
    //   loading: false})
    this.updateNews()
  }

  handlePrevClick = async ()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78d1ac17821f4fba9844a374b5227817&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1,
    //   loading: false
    // })
    this.setState({page:this.state.page-1})
    this.updateNews()
  }

  handleNextClick = async ()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78d1ac17821f4fba9844a374b5227817&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page + 1,
    //   loading: false
    // })
    this.setState({page:this.state.page+1})
    this.updateNews()
    
  }
  render() {
    return (
      <div>
        <div className="container my-3">
            <h2 className = "text-center" style = {{margin: "30px"}} >News Monkey - Top Headlines</h2>
            {this.state.loading && <Spinner />}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{

              return  <div className="col-md-4" key = {element.url}>
                <NewsItem title = {element.title?element.title.slice(0,45):""} description = {element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage?element.urlToImage:""} newsUrl = {element.url} author = {element.author} source = {element.source.name}/>
                </div>

            })}
        
            </div>
        </div>
        <div className="container d-flex justify-content-between">
            <button type="button" disabled = {this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button> 
            <button type="button" disabled = {this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button> 
        </div> 
      </div>
    )
  }
}

export default News