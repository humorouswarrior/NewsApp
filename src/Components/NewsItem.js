/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style = {{left:'80%', zIndex: '1'}}>Source: {source?source:"unknown"}<span className="visually-hidden">unread messages</span></span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                  
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">Author: {author?author:"unknown"}</small></p>
                <a href= {newsUrl} target = "_blank" className="btn btn-dark btn-sm">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem