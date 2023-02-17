/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >

        <div>
          <span className="badge rounded-pill bg-danger" style = {{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>Source: {source?source:"unknown"}<span className="visually-hidden">unread messages</span></span>
        </div>
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